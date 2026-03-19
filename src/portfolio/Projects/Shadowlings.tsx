import { Stack, Typography } from "@mui/material";
import ValoMotion from "./ValoMotion";
import ProjectLayout, { ProjectContent, ProjectImage, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import { Link } from "react-router";
import project_image from './images/shadowlings_screen.png';

function Shadowlings() {

    return <ProjectLayout>
        <ProjectTitle>Shadowlings</ProjectTitle>
        <ProjectImage image={project_image} alt={"Shadowlings logo with people playing the game in the background."} />
        <ProjectContent>
            <p>In Shadowlings, you attempt to gently lead adorable balls of fluff to home while moving on a climbing wall. The game is made for ValoClimb, Valo Motion's augmented reality climbing wall platform.</p> 
            <p>I joined the team after the prototyping phase and worked on making it a finished product. I did tools programming, UI implementation, work on the game flow, and general finishing touches. I also designed majority of the final levels.</p>
            <p><Link to={"https://www.youtube.com/watch?v=bhJmGn5PCjI"}>Shadowlings announcement video on YouTube</Link></p>
            <ProjectTech list={["C#", "Unity", "HLSL"]} />
        </ProjectContent>
        <ValoMotion />
    </ProjectLayout>

}

export default Shadowlings;