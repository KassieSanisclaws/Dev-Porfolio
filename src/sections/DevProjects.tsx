import { Grid, Typography, Box, Button } from "@mui/material";
import AppTheme from '../theme/AppTheme';

const DevProjects = () => {
    const theme = AppTheme.palette;
    const projectData = [
        { id: 1, title: 'React Store-App', buttonId: 'projects-modalBtn' },
        { id: 2, title: 'React Quiz-App', buttonId: 'modalBtn2' },
        { id: 3, title: 'MAUI Note-App', buttonId: 'modalBtn3' },
        { id: 4, title: 'V-JS-ECommerce', buttonId: 'modalBtn4' },
        { id: 5, title: 'Anime MVC-App', buttonId: 'modalBtn5' },
        { id: 6, title: 'React ECommerce', buttonId: 'modalBtn6' },
        { id: 7, title: 'V-Js Calculator-App', buttonId: 'modalBtn7' },
    ];

    return (
        <Box sx={{ 
            padding: 2, 
            background: `linear-gradient(20deg, white 69%, ${theme.primary.main} 50%)`,
            }}
            >
            <Box sx={{ mb: 4, 
                       padding: 2, 
                       borderRadius: 1 
                       }}>
                <Typography variant="h3" 
                            align="center"
                            sx={{ textTransform: 'uppercase',
                                 textDecoration: 'underline',
                            }}
                            >
                            Projects:
                </Typography>
            </Box>
            <Grid container spacing={4}>
                {projectData.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Box sx={{
                            border: '1px solid #ccc',
                            borderRadius: 2,
                            padding: 2,
                            background: 'linear-gradient(rgba(20, 206, 51, 0.712), rgba(255, 255, 255, 0.466))',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            '&:hover': { boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)' },
                        }}>
                            <Typography variant="h5" gutterBottom>{project.title}</Typography>
                            <Box sx={{ height: 150, backgroundColor: '#f5f5f5', borderRadius: 1, mb: 2, border: "3px solid yellow" }}>
                                <img src="/" alt="/" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                            <Button variant="contained"  
                                    id={project.buttonId}
                                    sx={{
                                        width: "100%",
                                        background: 'linear-gradient(rgba(20, 206, 51, 0.712), rgba(255, 255, 255, 0.466))',
                                        
                                    }}>
                                   Open Modal
                            </Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* Modals */}
            {projectData.map((project) => (
                <Box key={project.id} sx={{ display: 'none' }} id={`modalContent${project.id}`}>
                    <Box sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Box sx={{
                            backgroundColor: 'white',
                            padding: 4,
                            borderRadius: 2,
                            width: '80%',
                            maxWidth: 600,
                        }}>
                            <Typography variant="h4" sx={{ mb: 2 }}>Projects Modal {project.id}</Typography>
                            <Button
                                // onClick={() => document.getElementById(`modalContent${project.id}`).style.display = 'none'}
                                sx={{ position: 'absolute', top: 16, right: 16 }}
                            >
                                &times;
                            </Button>
                            <Box sx={{ mb: 2 }}>
                                <Box sx={{ height: 200, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                                    <Typography>img section here</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                <Box sx={{ flexGrow: 1, textAlign: 'center', p: 1, backgroundColor: '#e0e0e0', borderRadius: 1 }}>image card1</Box>
                                <Box sx={{ flexGrow: 1, textAlign: 'center', p: 1, backgroundColor: '#e0e0e0', borderRadius: 1, mx: 1 }}>image card2</Box>
                                <Box sx={{ flexGrow: 1, textAlign: 'center', p: 1, backgroundColor: '#e0e0e0', borderRadius: 1, mx: 1 }}>image card3</Box>
                                <Box sx={{ flexGrow: 1, textAlign: 'center', p: 1, backgroundColor: '#e0e0e0', borderRadius: 1 }}>image card4</Box>
                            </Box>
                            <Box sx={{ p: 2, backgroundColor: '#f9f9f9', borderRadius: 1 }}>
                                <Typography>Inner description</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    )
};

export default DevProjects;