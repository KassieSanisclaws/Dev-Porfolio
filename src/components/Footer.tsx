import AppTheme from "../theme/AppTheme";
import { Grid, Typography, Box, IconButton, Link, Fab, Zoom, useScrollTrigger } from "@mui/material";
import  GitHubIcon from "@mui/icons-material/GitHub";
import  LinkedInIcon from "@mui/icons-material/LinkedIn";
import  EmailIcon from "@mui/icons-material/Email";
import  KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1200,
        }}
      >
        <Fab color="primary" size="small" onClick={handleClick} aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
};

const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          background: 'linear-gradient(rgba(20, 206, 51, 0.712), rgba(255, 255, 255, 0.466))',
          color: '#ffffff',
          padding: '2rem 1rem',
          mt: 5,
          borderTopRightRadius: '17px',
          borderTopLeftRadius: '17px',
        }}
      >
        <Grid container spacing={4} justifyContent="space-between">
          {/* Left: Branding and About */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom sx={{ textTransform: "uppercase", fontWeight: "bold", textShadow: `2px 2px 4px ${AppTheme.palette.primary.dark}`}}>
              Kadeem Cherman
            </Typography>
            <Typography variant="body2" sx={{ textTransform: "uppercase", fontWeight: "bold", textShadow: `2px 2px 4px ${AppTheme.palette.primary.dark}`}}>
              Fullstack Developer — passionate about building modern, scalable, and elegant solutions.
            </Typography>
          </Grid>

          {/* Center: Social Links */}
          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="subtitle1" gutterBottom sx={{ textTransform: "uppercase", fontWeight: "bold", textShadow: `2px 2px 4px ${AppTheme.palette.primary.dark}`}}>
              Connect with me
            </Typography>
            <Box>
              <IconButton
                component={Link}
                href="https://github.com/kassiesanisclaws"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                sx={{
                  color: '#fff',
                  transition: 'transform 0.3s ease, color 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    color: AppTheme.palette.secondary.main,
                  },
                }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>

              <IconButton
                component={Link}
                href="https://www.linkedin.com/in/kadeemcherman"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                sx={{
                  color: '#fff',
                  transition: 'transform 0.3s ease, color 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    color: AppTheme.palette.secondary.main,
                  },
                }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>

              <IconButton
                component={Link}
                href="mailto:kassie35dev@gmail.com"
                aria-label="Email"
                sx={{
                  color: '#fff',
                  transition: 'transform 0.3s ease, color 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    color: AppTheme.palette.secondary.main,
                  },
                }}
              >
                <EmailIcon fontSize="large" />
              </IconButton>
            </Box>
          </Grid>

          {/* Right: Built With */}
          <Grid item xs={12} md={4} textAlign={{ xs: 'left', md: 'right' }}>
            <Typography variant="subtitle1" gutterBottom sx={{ textTransform: "uppercase", fontWeight: "bold", textShadow: `2px 2px 4px ${AppTheme.palette.primary.dark}`}}>
              Built with
            </Typography>
            <Typography variant="body2" sx={{ textTransform: "uppercase", fontWeight: "bold", textShadow: `2px 2px 4px ${AppTheme.palette.primary.dark}`}}>
              React • MUI • TypeScript • Firebase • Node.js
            </Typography>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={4}>
          <Typography variant="caption" sx={{ textTransform: "uppercase", fontWeight: "bold", textShadow: `2px 2px 4px ${AppTheme.palette.primary.dark}`}}>
            © {new Date().getFullYear()} Kadeem Cherman. All rights reserved.
          </Typography>
        </Box>
      </Box>

      {/* Scroll to Top Button */}
      <ScrollTop />
    </>
  );
};

export default Footer;