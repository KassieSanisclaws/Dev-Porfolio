// Description: WireFrame component for displaying project cards with modals
import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import AppTheme from "../theme/AppTheme";
import Modal from "../components/modal/Modal";
import { GameDevGDDData, GameDevGDDContent } from "../helpers/GameDevGDDData";

const GameDevGDD = () => {
 const theme = AppTheme.palette;
 const [selectedProject, setSelectedProject] = React.useState<GameDevGDDContent | null>(null);
 const [modalOpen, setModalOpen] = React.useState(false);
 const [selectedWireframe, setSelectedWireframe] = React.useState<string | null>(null);

 const handleOpenModal = (projectId: number) => {
  const project = GameDevGDDData.find(p => p.id === projectId);
  if (project) {
    setSelectedProject(project);
    setSelectedWireframe(project.GameDevGDDImageCards[0]); // Set the first GameDevGDD image as default
    setModalOpen(true);
  }
};

const handleCloseModal = () => {
  setModalOpen(false);
  setSelectedProject(null);
  setSelectedWireframe(null);
};

const handleDownloadsGDD = (fileName: string) => {
   const link = document.createElement('a');
   link.href = `/documents/${fileName}`; // public folder
   link.download = fileName;
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
};

    return (
        <Box sx={{ 
            padding: 2, 
            background: `linear-gradient(3deg, white 65%, ${theme.primary.main} 90%)`,
            }}
            >
             <Box sx={{ mb: 4, padding: 2, borderRadius: 1 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            textTransform: "uppercase",
            textDecoration: "underline",
            color: "white",
            textShadow: `2px 2px 4px ${theme.primary.dark}`
          }}
        >
          Game Dev GDD:
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {GameDevGDDData.map((GameDevGDD) => (
          <Grid item xs={12} sm={6} md={4} key={GameDevGDD.id}>
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: 2,
                padding: 2,
                background:
                  "linear-gradient(rgba(20, 206, 51, 0.712), rgba(255, 255, 255, 0.466))",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                ":hover": {
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Typography 
                  variant="h5" 
                  sx={{
                    color: 'white',
                    textTransform: 'uppercase',
                    textShadow: `1px 1px 2px ${theme.primary.dark}`,
                    }}
                    gutterBottom
                    >
                {GameDevGDD.title}
              </Typography>
              <Box
                sx={{
                  height: 150,
                  backgroundColor: "#f5f5f5",
                  borderRadius: 1,
                  mb: 2,
                }}
              >
                <img
                  src={GameDevGDD.mainImg}
                  alt={GameDevGDD.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }}
                />
              </Box>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleOpenModal(GameDevGDD.id)}
                sx={{
                  background:
                    "linear-gradient(rgba(20, 206, 51, 0.712), rgba(255, 255, 255, 0.466))",
                }}>
               <Typography 
                   variant="button"
                   sx={{
                        color: 'white',
                        textShadow: `1px 1px 2px ${theme.primary.dark}`,
                        textTransform: 'bolder',
                      }}
                      >
                        View: {GameDevGDD.title}
               </Typography>
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Render modal only if openModalId is not null */}
       {modalOpen && selectedProject && (
        <Modal
          id={selectedProject.id.toString()}
          open={modalOpen}
          onClose={handleCloseModal}
          title={selectedProject.title}
          borderColor={theme.primary.main}
          padding={4}
        >
          <Box sx={{ mb: 2 }}>
            <img
              src={selectedWireframe || selectedProject.mainImg}
              alt="Wireframe"
              style={{ width: "100%", borderRadius: 8 }}
            />
          </Box>

          {selectedProject.GameDevGDDImageCards.length > 0 && (
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              {selectedProject.GameDevGDDImageCards.map((img, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  onClick={() => setSelectedWireframe(img)}
                  sx={{
                    flexGrow: 1,
                    mx: index !== 0 ? 1 : 0,
                    backgroundColor: selectedWireframe === img ? "#d3d3d3" : "#f5f5f5",
                  }}
                >
                  <Typography
                    variant="button"
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

          <Box sx={{ p: 2, backgroundColor: "#f9f9f9", borderRadius: 1 }}>
            <Typography>{selectedProject.innerDescription}</Typography>
            <Box
              sx={{
                marginTop: 2,
                height: "55px",
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                 color="primary" 
                 fullWidth
                 onClick={() => handleDownloadsGDD(selectedProject.gdFile || '')}
                 >
                  <Typography
                    variant="button"
                    sx={{
                      color: 'white',
                      textShadow: `1px 1px 2px ${theme.primary.dark}`,
                      textTransform: 'bolder',
                    }}
                  >
                    Download GDD {selectedProject.title}
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Modal>
      )}
    </Box>
  );
};

export default GameDevGDD;