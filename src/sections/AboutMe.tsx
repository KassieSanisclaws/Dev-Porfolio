import { Grid, Typography, Box } from "@mui/material";
import AppTheme from "../theme/AppTheme";
import EducationHistory from "../components/EducationHistory";
import TimeLine from "../components/timeLine/TimeLine";

const AboutMe = () => {
  const theme = AppTheme.palette;
    return (
        <Box sx={{ 
            width: "100%",
            padding: 2,
            background: `linear-gradient(20deg, white 65%, ${theme.primary.main} 50%)`,
             }}>
            <Box sx={{
                mb: 4,
                padding: 2,
                borderRadius: 1
            }}>
              <Typography variant="h3"
                    align="center"
                    sx={{
                        textTransform: 'uppercase',
                        textDecoration: 'underline',
                    }}>
                    About Me:
                </Typography>
            </Box>      
            <Grid container sx={{
                display: 'flex',
                border: '3px solid #ccc',
                overflow: 'hidden',
            }}>
              <Grid item sx={{ border: '3px solid black' }}
                    xs={12}
                    md={7.5}>
                   <EducationHistory />
               </Grid>
               <Grid item sx={{ border: '3px solid blue' }}
                     xs={12}
                     md={4.5}>
                     <TimeLine />
             </Grid>
             <Grid item sx={{ border: '3px solid red' }}
                   xs={12}
                   md={12}>
                    Button Model Links to Resume, Internship Cert, Grade Transscripts
             </Grid>
           </Grid>
        </Box>
    )
};

export default AboutMe;