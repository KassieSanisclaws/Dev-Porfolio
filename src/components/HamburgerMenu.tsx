import { useState } from 'react';
import { Typography, Box, IconButton, } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const HamburgerMenu = () => {
    const [ open, setOpen ] = useState(false);
    
    const toggleMenu = () => {
        setOpen(!open);
    };
 return (
        <Box sx={{ position: { xs: 'fixed', md: 'relative' }, zIndex: 10, }}>
            <IconButton onClick={toggleMenu} sx={{ display: { lg: "none" }, bgcolor: 'rgba(255,255,255,0.7)' }}>
                {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            {open && (
                <Box
                    className="appGlass"
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bgcolor: 'rgba(255,255,255,0.8)',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                 {/* Close button for the mobile menu */}
                 <IconButton
                     onClick={toggleMenu}
                     sx={{
                         position: 'absolute',
                         top: 16,
                         right: 16,
                         bgcolor: 'rgba(0,0,0,0.5)',
                         color: 'white',
                     }}>
                     <CloseIcon />
                 </IconButton>

                    <Typography variant="h4" sx={{ mb: 2 }}>
                        <a href="#heroSection">Home</a>
                    </Typography>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        <a href="#aboutMe">About Me</a>
                    </Typography>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        <a href="#mySkills">My Skills</a>
                    </Typography>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        <a href="#projects">Projects</a>
                    </Typography>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        <a href="#contactMe">Contact Me</a>
                    </Typography>
                </Box>
            )}
       </Box>
    )
};

export default HamburgerMenu;
