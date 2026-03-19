import Tech from "../util/Tech";
import ProjectLayout, { ProjectContent, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import Twoday from "./Twoday";

function Hautahaku() {
    return (
    <ProjectLayout>
        <ProjectTitle>Helsingin seurakunta</ProjectTitle>
        <ProjectContent>
            <p>Our client was the Helsinki section of the Finland lutheran church, which for historical reasons has a public duty of managing and maintaining the public graveyards of the country.</p>
            <p>While at Twoday, I was working on a new project to create a logistics system used by mortuaries, transport companies, and graveyards. The project focused on providing secure but fast access for the employees who are part of the care process to access and update the status and location information real-time.</p>
            <p>Additionally, I worked on implementing new features and fixing issues for their grave search service, where users can search the locations of graves by name, year, and such.</p>
            <ProjectTech list={["React", "Next.js", "REST api", "Azure", "SQL"]} />      
        </ProjectContent>
        <Twoday />
    </ProjectLayout>

    )
}

export default Hautahaku;