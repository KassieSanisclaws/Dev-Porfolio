import { Box } from '@mui/material';
import './App.css';
import AppTheme from './theme/AppTheme';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import AboutMe from './sections/AboutMe';
import MySkills from './sections/MySkills';
import DevProjects from './sections/DevProjects';
import ContactMe from './sections/ContactMe';
import Footer from './components/Footer';
import WireFrame from './sections/WireFrame';

function App() {
  const theme = AppTheme.palette;

 return (
  <>
   <Header/>
    <Box className="grid-sections">
        <Box className="grid-item heroSection"
             id="heroSection" 
             sx={{
                   background: `linear-gradient(10deg, white 60%, ${theme.primary.main} 90%)`,
                   height: "100%",
                   overflow: "hidden",
              }}>
          <HeroSection />
        </Box>
      <Box className="grid-item aboutMe"
            id="aboutMe" 
           sx={{ 
                 height: "100%",
                 overflow: "hidden",
               }}>
          <AboutMe />
      </Box>
      <Box className="grid-item mySkills"
           id="skills" 
           sx={{ bgcolor: theme.success.main, 
                 overflow: "hidden",
           }}>
          <MySkills />
      </Box>
      <Box className="grid-item projects"
           id="projects" 
           sx={{ bgcolor: theme.warning.main, 
                 overflow: "hidden",
           }}>
          <DevProjects />
      </Box>
      <Box className="gird-iem wireframe"
           id="wireframe"
        sx={{ bgcolor: theme.primary.main, 
              overflow: "hidden",
            }}>
      <WireFrame />
      </Box>
      <Box className="grid-item contactMe"
           id="contactMe" 
           sx={{ bgcolor: 'error.main', 
                 overflow: "hidden",
           }}>
         <ContactMe />
      </Box>
    </Box>
  <Footer />
  </>
 )
};

export default App
