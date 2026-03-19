import { Box, Button, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import useProjects, { type Project } from "./util/useProjects";

function Cards() {
    
    const [tags, setTags] = useState<string[]>([]);
    const projects = useProjects();

    const mousePositionRef = useRef({ x: 0, y: 0 });
    const cards = useRef<any[]>([]);

    const [openingCard, setOpeningCard] = useState<string | null>(null);

    let navigate = useNavigate();

    const buttonTags = ["web", "game", "work", "personal", "wip"]

    const toggleTag = (tag: string) => {
        let new_tags: any[] = [...tags];
        if (new_tags.includes(tag))
            new_tags.splice(new_tags.indexOf(tag), 1);
        else
            new_tags.push(tag);
            
        setTags(new_tags.length > 0 ? [new_tags.at(-1)] : []);
    }

    // Setup a listener for tracking mouse movement.
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePositionRef.current.x = e.clientX;
            mousePositionRef.current.y = e.clientY;
        }

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Animate children based on mouse position  
    useEffect(() => {
        const loop = () => {
            cards.current.forEach((card) => card?.update(mousePositionRef.current));
            requestAnimationFrame(loop);
        }

        requestAnimationFrame(loop);
    }, []);

    // Manage scroll restoration
    useEffect(() => {
        requestAnimationFrame(() => {

            if("previous_project_opened" in window.localStorage) {

                const id = window.localStorage.getItem("previous_project_opened");
                const scrollDest = cards.current.find((card) => card?.get_id() == id);
                
                scrollDest.scrollTo();
            }

            
            window.localStorage.removeItem("previous_project_opened");
        });
    }, []);

    const is_project_flipped = (project: Project) => {

        if (openingCard !== null) 
            return openingCard != project.id;
        return false;

        if (tags.length == 0) return false;

        return !tags.every((tag: string) => project.tags.includes(tag))
    }

    const isProjectTagged = (project: Project) : boolean => {
        if (tags.length == 0) return true;
        return tags.every((tag: string) => project.tags.includes(tag))
    }

    const openProject = (project: Project, card: HTMLElement | null) => {
        if (card == null)
            return;

        const rect: DOMRect = card.getBoundingClientRect();
        window.localStorage.setItem("project_card_location", JSON.stringify({ x: rect.x, y: rect.y }));
        setOpeningCard(project.id);

        navigate(`${project.id}`)
        //animateCards("hide", project.id).then(() => navigate(`${project.id}`))
        
    }

    return <>
        {false && <Box sx={{width: "100%", display: "flex", gap: "20px", flexGrow: 0, height: "36px"}}>
            <Button className={`filter-button ${tags.length == 0 ? "active" : "deactive"}`} sx={{flexGrow: 0}} variant="contained" onClick={() => setTags([])}>{"All"}</Button>
            
            {buttonTags.map((tag) => 
                <Button key={tag} className={`filter-button ${tags.includes(tag) ? "active" : "deactive"}`} sx={{flexGrow: 0}} variant="contained" onClick={() => toggleTag(tag)}>{tag}</Button>
            )}
        </Box>}
        <Typography component={"h2"} sx={{width: "100%", fontSize: "1.2em" }} className="header-title">Projects I've worked on</Typography>
        <Box className="projects-list" id="projects-list">
            <Grid container spacing={3}>
        { projects.filter((project) => isProjectTagged(project)).map((project: Project, index: number) => (
            
                <Grid key={index} size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}>
                    <ProjectCard key={index} ref={(el): void => {cards.current[index] = el}} project={project} flipped={is_project_flipped(project)} onSelected={(project: Project, card: HTMLElement | null) => openProject(project, card)} />
                </Grid>
        )) }
            </Grid>
        </Box> 
    </>
}

export default Cards;