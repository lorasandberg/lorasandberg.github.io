import { Typography, Stack, Box, ButtonBase } from "@mui/material";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import WorkIcon from '@mui/icons-material/Work';
import ConstructionIcon from '@mui/icons-material/Construction';
import PersonalIcon from '@mui/icons-material/Favorite';
import { getProjectImage } from "./Projects/__ProjectElement";
import type { Project } from "./util/useProjects";

const ProjectCard = forwardRef((props: { project: Project, flipped?: boolean, disabled?: boolean, onSelected?: (project: Project, card: HTMLElement | null) => void }, ref) => {
    const { project } = props;
    const flipped = typeof(props.flipped) !== 'undefined' ? props.flipped : false;
    const disabled = typeof(props.disabled) !== 'undefined' ? props.disabled : false;
    const onSelected = typeof(props.onSelected) != 'undefined' ? props.onSelected : () => {}

    // Need to create refs for the parts that are animated.
    const cardRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useImperativeHandle(ref, () => ({
        get_id() { return project.id },
        scrollTo() {
            if (typeof(cardRef.current) == "undefined")
                return;
            cardRef.current?.scrollIntoView({ behavior: 'instant', block: 'center'});
        },
        update(mouse: { x: number, y: number }) {
    
            if(cardRef.current === null || imageRef.current === null)
                return;

            // map global mouse position into [-1, 1] position within the component
            const rect: DOMRect = cardRef.current.getBoundingClientRect()

            let x: number = 0, y: number = 0;

            const within = (rect: DOMRect, x: number, y: number) : boolean => {
                if ( x < rect.x ) return false;
                if ( y < rect.y ) return false;
                if ( x > rect.right ) return false;
                if ( y > rect.bottom ) return false;
                return true;
            }

            // check if mouse if within card rect
            if (within(rect, mouse.x, mouse.y)) {
                const cardCenter = { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 }

                const clamp = (x: number, min: number, max: number) => Math.min(max, Math.max(min, x));

                x = clamp((mouse.x - cardCenter.x) / (rect.width / 2), -1, 1);
                y = clamp((mouse.y - cardCenter.y) / (rect.height / 2), -1, 1);
            }

            // update card and image css
            x = -x; y = -y;
            cardRef.current.style.transform = `perspective(20cm) rotateX(${-y * 15}deg) rotateY(${x * 20}deg)`;
            imageRef.current.style.transform = `translate(${-x * 20}px, ${-y * 20}px)`
            /*
            card
            transform: `perspective(20cm) rotateX(${realMousePos.y * 10}deg) rotateY(${-realMousePos.x * 15}deg)`,

            image
            transform: `translate(${realMousePos.x * 20}px, ${realMousePos.y * 20 - 20}px)`,
            */
        }
    }));

    const onClick = () => {
        onSelected(project, cardRef.current);
    }

    const flipState = flipped ? { transform: "rotateY(180deg)" } : {}

    return (
    <Box className="project-container" sx={flipState} data-project-id={project.id}>
        <ButtonBase component={Box} onClick={onClick} sx={{ width: "100%"}} disabled={disabled}>
            <Box ref={cardRef} className="project-card">
                <Stack sx={{ height: "100%"}}>
                    <Box className="project-card-image" sx={{height: "55%"}}>
                        <Box sx={{ position: "relative", display: "flex", width: "120%", height: "120%", left: "-10%", top: "-10%" }}> 
                            <img ref={imageRef} src={getProjectImage(project)} />            
                        </Box>
                    </Box>
                    
                    <Stack className="card-title-row" direction={"row"}>
                        <Typography className="card-title">{project.name}</Typography>
                    </Stack>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexGrow: 2 }}>
                        <Typography className="card-text" sx={{padding: "0 1em", paddingTop: 0, textAlign: "center"}}>{project.summary}</Typography>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "2px 10px"}}>
                        <Typography className="card-year">{project.extra_label}</Typography>
                        <Typography className="card-year">{project.time}</Typography>
                    </Box>
                    {/*<Typography className="card-text">{`${Math.floor(100 * mousePos.x) / 100} | ${Math.floor(100 * mousePos.y) / 100}`}</Typography>
                    <Typography className="card-text">{`${realMousePos.x} | ${realMousePos.y}`}</Typography>*/}

                </Stack>
                
                
                <Box className="card-icons-container">
                    <Stack className="card-icons">
                        {project.tags.map((entry) => {
                            return <CardIcon key={entry} type={entry} />
                        })}
                    </Stack>
                </Box>
            </Box>
        </ButtonBase>
    </Box>
    )
});

function CardIcon(props: { type: string }) {
    const { type } = props;

    const [visible, setVisible] = useState<boolean>(false);

    const is_visible = () => getLabel().length > 0
        
    

    const getIcon = () => {
        if(type == "personal") return <PersonalIcon sx={{fontSize: "20px"}} />
        if(type == "work") return <WorkIcon sx={{fontSize: "20px"}} />
        if(type == "wip") return <ConstructionIcon sx={{fontSize: "20px"}} />
        return <></>
    }

    const getLabel = () => {
        if(type == "personal") return "Personal"
        if(type == "work") return "Work"
        if(type == "wip") return "Currently working on"
        return ""
    }

    if ( !is_visible() ) 
        return <></>

    return <Box className="card-icon" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} >
            {visible && <Typography sx={{padding: "0 5px"}}>{getLabel()}</Typography>}
            {getIcon()}
        </Box>;
}

export default ProjectCard;