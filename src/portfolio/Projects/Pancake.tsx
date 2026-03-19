import { Link } from "react-router";
import ProjectLayout, { ProjectContent, ProjectImage, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import GameJam from "./GameJam";
import project_image from './images/pancake.png';

function Pancake() {


    return <ProjectLayout>
        <ProjectTitle>Lättyyn</ProjectTitle>
        <ProjectImage image={project_image} alt={"Split-screen view of game characters throwing pancakes at each other"} />
        <ProjectContent>
            <p>Lättyyn is a multiplayer jam game about using wonky motion controls to throw pancakes at the opponents face. "Lättyyn" has a dual meaning here: the literal translation from Finnish is "in the pancake", but it's also a phrase meaning "in the face".</p>
            <p>The game is a bit of a celebration of early motion controls in games and the struggle of getting them do what you want. The game uses Wii Remote controllers and is made with Unity and C#. We also tried using the Nintendo Switch JoyCons, but the higher accuracy of the more modern controller made the game trivial and lose its point.</p>
            <p><Link to={"https://www.youtube.com/watch?v=29FIgBNIGMs"} target={"_blank"}>See Lättyyn trailer on YouTube</Link></p>
            <ProjectTech list={["Unity", "C#"]} />
        </ProjectContent>
       
        <GameJam />
        </ProjectLayout>
}

export default Pancake;