import ValoMotion from "./ValoMotion";
import ProjectLayout, { ProjectContent, ProjectImage, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import project_image from './images/valoapp.jpg'

function ValoApp() {
    return <ProjectLayout>
        <ProjectTitle>ValoApp</ProjectTitle>
        <ProjectImage image={project_image} alt={"A woman mid-air playing Toywatch on a trampoline."} />
        <ProjectContent>
            <p>A mobile app for Valo Motion games, allowing user to keep game scores and record and share videos of their games on Valo Motion's platforms.</p> 
            <p>I was working on the app interface and the phone-to-game-device connectivity, preparing the app for release.</p>
            <ProjectTech list={["C#", "Unity", "JavaScript"]} />
        </ProjectContent>
        <ValoMotion />
    </ProjectLayout>

}

export default ValoApp;