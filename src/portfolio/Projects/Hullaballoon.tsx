import { Stack, Typography } from "@mui/material";
import ValoMotion from "./ValoMotion";
import ProjectLayout, { ProjectContent, ProjectImage, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import { Link } from "react-router";
import hullaballoon_image from './images/hullaballoon.png';

function Hullaballoon() {

    return <ProjectLayout>
        <ProjectTitle>Hullaballoon</ProjectTitle>
        <ProjectImage image={hullaballoon_image} alt={"Children playing a game projected on a climbing wall."} />
        <ProjectContent>
            <p>Hullaballoon was one of the games I developed while working at Valo Motion. The player's goal is to pop as many balloons on the screen as they can, while moving on a climbing wall.</p>
            <p>I designed and created the game myself, in a team with an audio designer and a graphic artist. The game was created with Unity and C#.</p>
            <p>The game's main design principles are 
                <ul>
                    <li>accessibility and ease of entry</li>
                    <li>juicy and satisfying interactions</li>
                    <li>simplicity does not mean boring</li>
                </ul>
                The game was a great success and consistently placed at the top of most played games on ValoClimb.
            </p>
            <p><Link target="_blank" to={"https://www.youtube.com/watch?v=0zSOzTVH9yU"}>Hullaballoon announcement trailer on YouTube</Link></p>
            <ProjectTech list={["C#", "Unity", "HLSL"]} />
        </ProjectContent>
        <ValoMotion />
    </ProjectLayout>

}

export default Hullaballoon;