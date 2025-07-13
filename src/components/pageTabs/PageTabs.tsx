import { Button, Typography, Box } from "@mui/material";
import AppTheme from "../../theme/AppTheme";

// Styles for the tabs
const tabStyles = {
    background: 'linear-gradient(rgba(20, 206, 51, 0.712), rgba(255, 255, 255, 0.466))',
    width: '6.7vw',
    height: '9vh',
    borderTopLeftRadius: '13px',
    borderTopRightRadius: '13px',
    borderBottomStyle: 'none',
    transition: 'transform 0.3s ease',
    color: "black",
    '&:hover': {
        backgroundColor: 'grey',
        cursor: 'pointer',
        transform: 'scale(1.12)',
    },
    '& a': {
        textDecoration: 'none',
        fontWeight: 'bolder',
        color: 'var(--a-text-deepEmeraldGreen)',
    },
};
const PageTabs = () => {
const theme = AppTheme.palette;
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
    return (
        <Box sx={{ width: '100%', margin: '0', padding: '0', boxSizing: 'border-box', position: 'relative' }}>
            <Box sx={{ width: '100%', position: 'relative' }}>
                <Box sx={{ height: '100%', width: "100%", display: 'flex', justifyContent: 'space-between' }}>
                    {/** Tabs List **/}
                    <Button sx={tabStyles} onClick={() => scrollToSection("heroSection")}>
                        <Typography variant="h6" sx={{ color: "white", textTransform: "uppercase", fontWeight: "bold", textShadow: `2px 2px 4px ${theme.primary.dark}`}}>
                            Hero
                        </Typography>
                    </Button>
                    <Button sx={tabStyles} onClick={() => scrollToSection("aboutMe")}>
                        <Typography variant="h6" sx={{ color: "white", textTransform: "uppercase", fontWeight: "bold", textShadow: `2px 2px 4px ${theme.primary.dark}` }}>
                            About
                        </Typography>
                    </Button>
                    <Button sx={tabStyles} onClick={() => scrollToSection("skills")}>
                        <Typography variant="h6" sx={{ color: "white", textTransform: "uppercase", fontWeight: "bold", textShadow: `2px 2px 4px ${theme.primary.dark}` }}>
                            Skills
                        </Typography>
                    </Button>
                    
                    <Button sx={tabStyles} onClick={() => scrollToSection("projects")}>
                        <Typography variant="h6" sx={{ color: "white", textTransform: "uppercase", fontWeight: "bold", textShadow: `2px 2px 4px ${theme.primary.dark}` }}>
                            Projects
                        </Typography>
                    </Button>
                    <Button sx={tabStyles} onClick={() => scrollToSection("wireframe")}>
                        <Typography variant="h6" sx={{ color: "white", textTransform: "uppercase", fontWeight: "bold", textShadow: `2px 2px 4px ${theme.primary.dark}` }}>
                            wireframes
                        </Typography>
                    </Button>
                    <Button sx={tabStyles} onClick={() => scrollToSection("contactMe")}>
                        <Typography variant="h6" sx={{ color: "white", textTransform: "uppercase", fontWeight: "bold", textShadow: `2px 2px 4px ${theme.primary.dark}` }}>
                            Contact
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default PageTabs;