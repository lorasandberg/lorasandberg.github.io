import { Link } from "react-router";
import ProjectLayout, { ProjectContent, ProjectImage, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import project_image from './images/yousourt.png';

function Yousort() {

    return <ProjectLayout>
        <ProjectTitle>YouSort</ProjectTitle>
        <ProjectImage image={project_image} alt={"Screenshot of YouSort interface"} />
        <ProjectContent>
            <p>YouSort is a small tool for creating lists of anything and then sorting them yourself, with some help. In technical terms, it's a sorting algorithm that asks for a human input to decide the order of a pair of elements.</p>
            <p>The project came to be because, like many people especially in the video game sphere, I like creating lists and sorting things by some arbitrary criteria. With a group of friends, we had a habit of creating and maintaining our individual lists of the best fifty games we've played. I got interested in creating software to help maintaining a list like that and ensuring minimal bias related to such list making. Though essentially it's not really a serious tool, but a result of having fun coding and creating.</p>
            <p>The project was created in 2022.</p>
            <Link target="_blank" to={"https://lorasandberg.me/yousort/"}>See the app live here.</Link>
            <ProjectTech list={["React", "TypeScript"]} />
        </ProjectContent>
    </ProjectLayout>
}

export default Yousort;