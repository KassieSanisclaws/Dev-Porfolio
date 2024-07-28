import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import './App.css';
import HeroSection from './sections/HeroSection';

function App() {


  return (
    <Box className="grid-sections">
        <Box className="grid-item heroSection" sx={{ bgcolor: 'secondary.main' }}>
          <HeroSection />
        </Box>
      <Box className="grid-item aboutMe" sx={{ bgcolor: 'info.main' }}>
         <Typography variant="h4" color="white">
           About Me
         </Typography>
      </Box>
      <Box className="grid-item mySkills" sx={{ bgcolor: 'success.main' }}>
         <Typography variant="h4" color="white">
           Skills
         </Typography>
      </Box>
      <Box className="grid-item projects" sx={{ bgcolor: 'warning.main' }}>
         <Typography variant="h4" color="white">
           Projects
         </Typography>
      </Box>
      <Box className="grid-item contactMe" sx={{ bgcolor: 'error.main' }}>
         <Typography variant="h4" color="white">
           Contact Me
         </Typography>
      </Box>
    </Box>
   )
};

export default App
