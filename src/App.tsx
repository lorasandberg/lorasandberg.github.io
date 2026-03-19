import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Portfolio from './portfolio/Portfolio'
import ProjectDetails from './portfolio/ProjectDetails'
import Cards from './portfolio/Cards'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: "#d32a00"
    }
  }
});

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Portfolio />}>
            <Route index element={<Cards />} />
            <Route path=":project_id" element={<ProjectDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>)
}

export default App
