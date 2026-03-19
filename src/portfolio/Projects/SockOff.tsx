import { Link } from "react-router";
import ProjectLayout, { ProjectContent, ProjectImage, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import GameJam from "./GameJam";
import image from './images/sockoff_logo.jpg';

function SockOff() {

    return <ProjectLayout>
        <ProjectTitle>Sockoff</ProjectTitle>
        <ProjectImage image={image} alt={"Sockoff logo"} />
        <ProjectContent>
            <p>Sockoff is a multiplayer jam game about being a sock in a laundry machine. Using only a single joystick, you have to jump around in the machine and avoid touching water as much as possible. If you get too wet, you're out, and the last sock standing wins.</p>
            <p>The game was made during Games Now! Game Jam in 2018.</p>
            <p><Link to={"https://tcmxx.itch.io/sockoff"}>See the game at Itch.io</Link></p>
            <ProjectTech list={["Unity", "C#"]} />
        </ProjectContent>
        <GameJam />
    </ProjectLayout>

}

export default SockOff;