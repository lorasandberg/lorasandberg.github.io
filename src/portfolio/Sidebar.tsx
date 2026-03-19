import { Box, Button, Grid, Typography } from "@mui/material";
import selfImage from "./assets/self.jpg";
import { Link, useParams } from "react-router";
import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BookWidget from "./BookWidget";
import DownloadIcon from "@mui/icons-material/Download";
import useResponsiveState from "./util/useResponsiveState";

function Sidebar() {
  const layout = useResponsiveState();

  const { project_id } = useParams();

  const show_extended_sidebar = layout.at_least.twoCard || typeof(project_id) == 'undefined';

  return (
    <Box className="sidebar">
      <Link to={"/"}><Box className="sidebar-title" sx={{textAlign: "center"}}>Lora Sandberg</Box></Link>

      {show_extended_sidebar && (<>
        <Box className="sidebar-box">
          <Grid container sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 12 }}>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <img className="self-image" style={{maxWidth: "200px", width: "70%"}} src={selfImage} />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <Typography sx={{fontWeight: "bold"}}>Hi!</Typography>
              <Typography>
                I'm Lora, and I love all things digital and interactive. I've been writing code for websites, apps, servers, games, scripts, spreadsheets, shaders, and more since 2007.
              </Typography>
              <Typography sx={{color: "#bd5500", marginTop: "1em"}}>She/her, located in Québec City, Canada</Typography>
            </Grid>
          </Grid>
        </Box>
        {false && "get my cv" && <Box
          className="sidebar-title"
          sx={{
            padding: "0.5em",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography
            sx={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Are you a recruiter?
          </Typography>
          <Button variant="contained" startIcon={<DownloadIcon />}>
            Get my CV
          </Button>
        </Box>}
        <Box className="sidebar-box" sx={{ display: "none" }}>
          I liked the idea of "widgets" here. Couple covers of books I like, games
          I like. Maybe photography? Could be a link to the photo album.
        </Box>
        <BookWidget />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Button component={Link} to='mailto:lora.sandberg+portfolio@gmail.com?subject=Found%20your%20portfolio%20and%20wanted%20to%20reach%20out&body=Hi%20Lora%2C%0A%0AI%20was%20visiting%20your%20portfolio%20and%20wanted%20to%20say%20hi!%0A%0ABest%2C%0A' target="_blank" variant="contained" startIcon={<EmailIcon />}>
            Contact me
          </Button>
          <Button component={Link} to='https://github.com/lorasandberg' target="_blank"  variant="contained" startIcon={<GithubIcon />}>
            Check my Github
          </Button>
          <Button component={Link} to='https://www.linkedin.com/in/sandberglora/' target="_blank"  variant="contained" startIcon={<LinkedInIcon />}>
            See my LinkedIn
          </Button>
        </Box>
      </>)}
    </Box>
  );
}

export default Sidebar;
