import { Link } from "react-router";
import ProjectLayout, { ProjectContent, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import GameJam from "./GameJam";

function BreedAFluff() {

    return <ProjectLayout>
        <ProjectTitle>Breed-a-Fluff</ProjectTitle>
        <ProjectContent>
            <p>Breed-a-Fluff is a small mobile game made over a weekend in a game jam. You have a field of fluffballs that reproduce and pass features to their offspring, with a chance for random mutations. Your goal is to fulfill objectives given by the game, like "Have three purple fluffs" or "Have a fluff with wings".</p>
            <p><Link to={"https://ekz.itch.io/breed-a-fluff"}>Try the game at Itch.io</Link></p>
            <p>It's a small silly game, but in retrospective I would have changed some details to address the sensitivity of the topic.</p>
            <p>The game is made with Unity for mobile platforms, but it's also playable on a computer and in browser.</p>
            <ProjectTech list={["Unity", "C#"]} />
        </ProjectContent>
        <GameJam />
        </ProjectLayout>

}

export default BreedAFluff;