import React from "react";
import { Box, Grid, Typography, Tabs, Tab } from "@mui/material";
import AppTheme from "../../../theme/AppTheme";

interface TabPanelProps{
   children?: React.ReactNode;
   index: number;
   value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const TFSContentComponent = () => {
   const [value, setValue] = React.useState(0);
   const theme = AppTheme.palette;

   const handleChange = ( _: React.SyntheticEvent, newValue: number ) => {
       setValue(newValue);
    };
    
    return (
        <Box>
            <Grid container>    
                <Typography variant='h4'
                   sx={{ margin: "0 0 0 10.5%",
                         color: theme.primary.dark,
                         fontStyle: AppTheme.typography.fontFamily,
                         textDecoration: 'underline',
                         textShadow: `2px 2px 4px ${theme.primary.dark}`,
                    }}>
                    Courses
                </Typography>
                <Grid item xs={12}>
                   <Box sx={{
                         flexGrow: 1, 
                         display: 'flex', 
                         height: 224
                     }}>
                     <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider', width: "100%" }}
                       >
                        <Tab label={<Typography 
                                      variant="body1"
                                      sx={{
                                        fontWeight: 'bold',
                                        color: theme.primary.dark,
                                        fontStyle: AppTheme.typography.fontFamily,
                                      }}>
                                        3D MODELING
                                    </Typography>} 
                        {...a11yProps(0)} 
                        />
                        <Tab label={<Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 'bold',
                                    color: theme.primary.dark,
                                    fontStyle: AppTheme.typography.fontFamily,
                                }}>
                                 UNITY
                              </Typography>}
                                {...a11yProps(1)}
                            />
                            <Tab label={<Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 'bold',
                                    color: theme.primary.dark,
                                    fontStyle: AppTheme.typography.fontFamily,
                                }}>
                                UNREAL ENGINE
                            </Typography>}
                                {...a11yProps(2)}
                            />
                        <Tab label={<Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 'bold',
                                    color: theme.primary.dark,
                                    fontStyle: AppTheme.typography.fontFamily,
                                }}>
                                ADOBE PHOTOSHOP
                                </Typography>}
                                {...a11yProps(3)}
                            />
                            <Tab label={<Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 'bold',
                                    color: theme.primary.dark,
                                    fontStyle: AppTheme.typography.fontFamily,
                                }}>
                                ADOBE ILLUSTRATOR
                            </Typography>}
                                {...a11yProps(4)}
                            />
                            <Tab label={<Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 'bold',
                                    color: theme.primary.dark,
                                    fontStyle: AppTheme.typography.fontFamily,
                                }}>
                                GAME DESIGN PRINCIPLES
                            </Typography>}
                                {...a11yProps(5)}
                            />
                            <Tab label={<Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 'bold',
                                    color: theme.primary.dark,
                                    fontStyle: AppTheme.typography.fontFamily,
                                }}>
                                GAME DEVELOPMENT
                            </Typography>}
                                {...a11yProps(6)}
                            />
                     </Tabs>
                     <TabPanel value={value} index={0}>
                          <Typography variant="h6">  
                               3D Modeling with 3ds Max
                          </Typography>
                          <Typography variant="body1">     
                               Beginner-level experience using Autodesk 3ds Max to create basic 3D shapes and objects for game development.
                               Familiar with modeling tools, object manipulation, and exporting assets for use in game engines like Unity or Unreal Engine. 
                               Focused on building foundational skills in creating clean, game-ready models.
                           </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={1}>
                           <Typography variant="h6">  
                               Unity Game Development
                          </Typography>
                          <Typography variant="body1">     
                               Intermediate experience developing 2D and 3D games using Unity for desktop and Android platforms. Created various game types including infinite runners, 
                               level-based games, and mobile-friendly experiences. Skilled in C# scripting, physics, animation, UI systems, and game logic implementation. 
                               Familiar with optimizing performance for mobile, integrating game assets, and building and deploying APKs for Android devices.
                               Comfortable working with Unity’s input system, prefab workflows, and scene management.
                           </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={2}>
                            <Typography variant="h6">  
                               Unreal Engine Development
                          </Typography>
                          <Typography variant="body1">     
                               Beginner-level experience using Unreal Engine to create basic gameplay systems and interactive environments. 
                               Familiar with the Blueprint Visual Scripting system, level design tools, and importing assets for use in 3D scenes. 
                               Gaining experience in character control, animations, and simple game mechanics. 
                               Actively learning to build playable prototypes and exploring integration with game-ready models and logic.
                           </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={3}>
                        <Typography variant="h6">
                            Adobe Photoshop
                        </Typography>
                        <Typography variant="body1">
                            Hands-on experience using Adobe Photoshop for creating and editing digital assets, including textures, UI elements, and promotional materials. 
                            Familiar with essential tools such as layers, masks, blending modes, and exporting optimized images for game development. 
                            Used Photoshop to support 2D game design, UI layout, and basic asset creation for both web and mobile platforms.
                        </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={4}>
                        <Typography variant="h6">
                            Adobe Illustrator
                        </Typography>
                        <Typography variant="body1">
                            Beginner-level experience using Adobe Illustrator to design vector-based graphics, including custom logos and branding elements. 
                            Familiar with tools such as the pen tool, shapes, typography, and color palettes to create clean, scalable designs suitable for both digital and print use.
                        </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={5}>
                        <Typography variant="h6">
                           Game Design Principles
                        </Typography>
                        <Typography variant="body1">
                            Understanding of core game design principles including player feedback loops, progression systems, difficulty balancing, and engaging mechanics. 
                            Experienced in designing both 2D and 3D gameplay systems with a focus on user experience, level flow, and replayability. 
                            Applied these principles in developing infinite runners, level-based games, and mobile-friendly experiences using Unity and Unreal Engine.
                        </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={6}>
                        <Typography variant="h6">
                            Game Development
                        </Typography>
                        <Typography variant="body1">
                            Hands-on experience designing and developing 2D and 3D games for desktop and mobile platforms. 
                            Proficient in using Unity (intermediate) and Unreal Engine (beginner) to build gameplay systems, levels, and interactive features. 
                            Skilled in C# scripting, animation, UI, asset integration, and mobile deployment. 
                            Familiar with core game development workflows, including prototyping, debugging, performance optimization, and exporting for Android devices. 
                            Applied game development knowledge to create infinite runners, level-based games, and polished prototypes.
                        </Typography>
                     </TabPanel>
                   </Box>
                </Grid>
            </Grid>
        </Box>
    )
};

export default TFSContentComponent;