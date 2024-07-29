import { Button, Typography, Box } from "@mui/material";

const PageTabs = () => {
    return (
        <Box sx={{ width: '100%', margin: '0', padding: '0', boxSizing: 'border-box', position: 'relative' }}>
            <Box sx={{ width: '100%', position: 'relative' }}>
                <Box sx={{ height: '100%', width: "100%", display: 'flex', justifyContent: 'space-between' }}>
                    {/** Tabs List **/}
                    <Button sx={tabStyles} href="#heroSection">
                        <Typography variant="h6">
                            Hero
                        </Typography>
                    </Button>
                    <Button sx={tabStyles} href="#aboutMe">
                        <Typography variant="h6">
                            About
                        </Typography>
                    </Button>
                    <Button sx={tabStyles} href="#skills">
                        <Typography variant="h6">
                            Skills
                        </Typography>
                    </Button>
                    <Button sx={tabStyles} href="#education">
                        <Typography variant="h6">
                            Education
                        </Typography>
                    </Button>
                    <Button sx={tabStyles} href="#uxdesigns">
                        <Typography variant="h6">
                            Designs
                        </Typography>
                    </Button>
                    <Button sx={tabStyles} href="#projects-section">
                        <Typography variant="h6">
                            Projects
                        </Typography>
                    </Button>
                    <Button sx={tabStyles} href="#remarks-section">
                        <Typography variant="h6">
                            Remarks
                        </Typography>
                    </Button>
                    <Button sx={tabStyles} href="#contact-me-section">
                        <Typography variant="h6">
                            Contact
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

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

export default PageTabs;