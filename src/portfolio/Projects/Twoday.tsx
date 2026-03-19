import { Link } from "react-router";
import { ProjectContent, ProjectImage, ProjectTitle } from "./__ProjectLayout";
import { Stack } from "@mui/material";
import twoday_image from './images/twoday.png';

function Twoday() {

    return <>
        <ProjectTitle>Twoday</ProjectTitle>
        <ProjectImage image={twoday_image} alt={"Twoday logo"} spacing={2}/>
        <ProjectContent>
            <p>Twoday is a software development company located in Northern Europe, providing IT solutions for local public and private organizations. It has around 3000 employees mostly in the Nordic Countries. In Finland, the company has created software for counties, hospitals, the police, and such.</p> 
            <p>I was a full stack developer at Twoday in 2022 - 2025, and during that time I worked in several different projects. Here's a sample of what did my work at Twoday looked like:</p>
            <ul>
                <li style={{color: "black"}}>I did bug fixes and feature development for large older systems.</li>
                <li style={{color: "black"}}>I build frontends for new projects from scratch, often also contributing on a Spring or Next.js backend.</li>
                <li style={{color: "black"}}>I implemented accessibility improvements on services such as the official website of Finland counties.</li>
                <li style={{color: "black"}}>I implemented Sami language translations of the website of Lapland county.</li>
                <li style={{color: "black"}}>I worked on a video call tool for connecting people in need with social workers.</li>
            </ul> 
            <p>The main technologies I used at Twoday were React, Spring, Next.js, OpenAPI, Jest, Liferay, Blade, and Git.</p>
            <p>Here are some of the public-facing services I worked on:</p>
            <Stack>
                <Link target="_blank" to={"https://omahame.fi"}>Häme county official site</Link>
                <Link target="_blank" to={"https://lapha.fi/fi/etusivu"}>Lapland county official site</Link>
                <Link target="_blank" to={"https://www.twoday.com/cases/ohjaustaverkossa"}>Ohjaustaverkossa.fi service description</Link>
            </Stack>
            </ProjectContent>
        </>
}

export default Twoday;