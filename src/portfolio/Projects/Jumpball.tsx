import ValoMotion from "./ValoMotion";
import ProjectLayout, { ProjectContent, ProjectImage, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import { Link } from "react-router";
import project_image from './images/jumpball_screen.png'

function JumpBall() {
    return <ProjectLayout>
        <ProjectTitle>JumpBall</ProjectTitle>
        <ProjectImage image={project_image} alt={"A woman mid-air playing Toywatch on a trampoline."} />
        <ProjectContent>
            <p>JumpBall is a game for Valo Motion's ValoJump, an augmented reality trampoline platorm. At its core, it's a trampoline version of Pong, with additions like curveball mechanics and ball speed multipliers.</p> 
            <p>I joined the JumpBall team mid-project and worked on the visual appearance and flow of the game and some detailed mechanics like the curveball effects.</p>
            <p><Link to={"https://www.youtube.com/watch?v=OwVfIGvFFls"}>JumpBall announcement video on YouTube</Link></p>
            <ProjectTech list={["C#", "Unity", "HLSL"]} />
        </ProjectContent>
        <ValoMotion />
    </ProjectLayout>

}

export default JumpBall;