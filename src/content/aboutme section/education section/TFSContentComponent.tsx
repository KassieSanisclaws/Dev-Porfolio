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
                    <Typography>{children}</Typography>
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
                   sx={{ margin: "0 0 0 53px",
                         color: theme.primary.dark,
                         fontStyle: AppTheme.typography.fontFamily,
                         textDecoration: 'underline',
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
                        sx={{ borderRight: 1, borderColor: 'divider', }}
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
                            Item One
                     </TabPanel>
                     <TabPanel value={value} index={1}>
                            Item Two
                     </TabPanel>
                     <TabPanel value={value} index={2}>
                            Item Three
                     </TabPanel>
                     <TabPanel value={value} index={3}>
                            Item Four
                     </TabPanel>
                     <TabPanel value={value} index={4}>
                            Item Five
                     </TabPanel>
                     <TabPanel value={value} index={5}>
                            Item Six
                     </TabPanel>
                     <TabPanel value={value} index={6}>
                            Item Seven
                     </TabPanel>
                   </Box>
                </Grid>
            </Grid>
        </Box>
    )
};

export default TFSContentComponent;