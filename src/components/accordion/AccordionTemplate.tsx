import React from "react";
import { Accordion, Box, Grid, Typography, AccordionSummary, AccordionDetails } from "@mui/material";
import { AccordionSlots } from "@mui/material/Accordion";
import Collapse from "@mui/material/Collapse";
import ExpandCircleDownTwoToneIcon from "@mui/icons-material/ExpandCircleDownTwoTone";
import AppTheme from "../../theme/AppTheme";
import TFSContentComponent from "../../content/aboutme section/education section/TFSContentComponent";
import CBCContentComponent from "../../content/aboutme section/education section/CBCContentComponent";
import TriosContentComponent from "../../content/aboutme section/education section/TriosContentComponent";
import CLSSContentComponent from "../../content/aboutme section/education section/CLSSContentComponent";
import SheridanCollegeContentComponent from "../../content/aboutme section/education section/SheridanCollegeContentComponent";

// Accordion data
const accordionData = [
    {
        title: <Typography variant='h4'
                sx={{
                    color: AppTheme.palette.primary.dark,
                    fontStyle: AppTheme.typography.fontFamily,
                    textShadow: `2px 2px 4px ${AppTheme.palette.primary.dark}`
                }}
                >
                  Toronto Film School
              </Typography>,
        subtitle: <Typography variant='subtitle1'
                sx={{
                    color: AppTheme.palette.primary.main,
                    fontStyle: AppTheme.typography.fontFamily,
                    textShadow: `1px 1px 2px ${AppTheme.palette.primary.main}`,
                    margin: "0 0 0 20px",
                    fontSize: '1.5rem'
                }}
                >
                  Game Design & Development
              </Typography>,    
        content: <TFSContentComponent />,
    },
    {
        title: <Typography variant='h4'
                sx={{
                    color: AppTheme.palette.primary.dark,
                    fontStyle: AppTheme.typography.fontFamily,
                    textShadow: `2px 2px 4px ${AppTheme.palette.primary.dark}`
                }}
                >
                  Canadian Business College
              </Typography>,
              subtitle: <Typography variant='subtitle1'
                sx={{
                    color: AppTheme.palette.primary.main,
                    fontStyle: AppTheme.typography.fontFamily,
                    textShadow: `1px 1px 2px ${AppTheme.palette.primary.main}`,
                    margin: "0 0 0 20px",
                    fontSize: '1.5rem'
                }}
                >
                    Software Engineering & Web Development
              </Typography>,
        content: <CBCContentComponent />
    },
    {
        title: <Typography variant='h4'
                sx={{
                    color: AppTheme.palette.primary.dark,
                    fontStyle: AppTheme.typography.fontFamily,
                    textShadow: `2px 2px 4px ${AppTheme.palette.primary.dark}`
                }}
                >
                  Trios College
              </Typography>,
              subtitle: <Typography variant='subtitle1'
                sx={{
                    color: AppTheme.palette.primary.main,
                    fontStyle: AppTheme.typography.fontFamily,
                    textShadow: `1px 1px 2px ${AppTheme.palette.primary.main}`,
                    margin: "0 0 0 20px",
                    fontSize: '1.5rem'
                }}
                >
                  Enterprise Web & Mobile Applications Development + (Internship)
              </Typography>,
        content: <TriosContentComponent />
    },
    {
        title: <Typography variant='h4'
                sx={{
                    color: AppTheme.palette.primary.dark,
                    fontStyle: AppTheme.typography.fontFamily,
                    textShadow: `2px 2px 4px ${AppTheme.palette.primary.dark}`
                }}
                >
                  Sheridan College
              </Typography>,
              subtitle: <Typography variant='subtitle1'
                sx={{
                    color: AppTheme.palette.primary.main,
                    fontStyle: AppTheme.typography.fontFamily,
                    textShadow: `1px 1px 2px ${AppTheme.palette.primary.main}`,
                    margin: "0 0 0 20px",
                    fontSize: '1.5rem'
                }}
                >
                  Police Foundations & Community Safety
              </Typography>,
        content: <SheridanCollegeContentComponent />
    },
    {
        title: <Typography variant='h4'
                sx={{
                    color: AppTheme.palette.primary.dark,
                    fontStyle: AppTheme.typography.fontFamily,
                    textShadow: `2px 2px 4px ${AppTheme.palette.primary.dark}`
                }}
                >
                  Cardinal Leger Secondary School
              </Typography>,
              subtitle: <Typography variant='subtitle1'
                sx={{
                    color: AppTheme.palette.primary.main,
                    fontStyle: AppTheme.typography.fontFamily,
                    textShadow: `1px 1px 2px ${AppTheme.palette.primary.main}`,
                    margin: "0 0 0 20px",
                    fontSize: '1.5rem'
                }}
                >
                  HighSchool
              </Typography>,
        content: <CLSSContentComponent />
    }
];

const AccordionTemplate = () => {
   const theme = AppTheme.palette;
   const [expanded, setExpanded] = React.useState<string | false>('panel0');

   const handleExpansion = (panel: string) => (
         _: React.SyntheticEvent, 
         isExpanded: boolean
        ) => {
         setExpanded(isExpanded ? panel : false);
     };

    return (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    <Box
                      sx={{
                        padding: 1,
                      }}
                     >
                       {accordionData.map((item, indx) => (
                        <Accordion
                            key={indx}
                            expanded={expanded === `panel${indx}`}
                            onChange={handleExpansion(`panel${indx}`)}
                            slots={{
                                transition: Collapse as AccordionSlots['transition']
                            }}
                            slotProps={{ transition: { timeout: 400 } }}
                            sx={{
                                border: `3px solid ${theme.primary.main}`,
                                // '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                                // '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' }, 
                            }}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandCircleDownTwoToneIcon 
                               sx={{ 
                                 fontSize: 40,
                                 color: theme.primary.main,
                                 "& .MuiSvgIcon-root": {
                                    fill: theme.primary.dark,
                                   },
                                   margin: "15px"
                                }}
                              />}
                              aria-controls={`panel${indx}-content`}
                              id={`panel${indx}-header`}
                              sx={{
                                  flexDirection: "row-reverse", // Position the icon at the start
                                    '& .MuiAccordionSummary-content': { 
                                        flex: 1 
                                    },
                                }}
                              >
                                <Typography variant='h4'>{item.title}</Typography>
                                {item.subtitle && (
                                  <Typography sx={{ 
                                    color: theme.primary.main,
                                    fontStyle: AppTheme.typography.fontFamily,
                                    textShadow: `1px 1px 2px ${theme.primary.main}`,
                                  }}>
                                    {item.subtitle}
                                  </Typography>
                                )}
                            </AccordionSummary>
                            <AccordionDetails id={`panel${indx}-content`}>
                                <Typography 
                                      variant='body1'>
                                        {item.content}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                       ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
};

export default AccordionTemplate;