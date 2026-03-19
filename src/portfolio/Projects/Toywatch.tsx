import ValoMotion from "./ValoMotion";
import ProjectLayout, { ProjectContent, ProjectImage, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import toywatch_image from './images/ValoJump_Toywatch_1.jpg';

function Toywatch() {

    return <ProjectLayout>
        <ProjectTitle>Toywatch</ProjectTitle>
        <ProjectImage image={toywatch_image} alt={"A woman mid-air playing Toywatch on a trampoline."} />
        <ProjectContent>
            <p>Toywatch is one of the first games on ValoJump, Valo Motion's trampoline platform. Using computer vision, the player and their movement while jumping on a trampoline are reflected into the game world. The goal of the game is to hit floating beach toy enemies that come in waves.</p> 
            <p>I worked on the post-launch support of the game, implementing balance improvements and creating new content.</p>
            <ProjectTech list={["C#", "Unity"]} />
        </ProjectContent>
        <ValoMotion />
    </ProjectLayout>

}

export default Toywatch;