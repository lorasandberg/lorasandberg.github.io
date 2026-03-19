import { useParams } from "react-router";
import ProjectCard from "./ProjectCard";

import projects from './projects.json';
import { Box, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ProjectElement from './Projects/__ProjectElement';
import type { Project } from "./util/useProjects";
import useResponsiveState from "./util/useResponsiveState";

function ProjectDetails() {
    const { project_id } = useParams();
    const project: Project = useProject(typeof(project_id) !== 'undefined' ? project_id : "404");
    const cardParent = useRef<HTMLElement>(null);

    const [cardPosition, setCardPosition] = useState<{x: number, y: number}>({x: 0, y: 0});
    const [cardRotation, setCardRotation] = useState<number>(10);
    const [cardTransitionOn, setCardTransitionOn] = useState<boolean>(false);

    const layout = useResponsiveState();

    useEffect(() => {
        
        if ("project_card_location" in window.localStorage) {

            const saved_position = JSON.parse(window.localStorage.getItem("project_card_location") || "");
            
            if(cardParent.current) {
                const parentRect: DOMRect = cardParent.current.getBoundingClientRect();

                let position = { 
                    x: saved_position.x - parentRect.x,
                    y: saved_position.y - parentRect.y 
                }
                setCardPosition(position);
                setCardRotation(0);

                setTimeout(() => {
                    setCardTransitionOn(true);
                    setCardPosition({x: 0, y: 0});
                    setCardRotation(10);
                    window.localStorage.removeItem("project_card_location");
                }, 50);
            }
        }

        window.localStorage.setItem("previous_project_opened", project.id);
    }, []);

    const cardStyle = {
        top: cardPosition.y, 
        left: cardPosition.x, 
        transform: `rotate(${cardRotation}deg)`,
        transition: cardTransitionOn ? "top 1s, left 1s, transform 1s" : ""
    }

    return (
        <Grid container>
            <Grid size={{ xs: 12 }} sx={{ position: "relative", maxWidth: "700px" }}>
                {
                    layout.at_least.threeCard && 
                        <Box sx={{position: "relative", zIndex: 2, top: 0, right: "-140px",  justifySelf: "flex-end"}} ref={cardParent}>
                            <Box className="project-details-card-position" sx={cardStyle}>
                                <ProjectCard project={project} disabled={true} />
                            </Box>
                        </Box>
                }
                <ProjectElement project={project} />
            </Grid>
        </Grid>
    )
}

function useProject(project_id: string) : Project { 
    for(let p in projects) 
        if (projects[p].id == project_id)
            return projects[p];
    return projects[0];
}

export default ProjectDetails;
export { useProject }