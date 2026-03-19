import ProjectLayout, { ProjectContent, ProjectImage, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import project_image from './images/sitefolk_screen.png';
import red_screen from './images/stiefolk_v5.png';
import editor from './images/sitefolk_painter.png';
import logo from './images/sitefolk_logo.png';

function SiteFolk() {

    return <ProjectLayout>
        <ProjectTitle>Site Folk</ProjectTitle>
        <ProjectImage image={project_image} alt={"Screenshot of around 2010 version of the website"} />
        <ProjectContent>
            <p>Site Folk was my first web project and possibly the longest-running one as well. Started in 2007 by a team of two, it was a customized game guide and community website for the Finnish community of Nintendo's Animal Crossing series. The project was running for around a decade and went through numerous iterations, the technology used for the project upgraded every step. The site was coupled with an online message board with a respectable-sized and long-lasting community that has still online presence in 2026.</p>
            <ProjectTitle>Technology</ProjectTitle>
            <p>The first version of the website was crude HTML and CSS, but it quickly evolved into a custom PHP MySQL backend. Later iterations utilized CMS technology like WordPress, and the final version was being developed on Angular. For the message board, we used several frameworks over time like phpBB, Simple Machines Forum, and XenForo. The project was also a great testing grounds for various other experiments, and I ended up creating JavaScript and jQuery components and Flash embeds for the community to use. For example, I created a simple HTML5 canvas based online painting tool, an accurate simulation of a feature present in the game series. The website would also change color scheme based on seasons, and the top of the page had a functional real-time clock as a nod to time and seasons being important themes in the series.</p>
            <ProjectTitle>Community</ProjectTitle>
            <p>I managed the community together with the co-founder of the project, and learned great deal about community management and engagement. We also run some simple marketing campaigns to grow the community, and had some low-level collaboration with the official Nintendo product representative in the Nordics.</p>
            <ProjectImage image={[logo, editor, red_screen ]} alt={["SiteFolk logo with a clock", "Screenshot of a pattern editor painting tool", "Screenshot of Site Folk website with fall color scheme"]} per_row={3}/>
            
            <ProjectTech list={["Angular", "SMF", "PHP", "MySQL", "HTML", "CSS", "JavaScript", "WordPress", "Flash", "jQuery", "phpBB", "XenForo"]} />
        </ProjectContent>
    </ProjectLayout>
}

export default SiteFolk;