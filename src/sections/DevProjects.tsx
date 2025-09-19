import React from 'react';
import { Grid, Typography, Box, Button } from "@mui/material";
import AppTheme from '../theme/AppTheme';
import Modal from '../components/modal/Modal';
import { projectData, DevProjectContent } from '../helpers/DevProjectsData';

const DevProjects = () => {
    const theme = AppTheme.palette;
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedDevProject, setSelectedDevProject] = React.useState<string | null>(null);
    const [selectedProject, setSelectedProject] = React.useState<DevProjectContent | null>(null);

    const handleModalOpen = (projectId: number) => {
    const project = projectData.find(p => p.id === projectId);
    if(project) {
        setSelectedProject(project);
        setSelectedDevProject(project.imageCards[0]); // Set the first image as default
        setModalOpen(true); 
    }
};

    const handleModalClose = () => {
        setModalOpen(false);
        setSelectedDevProject(null);
        setSelectedProject(null);
    };

    return (
        <Box sx={{ 
            padding: 2, 
            background: `linear-gradient(13deg, white 65%, ${theme.primary.main} 90%)`,
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
                                 color: "white",
                                 textShadow: `2px 2px 4px ${theme.primary.dark}`
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
                            <Typography 
                                variant="h5" 
                                sx={{
                                    color: 'white',
                                    textTransform: 'uppercase',
                                    textShadow: `1px 1px 2px ${theme.primary.dark}`,
                                }}
                                gutterBottom
                                >
                                {project.title}
                            </Typography>
                            <Box 
                              sx={{ 
                                height: 150, 
                                backgroundColor: '#f5f5f5', 
                                borderRadius: 1, 
                                mb: 2,
                                }}
                              >
                                <img 
                                   src={project.mainImg} 
                                   alt={project.title} 
                                   style={{ 
                                     width: '100%', 
                                     height: '100%', 
                                     objectFit: 'cover', 
                                     borderRadius: 3 }} 
                                   />
                            </Box>
                            <Button 
                              variant="contained"
                                fullWidth
                                  onClick={() => handleModalOpen(project.id)}
                                    sx={{
                                        background: 'linear-gradient(rgba(20, 206, 51, 0.712), rgba(255, 255, 255, 0.466))',
                                    }}>
                                <Typography 
                                    variant="button"
                                    sx={{
                                        color: 'white',
                                        textShadow: `1px 1px 2px ${theme.primary.dark}`,
                                        textTransform: 'bolder',
                                        }}
                                        >
                                        Preview: {project.title}
                                </Typography>
                            </Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* Modals */}
            {modalOpen && selectedProject && (
                <Modal
                    id={`projects-modal${selectedProject.id}`}
                    open={modalOpen}
                    onClose={handleModalClose}
                    title={selectedProject.title}
                    borderColor={theme.primary.main}
                    padding={4}
                > 

                {/* Main image */}
                  <Box sx={{ mb: 2 }}>
                     <img
                        src={selectedDevProject || selectedProject.mainImg}
                        alt={selectedProject.title}
                        style={{ width: '100%', borderRadius: '8px' }}
                     />
                  </Box>

                 {/* Image card buttons */}
                 {selectedProject.imageCards.length > 0 && (
                     <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                         {selectedProject.imageCards.map((img, index) => (
                             <Button
                                 key={index}
                                 variant="outlined"
                                 onClick={() => setSelectedDevProject(img)}
                                 sx={{
                                     flexGrow: 1,
                                     mx: index !== 0 ? 1 : 0,
                                     backgroundColor: selectedDevProject === img ? '#d3d3d3' : '#f5f5f5',
                                 }}
                             >
                             <Typography
                                    variant="caption"
                                sx={{
                                    fontSize: '19px',
                                    textShadow: `1px 1px 2px ${theme.primary.dark}`,
                                    textTransform: 'uppercase',
                                }}
                             >
                                    {index === 0 ? 'Main Image' : `Image ${index + 1}`}
                             </Typography>
                             </Button>
                         ))}
                     </Box>
                 )}

                {/* Video Section */}
                    {selectedProject.video && (
                        <Box sx={{ mb: 2 }}>
                            <video 
                                src={selectedProject.video}
                                controls
                                style={{ width: '100%', borderRadius: '8px' }}
                            />
                        </Box>
                    )}

                {/* Description */}
              <Box sx={{ p: 2, backgroundColor: '#f9f9f9', borderRadius: 1 }}>
                <Typography>{selectedProject.innerDescription}</Typography>
              </Box>

                {/* GitHub Link */}
                {selectedProject.gitHubLink && (
                    <Box sx={{ mt: 2, textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            href={selectedProject.gitHubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                background: 'linear-gradient(rgba(20, 206, 51, 0.712), rgba(255, 255, 255, 0.466))',
                            }}
                          >
                            <Typography
                                sx={{  
                                    color: 'black' 
                                }}
                             >
                                GitHub Project Link 
                            </Typography>
                        </Button>
                    </Box>
                )}
           </Modal>
              )}
        </Box>
    )
};

export default DevProjects;