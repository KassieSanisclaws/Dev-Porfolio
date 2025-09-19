// Description: WireFrame component for displaying project cards with modals
import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import AppTheme from "../theme/AppTheme";
import Modal from "../components/modal/Modal";
import { wireframeData, WireframeProjectContent } from "../helpers/WireframeData";

const WireFrame = () => {
 const theme = AppTheme.palette;
 const [selectedProject, setSelectedProject] = React.useState<WireframeProjectContent | null>(null);
 const [modalOpen, setModalOpen] = React.useState(false);
 const [selectedWireframe, setSelectedWireframe] = React.useState<string | null>(null);


const handleOpenModal = (projectId: number) => {
  const project = wireframeData.find(p => p.id === projectId);
  if (project) {
    setSelectedProject(project);
    setSelectedWireframe(project.wireFrameImageCards[0]); // Set the first wireframe image as default
    setModalOpen(true);
  }
};

const handleCloseModal = () => {
  setModalOpen(false);
  setSelectedProject(null);
  setSelectedWireframe(null);
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
          WireFrame Designs:
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {wireframeData.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
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
              <Typography variant="h5" gutterBottom>
                {project.title}
              </Typography>
              <Box
                sx={{
                  height: 150,
                  backgroundColor: "#f5f5f5",
                  borderRadius: 1,
                  mb: 2,
                  border: "3px solid yellow",
                }}
              >
                <img
                  src={project.mainImg}
                  alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }}
                />
              </Box>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleOpenModal(project.id)}
                sx={{
                  background:
                    "linear-gradient(rgba(20, 206, 51, 0.712), rgba(255, 255, 255, 0.466))",
                }}
              >
                Wire Open Modal {project.id}
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

          {selectedProject.wireFrameImageCards.length > 0 && (
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              {selectedProject.wireFrameImageCards.map((img, index) => (
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
                  View {index + 1}
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ p: 2, backgroundColor: "#f9f9f9", borderRadius: 1 }}>
            <Typography>{selectedProject.innerDescription}</Typography>
            <Box
            sx={{
              border: "5px solid purple",
              height: "55px",
              width: "100%",
            }}>

            </Box>
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default WireFrame;