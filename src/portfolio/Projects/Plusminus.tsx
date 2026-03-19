import ProjectLayout, { ProjectContent, ProjectImage, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import plusminus_image from './images/plusminus.png';
import { Link } from "react-router";
import plusminus_chain from './images/plusminus_chain.png';
import plusminus_window from './images/plusminus_window.png';

function Plusminus() {

    return <ProjectLayout>
        <ProjectTitle>Plusminus</ProjectTitle>
        <ProjectImage image={plusminus_image} alt={"Robot holding magnets on both hands, facing a larger robot"} />
        <ProjectContent>
            <p>Plusminus is a physics-based action-puzzle game about magnetism. The player controls a humanoid robot in a science facility who can manipulate the environment around them by magnetizing different kinds of objects.</p> 
            <p>It started as a team project during a game project course at Aalto University and evolved into a 1,5 year game project funded by the university and shown at various events, including the Experimental Gameplay Workshop at Game Developers Conference 2019. It also placed first at the CHI PLAY 2018 Student Game Competition.</p>
            <p><Link target="_blank" to={"https://www.youtube.com/watch?v=uZn4PpgYFiM"}>See Plusminus GDC19 trailer on YouTube</Link></p>
        </ProjectContent>
        <ProjectImage image={[plusminus_window, plusminus_chain ]} alt={["Screenshot of enemies in the game.", "Screenshot of objects being attached to each other with magnetism."]} per_row={2} />
        <ProjectContent>
            <p>The game was made by a team of six, and I was one of the two programmers of the game. My team member was responsible of the magnetism mechanics, and I did most of the other development, including environmental programming, enemy behaviors, camera work, user interface, and such. In addition to programming, I designed and created most of the environments, including everything in the final version seen at the GDC trailer.</p>
           <ProjectTech list={["C#", "Unity", "HLSL"]} />
        </ProjectContent>
        <ProjectContent>
            <p>The website to download the game is down, but I intend to have the game downloadable in the future. For now, please contact me for a playable version.</p>
        </ProjectContent>
    </ProjectLayout>
}


export default Plusminus;