import ProjectLayout, { ProjectContent, ProjectImage, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import project_image from './images/frozenforce_screen.png';

function FrozenForce() {

    return <ProjectLayout>
        <ProjectTitle>Frozen Force</ProjectTitle>
        <ProjectImage image={project_image} alt="Screenshot of Frozen Force website" />
        <ProjectContent>
            <p>Frozen Force was a small-scale team of people playing Mario Kart Wii competitively. It might sound ridiculous (and often it was) but from release in 2008 to server shutdown in 2014, the game had respectable sized international community, national teams and leagues, frequent tournaments, and more.
            </p>
            <p>As web development practice, I created online presence and game result archive for a team I was part of, and I used the opportunity to dive into some of the rising web technology of the time. The frontend is built on Angular, backend is Node with a MongoDB database, built on the Heroku cloud architecture. Shiny, new, some barely commercially viable yet technology back in early 2010s.</p>
            
            <p>Additionally, I designed the site and created the visual assets for it. The player avatars are created by the players themselves using the Nintendo Mii system.</p>
            <ProjectTech list={["JavaScript", "Node", "Angular", "MongoDB", "Heroku"]} />
        </ProjectContent>
        </ProjectLayout>
}

export default FrozenForce;