import Tech from "../util/Tech";
import ProjectLayout, { ProjectContent, ProjectTech, ProjectTitle } from "./__ProjectLayout";

function Famine() {


    return <ProjectLayout>
        
        <ProjectTitle>Famine</ProjectTitle>
        <ProjectContent>
            <p>The game is an augmented reality exploration game for mobile. You are living in Finland during the great famine of 1866-68. Using GPS location and moving in the real world, you explore the 1800s Finland game world and try to find anything to eat to survive. You gain crops and other ingredients by exploring game nodes, and either eat them or cook them to reduce hunger.</p>
            <p>The game was made in collaboration of students of the history department of University of Helsinki. The game environment and themes take inspiration from Finnish historical landscape, and the game includes numerous iconic local meals you can create with the ingredients you find, including the infamous pettuleipä, bread made of pine wood bark that people were eating during the famine.</p>
            <ProjectTech list={["Unity", "C#"]} />

        </ProjectContent>
        </ProjectLayout>

}

export default Famine;