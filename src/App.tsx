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

function App() {
  const theme = AppTheme.palette;

 return (
  <>
   <Header/>
    <Box className="grid-sections">
        <Box className="grid-item heroSection" 
             sx={{ bgcolor: theme.primary.main, 
                   overflow: "hidden",
              }}>
          <HeroSection />
        </Box>
      <Box className="grid-item aboutMe" 
           sx={{ bgcolor: theme.info.main, 
                 overflow: "hidden",
           }}>
          <AboutMe />
      </Box>
      <Box className="grid-item mySkills" 
           sx={{ bgcolor: theme.success.main, 
                 overflow: "hidden",
           }}>
          <MySkills />
      </Box>
      <Box className="grid-item projects" 
           sx={{ bgcolor: theme.warning.main, 
                 overflow: "hidden",
           }}>
          <DevProjects />
      </Box>
      <Box className="grid-item contactMe" 
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
