import { Box, Grid } from "@mui/material";
import ProjectLayout, { ProjectContent, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import GameJam from "./GameJam";
import results_screen from './images/savegamejam_result.png';

function SaveGameJam() {

    return <ProjectLayout>
        <ProjectTitle>Save Game Jam 2018</ProjectTitle>
        <ProjectContent>
            <Grid container>
                <Grid size={{ xs: 12, md: 6 }} sx={{ padding: "0.5em"}}>
                    <p>Save Game Jam was a game jam to raise environmental awareness in 2018. In a team of four, we made a mobile game about removing plastic from the ocean before an adorable young manta ray eats any of it.</p>
                    <p>The game has different common plastic objects found in the ocean, like bottles, bags, and toothbrushes, and keeps a track of the weight of the items removed. At the end of the game, a calculation is shown of how long you would need to continue playing to remove the amount of plastic introduced in the ocean every year.</p>
                    <p>The game was made for Android with Unity and C#.</p>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ padding: "0.5em"}}>
                    <Box sx={{padding: "1em"}}><img width={300} src={results_screen} alt={"Results screen showing how much plastic you removed in-game"} /></Box>
                </Grid>
            </Grid>
            <ProjectTech list={["Unity", "C#"]} />
        </ProjectContent>
        <GameJam />
    </ProjectLayout>
}

export default SaveGameJam;