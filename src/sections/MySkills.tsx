import { Grid, Typography, Card, CardHeader, CardContent, Box, Paper, Stack, Chip } from "@mui/material";
import AppTheme from "../theme/AppTheme";
import FlippingSkillCard from '../components/flippingSkillCard/FlippingSkillCard';
import { skillCategories } from '../helpers/SkillsData';
import RadarChartStats from "../components/radarChart/RadarChartStats";

const allSkills = skillCategories.flatMap(cat => cat.skills.map(skill => skill.name));

const MySkills = () => {
 const theme = AppTheme.palette;
  return (
        <Box
           sx={{
                width: "100%",
                padding: 2,
                background: `linear-gradient(13deg, white 65%, ${theme.primary.main} 90%)`,
              }}>
        <Box
          sx={{
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
                    My SKills:
          </Typography>
        </Box>

        <Grid container spacing={2}>
           {/* Left: Radar Chart*/}
             <Grid item xs={12} md={6}>
                <Card>
                    <CardHeader
                        title="Skills Overview"
                        subheader="My skills in various technologies"
                        sx={{ 
                          textAlign: 'center', 
                          backgroundColor: theme.primary.main,
                          textTransform: 'uppercase', 
                          color: 'white',
                          textShadow: `2px 2px 4px ${theme.primary.dark}`
                        }}/>
                    <CardContent>
                        <RadarChartStats />
                    </CardContent>
                </Card>
             </Grid>

           {/* Right: Flip Cards Grid */}
              <Grid item xs={12} md={6} 
                  sx={{ 
                     height: '100%',
                     maxHeight: '85vh',
                     overflow: 'hidden',
                     overflowY: 'auto',
                     scrollbarColor: 'green #e0e0e0',   
                     }}>
                  <Grid container spacing={2}>
                   {skillCategories.map((cat) => (
                 <Grid item 
                     xs={12} 
                     sm={6} 
                     key={cat.title}>
                  <Box
                    sx={{
                        height: 240,
                        width: '100%',
                        padding: 1,
                        borderRadius: 2,
                        background: "linear-gradient(rgba(20, 206, 51, 0.4), rgba(255, 255, 255, 0.29))",
                        boxShadow: 3,
                        marginBottom: 2,
                        overflow: 'hidden',
                        overflowY: 'auto',
                    }}>
                      {/* Flipping Skill Card */}
                   <FlippingSkillCard 
                         category={cat}
                     /> 
                </Box>
                  </Grid>
                 ))}
                 </Grid>
              </Grid>
            
          {/* Bottom: Skill Tags Chips */}
             <Grid item xs={12} sx={{ padding: 2 }}>
             <Paper elevation={3} sx={{ p: 2 }}>
                <Typography 
                    variant="h6"
                    align="center"
                    textTransform='uppercase'
                    color={theme.secondary.main}
                    sx={{
                        textDecoration: 'underline',
                        textShadow: `2px 2px 4px ${theme.primary.main}`,
                        marginBottom: 1,
                    }}
                    >
                    Technologies & Tools
                </Typography>
              <Stack 
                  direction="row" 
                  flexWrap="wrap"
                  sx={{
                    marginBottom: 2,
                    display: 'flex',
                    rowGap: 1,
                    columnGap: 1,
                    marginTop: 1,
                    cursor: 'pointer',
                  }}>
                 {allSkills.map(skill => (
                  <Chip key={skill} label={skill}
                   sx={{
                        backgroundColor: theme.secondary.light,
                        color: "white",
                        textTransform: 'uppercase',
                        textShadow: `2px 2px 4px ${theme.primary.main}`,
                        fontWeight: 800,
                        padding: '8px',
                        margin: '2px',
                        '&:hover': {
                          backgroundColor: theme.secondary.main,
                        }
                   }}/>
                 ))}
              </Stack>
             </Paper>
             </Grid>

        </Grid>
      </Box>
    )
};

export default MySkills;