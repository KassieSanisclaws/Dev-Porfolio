import { Grid, Typography, Box, Button, TextField } from "@mui/material";
import AppTheme from '../theme/AppTheme';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const ContactMe = () => {
 const theme = AppTheme.palette;
    return (
        <Box sx={{
            padding: 2,
            background: `linear-gradient(10deg, white 60%, ${theme.primary.main} 90%)`,
        }}>
            <Typography variant="h3" 
                        align="center" 
                        sx={{ 
                              mb: 4,
                              padding: 2,
                              textTransform: 'uppercase',
                              textDecoration: 'underline',
                              color: "white",
                              textShadow: `2px 2px 4px ${theme.primary.dark}`,
                         }}>
                   Contact:
            </Typography>

            <Grid container spacing={2} justifyContent="center">
                {/* Contact Info Section */}
                <Grid item xs={12} md={4} sx={{
                    background: 'linear-gradient(rgba(20, 206, 51, 0.712), rgba(255, 255, 255, 0.466))',
                    padding: 3,
                    boxShadow: `0 20px 20px ${theme.primary.dark}`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textAlign: 'center'
                }}>
                    <Typography variant="h5" sx={{
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        textDecoration: 'underline',
                        marginBottom: 2,
                        marginTop: 2,
                        color: "white",
                        fontSize: '2.5rem',
                        textShadow: `2px 2px 4px ${theme.primary.dark}`,
                    }}>
                        Contact Me:
                    </Typography>
                    <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <Box component="li" sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                            <LocationOnIcon sx={{ marginRight: 1, color: "white", filter: `drop-shadow(2px 2px 4px ${theme.primary.dark})` }} />
                            <Typography
                                sx={{ 
                                    textTransform: 'uppercase',
                                    color: "white",
                                    fontWeight: 'bold',
                                    textShadow: `2px 2px 4px ${theme.primary.dark}`,
                                }}>
                                Canada<br />
                                Brampton, Ontario
                            </Typography>
                        </Box>
                        <Box component="li" sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, marginTop: 3 }}>
                            <EmailIcon sx={{ marginRight: 1, color: "white", filter: `drop-shadow(2px 2px 4px ${theme.primary.dark})` }} />
                            <Typography
                               sx={{ 
                                    textTransform: 'uppercase',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    textShadow: `2px 2px 4px ${theme.primary.dark}`,
                                }}>
                                    Kassie.Sanisclaws35@gmail.com
                            </Typography>
                        </Box>
                        <Box component="li" sx={{ display: 'flex', alignItems: 'center', marginTop: 3 }}>
                            <PhoneIcon sx={{ marginRight: 1, color: "white", filter: `drop-shadow(2px 2px 4px ${theme.primary.dark})` }} />
                            <Typography
                                sx={{ 
                                    textTransform: 'uppercase',
                                    color: "white",
                                    fontWeight: 'bold',
                                    textShadow: `2px 2px 4px ${theme.primary.dark}`,
                                }}>
                                    +1-647-61X-XXXX
                            </Typography>
                        </Box>
                    </Box>

                    {/* Social Media Icons */}
                    <Box component="ul" sx={{ display: 'flex', justifyContent: 'center', marginTop: 3, padding: 0, listStyle: 'none' }}>
                        <Box component="li" sx={{ marginRight: 2 }}>
                            <a href="#"><TwitterIcon sx={{ fontSize: 40, color: theme.primary.dark, opacity: 0.5, '&:hover': { opacity: 1 } }} /></a>
                        </Box>
                        <Box component="li" sx={{ marginRight: 2 }}>
                            <a href="#"><GitHubIcon sx={{ fontSize: 40, color: theme.primary.dark, opacity: 0.5, '&:hover': { opacity: 1 } }} /></a>
                        </Box>
                        <Box component="li" sx={{ marginRight: 2 }}>
                            <a href="#"><InstagramIcon sx={{ fontSize: 40, color: theme.primary.dark, opacity: 0.5, '&:hover': { opacity: 1 } }} /></a>
                        </Box>
                        <Box component="li">
                            <a href="#"><LinkedInIcon sx={{ fontSize: 40, color: theme.primary.dark, opacity: 0.5, '&:hover': { opacity: 1 } }} /></a>
                        </Box>
                    </Box>
                </Grid>

                {/* Contact Form Section */}
                <Grid item xs={12} md={7} sx={{
                    background: "linear-gradient(rgba(20, 206, 51, 0.493), rgba(255, 255, 255, 0.466))",
                    boxShadow: `0 50px 50px ${theme.primary.dark}`,
                    padding: 4
                }}>
                    <Typography variant="h5" sx={{
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        textDecoration: 'underline',
                        marginBottom: 3,
                        marginTop: 2,
                        color: "white",
                        fontSize: '2.5rem',
                        textShadow: `2px 2px 4px ${theme.primary.dark}`,
                    }}>
                        Send Me A Message:
                    </Typography>
                    <Box component="form" sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: 2,
                            }}>
                        <TextField fullWidth label="Name" required variant="standard" />
                        <TextField fullWidth label="Email Address" required variant="standard" />
                        <TextField fullWidth label="Mobile Phone" required variant="standard" />
                        <TextField
                            fullWidth
                            label="Your Message Here"
                            required
                            variant="standard"
                            multiline
                            minRows={4}
                        />
                        <Box sx={{ 
                             display: 'flex', 
                             justifyContent: 'space-evenly',
                             padding: 1,
                             }}>
                        <Button type="submit" 
                                variant="contained" 
                                sx={{
                                  width: '13vw',
                                  background: 'linear-gradient(rgba(20, 206, 51, 0.712), rgba(255, 255, 255, 0.466))', '&:hover': { backgroundColor: theme.primary.light }, 
                                  alignSelf: 'flex-start' 
                                  }}>
                           <Typography variant="button" sx={{ color: "white", filter: `drop-shadow(2px 2px 4px ${theme.primary.dark})` }}>Send Message</Typography>
                        </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
};

export default ContactMe;