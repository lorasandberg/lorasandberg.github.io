import './App.css'
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import WorkExperience from './WorkExperience';
import Education from './Education';
import data from './data.json'
import Timeline from './Timeline';
import Profile from './Profile';
import LanguageSkills from './LanguageSkills';
import ContactInfo from './ContactInfo';

function App() {

  return (
    <>
    <Grid container size={12} spacing={{ "xs": 10, "sm": 10, "md": 20 }} sx={{paddingBottom: "12em"}}>
      <Container className="section">
        <h1 id="name_title">Lora Sandberg</h1>
        <Container sx={{ display: { xs: "none", sm: "none", md: "block" }}}><Timeline /></Container>
      </Container>

      <Container className="section profile whitebox">
          <Profile />
      </Container>
          
      <Container className="section">
        <h2>Work Experience</h2>
        <Grid size={12} container spacing={10}>
          {data.work.map((work_experience) => <WorkExperience {...work_experience} /> )}
        </Grid>
      </Container>

      <Container className="section">
        <h2>Education</h2>
        <Grid size={12} container spacing={10}>
          {data.education.map((education) => <Education {...education} /> )}
        </Grid>
      </Container>

      <Container className="section">
          <LanguageSkills />
      </Container>

      <Container className="section">
        <ContactInfo />
      </Container>
    </Grid>
  </>)
}

export default App
