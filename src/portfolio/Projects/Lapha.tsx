import { Link } from "react-router";
import ProjectLayout, { ProjectContent, ProjectImage, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import Twoday from "./Twoday";
import site from './images/lapha_site.png';

function Lapha() {
    return (
    <ProjectLayout>
      <ProjectTitle>Lapha</ProjectTitle>
      <ProjectImage image={site} alt={"Lapha website screenshot"} />
      <ProjectContent>
        <p>
            Lapha is the official website of the Lapland county in Finland. The site provides information about the county, its services, and news. The site is built with Liferay and developed by Twoday.
        </p>
        <p>During my time at Twoday, I did accessibility improvements across the site following the WCAG 2.1 standard while handling support tickets, focusing on keyboard navigation, screen reader support, and semantic HTML. I also implemented translations for North Sami, Inari Sami, and Skolt Sami.</p>
        <ProjectTech list={["JavaScript", "Liferay", "CSS", "SQL", "Semantic HTML"]} />
      </ProjectContent>
      <Twoday />
    </ProjectLayout>
  );
}       

export default Lapha;