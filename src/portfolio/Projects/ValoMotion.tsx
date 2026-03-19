import { Box } from "@mui/material";
import { ProjectContent, ProjectImage, ProjectTitle } from "./__ProjectLayout";
import valologo from './images/valologo.svg';
import { Link } from "react-router";

function ValoMotion() {

    return (<>
        <ProjectTitle>Valo Motion</ProjectTitle>
        <ProjectContent>
            <Box sx={{width: "100%"}}><ProjectImage image={valologo} spacing={2} alt={"Valo Motion logo"} /></Box>
            <p>Valo Motion is an augmented reality exergame company in Helsinki, Finland. I worked there as a game developer and designer in 2019-2021.</p>
            <p>I created games for Valo's two products; ValoClimb, an augmented reality bouldering wall, and ValoJump, a trampoline coupled with computer vision. In addition to game development, I did mobile app development, player data analysis, prototyping, QA and testing, technical artists tasks, and conference work.</p>
            <p><Link to={"https://www.valomotion.com"}>Valo Motion official site</Link></p>
        </ProjectContent>
    </>)
}

export default ValoMotion;