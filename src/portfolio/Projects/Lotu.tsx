import { Link } from "react-router";
import ProjectLayout, { ProjectContent, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import Twoday from "./Twoday";

function Lotu() {
  return (
    <ProjectLayout>
      <ProjectTitle>Lotu</ProjectTitle>
      <ProjectContent>
        <p>
          Lotu is an online application management tool for the Finnish travel grant system. The system is used by the Finnish travel grant organization, Lomajarjestot.fi, to manage applications for travel grants. The system is used by both applicants and administrators of the organization. The public-facing application system is made with React, while the administrative system is built on top of the Liferay portal platform, and both are developed and maintained by Twoday.
        </p>
        <p>During my time at Twoday, I worked on the Lotu project as a full stack developer. My main responsibilities included implementing new features, fixing bugs, and improving the overall user experience of the application.</p>
        <p><Link to="https://www.lomajarjestot.fi/in-english/">Lomajarjestot.fi</Link></p>
        <ProjectTech list={["JavaScript", "React", "Spring Boot", "Java", "CSS", "SQL"]} />
      </ProjectContent>
      <Twoday />
    </ProjectLayout>
  );
}

export default Lotu;
