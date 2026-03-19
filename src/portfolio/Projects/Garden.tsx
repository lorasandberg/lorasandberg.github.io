import { Link } from "react-router";
import ProjectLayout, { ProjectContent, ProjectImage, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import screen1 from './images/botanical_screen1.png';
import screen2 from './images/botanical_screen2.png';
import screen3 from './images/botanical_screen3.png';
import Tech from "../util/Tech";

function Garden() {

    return <ProjectLayout>
            <ProjectTitle>Garden</ProjectTitle>
            <ProjectImage image={screen3} alt={"Gameplay picture showcasing a hexmap-flower-field and hand of cards."} />
            <ProjectContent>
                <p>Garden (a working title) is a card-builder rogue-like game about flower planting and hybridization. Your goal is to plant flowers in a hexagon-map field in each round to reach different objectives relating to flower placement, color, and quantities. To do that, you build a hand of cards that allow you to plant flowers, cross flowers, control your cards, and more. Do well enough and you gain a new card or upgrade your existing cards, and pass to the next round.</p>
                
                <p>The game mechanics is a strange mix of things. The idea of flower hybrids come from Nintendo's Animal Crossing, in which flower genetics are rather small and easily ignored part of the game. I also wanted to make the game into a rogue-like with strong meta progression and gradually unlocking content, inspired from The Binding of Isaac, and in terms of user interface it's not difficult to see some Slay the Spire here. For aesthetics, I take inspiration for terracotta, the earthly material of the most iconic flower pot out there, but also an important material for humanity's ancient history, dating back tens of thousands of years</p>

                <ProjectTitle>How is it going</ProjectTitle>
                <p>The game is closing to an MVP state, general game mechanics and loop being there. Visuals need more work, and my goal is to learn more 3D graphics while working on the project.</p>
            </ProjectContent>
            <ProjectImage image={[screen1, screen2]} alt={["Screenshot of game menu showing different types of cards in the game.", "Screenshot of card reward menu between rounds in the game."]} per_row={2}/>
            <ProjectContent>
                <ProjectTitle>Learning Godot</ProjectTitle>
                <p>I've done lot of game development on Unity engine, and as with many others, the 2023 news of <Link to={"https://www.gamedeveloper.com/business/unity-to-start-charging-fee-pegged-to-game-installs"}>Unity pulling the rug under every Unity game developers' feet</Link> ruined my trust in the company. Practicing game development on a platform that would be a business risk of a game company of any size does not sound like a great return of investment, so I took up a project to learn the open-source <Tech>Godot</Tech>. The engine was a good surprise, and it gives the impression of a product that learned from Unity and improved it further.</p>
                <ProjectTech list={["Godot", "C#", "GDScript"]} />
            </ProjectContent>
        </ProjectLayout>

}

export default Garden;