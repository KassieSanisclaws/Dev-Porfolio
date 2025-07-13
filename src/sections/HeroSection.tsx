import { Grid, Typography, Box, useMediaQuery, Stack, Button } from "@mui/material";
import AppTheme from "../theme/AppTheme";
import DownloadIcon from '@mui/icons-material/Download';

const HeroSection = () => {
const isMobile = useMediaQuery(AppTheme.breakpoints.down('sm')); // Adjust breakpoint 
const handleDownloadDocs = (fileName: string) => {
        const link = document.createElement('a');
        link.href = `../../src/assets/documents/${fileName}`;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
            <Grid container
                  direction={isMobile ? "column" : "row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  marginTop={1}
                  sx={{ overflow: "hidden", padding: "10px", border: "3px solid black", width: "100%" }}>          
             <Grid item xs={12} sm={12} md={12} xl={6}>
                 <Box 
                     sx={{
                        border: "3px solid purple",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: { xs: "auto",  sm: "74vh" },
                        width: "50%",
                        borderRadius: "50%",
                        marginLeft: "25%",
                        overflow: "hidden" }}>
                    <img
                          src={"../../src/assets/images/Pictures/IMG_0089.PNG"}
                          alt={"Kadeem Cherman"}
                          style={{ width: "100%", height: "100%", maxHeight: "500px", objectFit: "cover", borderRadius: "4px" }}
                      />
                 </Box>
                </Grid>
                  {/* Quote Section */}
             <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
                    <Box 
                    sx={{
                         display: "flexStart",
                         alignItems: "center",
                         justifyContent: "center",
                         overflow: "hidden",
                         padding: "10px",
                         height: "100%",
                         width: "100%",                 
                       }}>
                        <Typography 
                            variant='body1'
                            sx={{
                                fontSize: "1.3rem",
                                textAlign: "center",
                                padding: "10px",
                                lineHeight: "1.5",
                                textShadow: `2px 2px 4px ${AppTheme.palette.primary.dark}`,
                                color: AppTheme.palette.primary.dark,
                            }}>
                            “From chasing justice as a future officer to building digital solutions as a Full Stack Developer, 
                            my journey has always been rooted in purpose, perseverance, and grit. Losing my mother at 16, 
                            growing up without a father figure, and taking on the weight of responsibility for my younger siblings could’ve been a breaking point — but instead, 
                            it became my foundation. 
                            I traded hardship for hard work, uncertainty for determination, and every setback for a step forward. 
                            Today, with over 5 years in software development, real-world industry experience, and a growing portfolio in game development using Unity and Unreal Engine, 
                            I stand as proof that belief, effort, and integrity can forge greatness out of struggle. 
                            I am not just a developer — I am a builder of hope, a mentor by example, and a relentless pursuer of the goals I once only dreamed of. 
                            My code is more than syntax — it’s resilience written line by line.”
                        </Typography>
                     </Box>
                </Grid> 
              </Grid> 
               {/* Bottom Content: */}
            <Grid container> 
                <Grid item xs={12}
                  sx={{
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "center",
                   padding: "10px",
                   overflow: "hidden",
                     }}>
                <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        width: "55vw",
                        overflow: "hidden",
                         }}>
                    <Stack direction="row" spacing={2} sx={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
                          <Button 
                              sx={{
                                    background: AppTheme.palette.primary.main,
                                    color: AppTheme.palette.primary.dark,
                                    '&:hover': {
                                     backgroundColor: AppTheme.palette.secondary.main,
                                    },
                                    width: "100%"
                                 }}
                                 startIcon={<DownloadIcon sx={{ filter: `drop-shadow(2px 2px 4px ${AppTheme.palette.primary.dark})` }}/>}
                                 onClick={() => handleDownloadDocs("Kadeem_Cherman_Resume.pdf")}
                                 >
                              <Typography variant="h5" sx={{ color: "white", textShadow: `2px 2px 4px ${AppTheme.palette.primary.dark}` }}>Download Resume</Typography>
                          </Button>
                          <Button
                              sx={{
                                    background: AppTheme.palette.primary.main,
                                    color: AppTheme.palette.primary.dark,
                                    '&:hover': {
                                     backgroundColor: AppTheme.palette.secondary.main,
                                    },
                                    width: "100%"
                                 }}
                                 startIcon={<DownloadIcon sx={{ filter: `drop-shadow(2px 2px 4px ${AppTheme.palette.primary.dark})` }}/>}
                                 onClick={() => handleDownloadDocs("Kadeem_Cherman_CoverLetter.pdf")}
                                 >
                              <Typography variant="h5" sx={{ color: "white", textShadow: `2px 2px 4px ${AppTheme.palette.primary.dark}` }}>Download CoverLetter</Typography>
                          </Button>
                        </Stack>
                    </Box>  
               </Grid>
            </Grid>
        </Box>
    )
};

export default HeroSection;