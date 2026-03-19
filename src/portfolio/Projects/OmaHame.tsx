import ProjectLayout, { ProjectContent, ProjectImage, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import Twoday from "./Twoday";
import site from './images/omahame_site.png';

function OmaHame() {
    return ( 
        <ProjectLayout>
            <ProjectTitle>OmaHäme</ProjectTitle>
            <ProjectImage image={site} alt={"OmaHäme website screenshot"} />
            <ProjectContent>
                <p>OmaHäme is a local government website for the Häme region in Finland, serving about 170,000 residents.</p>
                <p>While working at Twoday, I implemented accessibility improvements across the site according to the WCAG 2.1 standard while also handling support tickets. The most important points of improvements were keyboard navigation and screen reader compatibility. At the point of delivery, the site was compliant with the standard. </p>
                <ProjectTech list={["JavaScript", "CSS", "Liferay", "Semantic HTML"]} />   
            </ProjectContent>
            <Twoday />
        </ProjectLayout>
    );
}

export default OmaHame;