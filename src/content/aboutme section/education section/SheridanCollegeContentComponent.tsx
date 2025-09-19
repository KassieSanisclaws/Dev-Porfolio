import React from 'react';
import AppTheme from '../../../theme/AppTheme';
import { Box, Grid, Typography, Tabs, Tab } from '@mui/material';

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
};

const SheridanCollegeContentComponent = () => {
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
                                        Introduction to Canadian Justice & Policing
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
                                 Police Powers & Provincial Legislation
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
                                Criminal Code & Criminal Procedures
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
                                 Investigation, Interviewing, & Interrogation
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
                                Conflict Resolution, Psychology & Demographics 
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
                                Community Policing & Public Safety
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
                                Physical Fitness, Defensive Tactics & Career Prep
                            </Typography>}
                                {...a11yProps(6)}
                            />
                     </Tabs>
                     <TabPanel value={value} index={0}>
                          <Typography variant="h6">  
                               Introduction to Canadian Justice & Policing
                          </Typography>
                          <Typography variant="body1">     
                               Canadian Justice System: Deep dive into the structure of Canadian courts, roles of federal, provincial, and municipal law enforcement, and the significance of the Canadian Charter of Rights and Freedoms.
                               History & Types of Police Agencies: Explore the evolution of policing, differences between general duty, specialized units (e.g. OPP), and private policing sectors.
                           </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={1}>
                           <Typography variant="h6">  
                               Police Powers & Provincial Legislation
                          </Typography>
                          <Typography variant="body1">     
                               Police Powers & Arrest Authorities: Learn legal standards for arrest, detention, search, seizure, and release under federal and provincial statutes. Modules include:
                               Federal arrest powers, detention rules, Provincial Offences Act
                               Public order enforcement: Liquor License Act, Trespass, Safe Streets, Highway Traffic Act 
                               Use of Force & Discretion: Analyze legal frameworks and ethical responsibilities that guide police decision-making in the field.
                           </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={2}>
                            <Typography variant="h6">  
                               Criminal Code & Criminal Procedures
                          </Typography>
                          <Typography variant="body1">     
                               Statutory Provisions & Case Law: Study critical sections of the Criminal Code—assault, theft, controlled substance offences, mens rea.
                               Trial Process & Evidence: Understand trial stages (arraignment, jury selection, voir dire), Crown-Brief prep, witness testimony, and rules of admissible evidence.
                           </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={3}>
                        <Typography variant="h6">
                            Investigation, Interviewing, & Interrogation
                        </Typography>
                        <Typography variant="body1">
                            Interview Techniques: Training in interviewing victims/witnesses, interrogation fundamentals, and strategies consistent with legal safeguards.
                            Crime Scene Investigation & Forensics: Learn scene management, evidence collection and documentation, chain-of-custody, basic forensic methods.
                        </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={4}>
                        <Typography variant="h6">
                            Conflict Resolution, Psychology & Demographics
                        </Typography>
                        <Typography variant="body1">
                            Conflict Management: Develop empathic communication, crisis de‑escalation, and non‑violent intervention skills. 
                            Human Behavior & Demographics: Study psychological concepts, cultural awareness, mental health, community diversity, and understanding of vulnerable populations.
                        </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={5}>
                        <Typography variant="h6">
                           Community Policing & Public Safety
                        </Typography>
                        <Typography variant="body1">
                           Community-Based Approaches: Learn about relationship-building, approaches to reducing crime through community partnership, multi-agency collaboration, and restorative justice strategies.
                           Public Safety Roles: Develop strategies to maintain public order in diverse environments, including event safety, traffic control, and liaison with social services.
                        </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={6}>
                        <Typography variant="h6">
                            Physical Fitness, Defensive Tactics & Career Prep
                        </Typography>
                        <Typography variant="body1">
                            Physical Conditioning & Fitness Testing: Prepare for fitness assessments like the PARE shuttle run; focus on health, lifestyle management, and defensive tactics. 
                            Career Readiness: Gain transferable skills—note-taking, portfolios, interview prep, resume building, and psychological screening—all tailored for law enforcement hiring processes.
                        </Typography>
                     </TabPanel>
                   </Box>
                </Grid>
            </Grid>
        </Box>
    )
};

export default SheridanCollegeContentComponent;