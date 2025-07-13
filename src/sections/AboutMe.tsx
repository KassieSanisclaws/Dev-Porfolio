import React from "react";
import { Grid, Typography, Box, Stack, Button } from "@mui/material";
import AppTheme from "../theme/AppTheme";
import EducationHistory from "../components/educationHistory/EducationHistory";
import TimeLine from "../components/timeLine/TimeLine";
import Modal from "../components/modal/Modal";
import { resumeAssets } from "../helpers/AboutMeData";

const AboutMe = () => {
  const theme = AppTheme.palette;
  const [selectedAssetKey, setSelectedAssetKey] = React.useState<keyof typeof resumeAssets | null>(null);
  const handleOpen = (key: keyof typeof resumeAssets) => {
    setSelectedAssetKey(key);
  };

  const handleClose = () => {
    setSelectedAssetKey(null);
  };

  const selectedAsset = selectedAssetKey ? resumeAssets[selectedAssetKey] : null;

  return (
        <Box sx={{ 
            width: "100%",
            padding: 2,
            background: `linear-gradient(13deg, white 65%, ${theme.primary.main} 90%)`,
            height: "100%",
             }}>
            <Box sx={{
                mb: 4,
                padding: 2,
                borderRadius: 1,
            }}>
              <Typography variant="h3"
                    align="center"
                    sx={{
                        textTransform: 'uppercase',
                        textDecoration: 'underline',
                        color: "white",
                        textShadow: `2px 2px 4px ${theme.primary.dark}`
                    }}>
                    About Me:
                </Typography>
            </Box>      
            <Grid container sx={{
                display: 'flex',
                overflow: 'hidden',
            }}>
              <Grid item
                    xs={12}
                    md={8.3}>
                   <EducationHistory />
               </Grid>
               <Grid item sx={{ backgroundColor: "white", }}
                     xs={12}
                     md={3.7}>
                     <TimeLine />
             </Grid>
             <Grid item
                   xs={12}
                   md={12}
                   sx={{
                    marginTop: -7,
                   }}>
                <Stack 
                   spacing={2}
                   rowGap={2} 
                   direction="row" 
                   justifyContent="center"  
                   flexWrap="wrap">
                    {resumeAssets && Object.keys(resumeAssets).map((key) => (
                        <Button 
                          key={key} 
                          variant="contained" 
                          onClick={() => handleOpen(key as keyof typeof resumeAssets)}
                          sx={{ 
                            backgroundColor: theme.primary.main, 
                            color: 'white',
                            height: '60px',
                            width: '400px', 
                            textTransform: 'none',
                            '&:hover': {
                              backgroundColor: theme.secondary.main,
                            },
                          }}>
                          <Typography
                             sx={{
                                textTransform: 'uppercase',
                                fontWeight: 600,
                                fontSize: '1.2rem',
                                textShadow: `2px 2px 4px ${theme.primary.dark}`
                             }}>
                             {key.replace(/([A-Z])/g, ' $1').trim()}
                          </Typography>
                        </Button>
                    ))}
                </Stack>
             </Grid>
           </Grid>
    {selectedAsset && (
        <Modal
          id="resumeModal"
          open={!!selectedAsset}
          title={selectedAsset.title}
          subtitle={selectedAsset.subtitle}
          onClose={handleClose}
          borderColor={theme.primary.main}
          padding={4}
        >
          {selectedAsset.type === 'text' ? (
            <Typography sx={{ whiteSpace: 'pre-line', fontSize: '1.1rem' }}>
              {selectedAsset.content as string}
            </Typography>
          ) : (
            <Stack spacing={2}>
              {(selectedAsset.content as string[]).map((src, idx) => (
                <Box key={idx} component="img" src={src} alt={`asset-${idx}`} sx={{ width: '100%', borderRadius: 2 }} />
              ))}
            </Stack>
          )}
        </Modal>
      )}
    </Box>
    )
};

export default AboutMe;