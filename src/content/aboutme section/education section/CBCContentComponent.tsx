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

const CBCContentComponent = () => {
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
                                        XHTML w/CSS
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
                                 XML Comprehensive
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
                                Programming in C# Visual Studio
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
                                 Microsoft SQL Server Database Development Data Access
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
                                Web Applications 
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
                                Javascript, Ajax & jQuery
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
                                Developing Rich Internet Applications
                            </Typography>}
                                {...a11yProps(6)}
                            />
                     </Tabs>
                     <TabPanel value={value} index={0}>
                          <Typography variant="h6">  
                               XHTML w/CSS
                          </Typography>
                          <Typography variant="body1">     
                               Beginner to intermediate experience using XHTML and CSS to build structured, standards-compliant web pages. Familiar with styling techniques, 
                               layout structures, and responsive design fundamentals. Used CSS to control visual presentation, including typography, color, spacing, and positioning, 
                               while ensuring clean and accessible markup with XHTML.
                           </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={1}>
                           <Typography variant="h6">  
                               XML Comprehensive
                          </Typography>
                          <Typography variant="body1">     
                               Understanding of XML for structuring and storing data in a platform-independent format. 
                               Experienced in writing, reading, and validating XML documents for use in web and software applications. 
                               Familiar with using XML in configuration files, data interchange, and integration with technologies like XHTML, XSLT, and .NET. 
                               Applied XML in coursework and project settings for organizing hierarchical data and supporting application logic and data parsing.
                           </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={2}>
                            <Typography variant="h6">  
                               Programming in C# with Visual Studio
                          </Typography>
                          <Typography variant="body1">     
                               Hands-on experience developing applications using C# within the Visual Studio IDE. Proficient in object-oriented programming, 
                               data structures, and building desktop, web, and game applications. Familiar with .NET frameworks, Windows Forms, 
                               and integrating C# with tools such as Unity and ASP.NET. Applied C# knowledge to create logic-driven systems, 
                               handle user input, and interact with APIs and databases in both educational and project-based settings.
                           </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={3}>
                        <Typography variant="h6">
                            Microsoft SQL Server - Database Development - Data Access
                        </Typography>
                        <Typography variant="body1">
                            Proficient in designing, developing, and managing relational databases using Microsoft SQL Server. 
                            Skilled in writing SQL queries, stored procedures, views, and functions for data manipulation and retrieval. 
                            Experienced with database normalization, indexing, and ensuring data integrity. 
                            Familiar with integrating databases into applications using ADO.NET and Entity Framework for efficient data access and 
                            management within .NET and C# environments.
                        </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={4}>
                        <Typography variant="h6">
                            Web Applications Service Communication Applications Windows Applications Microsoft Certified program Developer
                        </Typography>
                        <Typography variant="body1">
                            Experience developing both web and Windows applications using Microsoft technologies such as ASP.NET, C#, and Visual Studio. Built dynamic, 
                            data-driven web apps and responsive user interfaces, as well as desktop solutions with Windows Forms. Familiar with service-oriented architecture (SOA), 
                            RESTful APIs, and communication between client-server applications. Participated in the Microsoft Certified Program, 
                            reinforcing knowledge in .NET development, software architecture, and secure application design.
                        </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={5}>
                        <Typography variant="h6">
                           JavaScript, Ajax & Jquery
                        </Typography>
                        <Typography variant="body1">
                            Proficient in using JavaScript to build interactive and dynamic web applications. Experienced with Ajax for asynchronous data retrieval and 
                            real-time updates without page reloads. Familiar with jQuery for simplified DOM manipulation, event handling, animations, and integrating UI components. 
                            Applied these technologies in various projects to enhance user experience and implement responsive, client-side functionality.
                        </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={6}>
                        <Typography variant="h6">
                            Developing Rich Internet Applications
                        </Typography>
                        <Typography variant="body1">
                            Experience building Rich Internet Applications (RIAs) with a focus on responsive design, dynamic user interfaces, and seamless user interaction. 
                            Utilized technologies such as HTML, CSS, JavaScript, Ajax, React, and jQuery to create engaging web experiences. 
                            Applied best practices in client-side scripting, asynchronous data handling, and interactive UI design to deliver modern, 
                            web-based applications with desktop-like functionality.
                        </Typography>
                     </TabPanel>
                   </Box>
                </Grid>
            </Grid>
        </Box>
    )
};

export default CBCContentComponent;