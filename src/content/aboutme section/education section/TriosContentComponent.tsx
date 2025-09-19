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
}

const TriosContentComponent = () => {
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
                                        Linux & Apache Web Server
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
                                 Adobe Illustrator & Photoshop
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
                                Advanced Java Programming
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
                                 Advanced Web Technologies
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
                                ASP.NET, C# Development & Visual Studio 
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
                                Ios, Android & Windows Mobile Development
                            </Typography>}
                                {...a11yProps(6)}
                            />
                            <Tab label={<Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 'bold',
                                    color: theme.primary.dark,
                                    fontStyle: AppTheme.typography.fontFamily,
                                }}>
                                PHP & MySQL Development
                            </Typography>}
                                {...a11yProps(7)}
                            />
                            <Tab label={<Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 'bold',
                                    color: theme.primary.dark,
                                    fontStyle: AppTheme.typography.fontFamily,
                                }}>
                                Python & Django Development
                            </Typography>}
                                {...a11yProps(8)}
                            />
                            <Tab label={<Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 'bold',
                                    color: theme.primary.dark,
                                    fontStyle: AppTheme.typography.fontFamily,
                                }}>
                                Web Fundamentals
                            </Typography>}
                                {...a11yProps(9)}
                            />
                            <Tab label={<Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 'bold',
                                    color: theme.primary.dark,
                                    fontStyle: AppTheme.typography.fontFamily,
                                }}>
                                Programming Logic & Design
                            </Typography>}
                                {...a11yProps(10)}
                            />
                     </Tabs>
                     <TabPanel value={value} index={0}>
                          <Typography variant="h6">  
                               Linux & Apache Web Server
                          </Typography>
                          <Typography variant="body1">     
                               Basic to intermediate experience working with Linux environments for web and software development. Familiar with command-line operations, file permissions, and system navigation. 
                               Experience configuring and deploying web applications using the Apache HTTP Server, including managing virtual hosts, server settings, and 
                               deploying PHP or static sites. Applied Linux and Apache knowledge in coursework and project setups for server-side development.
                           </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={1}>
                           <Typography variant="h6">  
                               Adobe Illustrator & Photoshop
                          </Typography>
                          <Typography variant="body1">     
                               Beginner to intermediate experience using Adobe Illustrator and Photoshop for digital design and asset creation. Designed custom logos, UI elements, textures, and promotional graphics. 
                               Familiar with vector and raster-based design, using tools such as layers, masks, pen tool, typography, and color correction. 
                               Applied these tools to support game development, web design, and branding projects.
                           </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={2}>
                            <Typography variant="h6">  
                               Advanced Java Programming
                          </Typography>
                          <Typography variant="body1">     
                               Experience in object-oriented programming using Java, with knowledge of advanced concepts such as multithreading, file I/O, exception handling, collections framework, and 
                               GUI development using JavaFX or Swing. Familiar with developing modular, reusable code and applying design patterns.
                               Worked on building backend logic, data processing, and application structure in Java-based projects.
                           </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={3}>
                        <Typography variant="h6">
                            Advanced Web Technologies
                        </Typography>
                        <Typography variant="body1">
                           Experience working with modern web technologies to build responsive, dynamic, and interactive web applications. Proficient in HTML5, CSS3, JavaScript, and frameworks such as 
                           React.js, Node.js, and ASP.NET. Familiar with RESTful APIs, asynchronous programming (Ajax, Fetch API), web security principles, and cross-browser compatibility. 
                           Applied these technologies in full-stack development projects to enhance performance, user experience, and scalability.
                        </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={4}>
                        <Typography variant="h6">
                            ASP.NET, C# Development & Visual Studio
                        </Typography>
                        <Typography variant="body1">
                           Hands-on experience developing web applications using ASP.NET and C# within the Visual Studio environment. Proficient in building MVC-based applications, 
                           implementing backend logic, and connecting to databases using Entity Framework. Familiar with web forms, Razor views, authentication, and RESTful service integration. 
                           Applied strong debugging and problem-solving skills using Visual Studio tools to build scalable, maintainable, and secure web solutions.
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
                            Ios, Android & Windows Mobile Development
                        </Typography>
                        <Typography variant="body1">
                            Experience developing mobile applications across iOS, Android, and Windows platforms. Built data-driven and interactive apps using tools such as 
                            Android Studio (Java/Kotlin), Xcode with Swift/SwiftUI, and Visual Studio with Xamarin or MAUI. Familiar with mobile UI/UX design principles, persistent data storage, 
                            and integrating APIs. Deployed and tested mobile apps on real devices and emulators, with a focus on performance, usability, and cross-platform compatibility.
                        </Typography>
                     </TabPanel>
                     <TabPanel value={value} index={7}>
                        <Typography variant="h6">
                            PHP & MySQL Development
                        </Typography>
                        <Typography variant="body1">
                            Experience building dynamic web applications using PHP and MySQL. Skilled in writing server-side scripts, handling form data, and interacting with relational databases 
                            for data storage and retrieval. Familiar with CRUD operations, user authentication, and basic security practices such as input validation and SQL injection prevention. 
                            Applied these skills in developing small- to mid-scale web projects with functional backends and responsive frontends.
                        </Typography>
                    </TabPanel>
                    <TabPanel value={value} index={8}>
                        <Typography variant="h6">
                            Python & Django Development
                        </Typography>
                        <Typography variant="body1">
                            Beginner to intermediate experience developing web applications using Python and the Django framework. Familiar with building RESTful APIs, managing databases with Django ORM, 
                            and implementing authentication, routing, and templating systems. Used Python for backend logic, data processing, and integrating third-party libraries. Applied Django to create 
                            structured, scalable web apps following the MVC (MTV) architecture.
                        </Typography>
                    </TabPanel>
                    <TabPanel value={value} index={9}>
                        <Typography variant="h6">
                           Web Fundamentals
                        </Typography>
                        <Typography variant="body1">
                            Strong foundation in core web technologies including HTML, CSS, and JavaScript. Understanding of how the web works, including HTTP/S, the DOM, client-server communication, and 
                            responsive design principles. Familiar with creating structured, accessible, and user-friendly web pages, and applying best practices in usability, cross-browser compatibility, 
                            and performance optimization.
                        </Typography>
                      </TabPanel>
                      <TabPanel value={value} index={10}>
                        <Typography variant="h6">
                            Programming Logic & Design
                        </Typography>
                        <Typography variant="body1">
                            Strong understanding of programming fundamentals including control structures, loops, conditionals, functions, and data types. Skilled in designing logical program flow using pseudocode, 
                            flowcharts, and structured problem-solving techniques. Applied these principles across multiple languages such as C#, Java, and JavaScript to build clear, efficient, and maintainable 
                            code in both academic and practical project settings.   
                        </Typography>
                      </TabPanel>
                   </Box>
                </Grid>
            </Grid>
        </Box>
    )
};

export default TriosContentComponent