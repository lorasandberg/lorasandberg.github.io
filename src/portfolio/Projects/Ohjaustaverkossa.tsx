import ProjectLayout, { ProjectContent, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import Twoday from "./Twoday";

function Ohjaustaverkossa() {   
    return <ProjectLayout>
        <ProjectTitle>Ohjaustaverkossa.fi</ProjectTitle>
        <ProjectContent>
            <p>Ohjaustaverkossa.fi was a project to create a platform for young people in Finland to access and connect with multidisciplinary teams of social workers in one place. A client could receive help for issues like healthcare, housing, employment, and education, and be connected with professionals of the respective fields. The service also utilized national electronic identification, allowing sensitive documents and information be shared safely.</p>
            <p>While working at Twoday, I worked on an integrated video call service for the platform, coupled with a live chat and a file sharing system. I also handled support tickets across the service.</p>
            <p>Unfortunately, as a part of a wave of public funding cuts, the project was shut down at the end of 2023.</p>
            <ProjectTech list={["Liferay", "JavaScript", "Java", "Spring Boot", "SQL"]} />   
        </ProjectContent>
        <Twoday />
    </ProjectLayout>;
}

export default Ohjaustaverkossa;    