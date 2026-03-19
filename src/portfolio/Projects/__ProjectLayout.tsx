import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useRef, type ReactNode } from "react";
import { Link } from "react-router";

function ProjectLayout(props: { children: ReactNode }) {
    const { children } = props;
    let stack = useRef<HTMLElement>(null);

    useEffect(() => {
        if ('scrollRestoration' in window.history)
            window.history.scrollRestoration = 'manual';

        const scrollDest = stack.current ? stack.current.getBoundingClientRect().top : 0;

        window.scrollTo({top: scrollDest, behavior: "smooth"});
    }, []);

    return <Stack ref={stack} className="project-layout-stack" alignItems={"center"}>
        {children}
        
        <Button className="back-button" component={Link} to={"/"}>Back to projects</Button>
    </Stack>;
}


function ProjectTitle(props: { children: ReactNode }) {
    const { children } = props;
    return <Typography component={"h2"} className="project-layout-title">{ children }</Typography>;
}

function ProjectImage(props: { image: any, alt: string | string[], per_row?: number, spacing?: number, label?: ReactNode }) {
    const { image, alt } = props;
    const per_row: number = typeof(props.per_row) !== 'undefined' ? props.per_row : 1;
    const spacing: string = typeof(props.spacing) !== 'undefined' ? `${props.spacing}em 0` : "0 0";
    const label: ReactNode = typeof(props.label) !== 'undefined' ? <Box className="image-label" sx={{color: "black"}}>{props.label}</Box> : null;

    const style = {
        maxWidth: "100%",
        borderRadius: "15px",
        maxHeight: "40vh",
        minHeight: "100px"
    }

    if(Array.isArray(image)) {

        const cell = (size: number, image: any, alt: string) => 
            <Grid size={size} sx={{ padding: "0"}}>
                <img style={style} src={image} alt={alt} />
                {label}
                </Grid>

        return <Grid sx={{margin: spacing}} container justifyContent={"center"} spacing={1}>{image.map((image: any, i: number) => cell(12 / per_row, image, alt[i]))}</Grid>
    }
    else {
        return <Box sx={{margin: spacing, textAlign: "center"}}><img style={style} src={image} alt={Array.isArray(alt) ? alt[0] : alt} />{label}</Box>
    }

}

function ProjectContent(props: { children: ReactNode }) {
    const { children } = props;

    return <Box className="project-layout-box">{ children }</Box>;
}

function ProjectTech(props: { list: string[] }) {

    const { list } = props;

    return <Box className="tech-tag-list">
            {list.map((tag: string) => <span key={tag} className="tech-tag">{tag}</span>)}
        </Box>
}


export default ProjectLayout;
export {
    ProjectTitle, ProjectImage, ProjectContent, ProjectTech
}