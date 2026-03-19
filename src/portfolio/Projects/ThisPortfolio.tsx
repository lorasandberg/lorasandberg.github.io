import { Stack, Typography } from "@mui/material";
import ProjectLayout, { ProjectContent, ProjectImage, ProjectTech } from "./__ProjectLayout";
import image_2012 from './images/old_portfolio_2009.png';

function ThisPortfolio() {
    return (
        <ProjectLayout>
            <ProjectContent>
                <p>Having some kind of online presence in the form of a custom website feels natural for someone who has always been interested in web technology and design. Whether a blog or a portfolio, I always wanted to have a place to share what I have been working on, and create an archive of projects for myself as well. </p>
                <p>I published the first version of the site sometime in 2007-2008 when I kind internet stranger had offered me a handful of megabytes of web hosting in their personal server. Since then, the website has gone through numerous iterations, following somewhat the overall development of web technology; from simple HTML to PHP, then MySQL database, some JavaScript and jQuery special effects, Flash embeds, WordPress, Bootstrap, Angular, MongoDB database, Tailwind, cloud hosting, and finally this version with <strong>React and Typescript</strong>.</p>
                <p>Web development has evolved a lot, and become much more complex, but I do not miss the old days of having to make different versions of your site for Internet Explorer 8 and for the other browsers, having to ensure that your website works without JavaScript enabled, or using clumsy Flash embeds for simple tasks like running a video on your page.</p>
            </ProjectContent>
            <ProjectImage image={image_2012} alt={"Screenshot of my WordPress-based portfolio site from 2012"} label={"A blog-format version of the portfolio from 2012"} /> 
            <ProjectContent>
                <p>I create and design my portfolio sites myself as a means to improve my skills in the field. For this site, I'm taking a bit deeper dive into React than before, and I'm attempting to stretch a bit the concept of single page applications. The orange hexagon background is both a nod to Nordic design approach of finding inspiration from nature, in this case beehives, and at the same time a reference to hexagon maps commonly used in digital and board games, a beloved hobby of mine. The card motif is again chosen to bring some gameness and playfulness to the portfolio, without compromising usability or intuitiveness.</p>
                <p>As of February 2026, this portfolio is still work in progress. I have a todo list for essential features and another for nice-to-haves, but I'm focusing on getting the portfolio presentable and release-ready as I'm looking for work currently, and a good number of recruiters are possibly ending up here (hi!). For example, I'm still looking to add a dark mode and other accessibility improvements.</p>
                <ProjectTech list={["React", "TypeScript", "Material UI", "WordPress", "JavaScript", "PHP", "SQL", "HTML", "CSS", "Angular", "MongoDB", "Tailwind", "jQuery", "Flash", "Bootstrap", "Photoshop", "Heroku"]} />
            </ProjectContent>
        </ProjectLayout>
    )
}

export default ThisPortfolio;