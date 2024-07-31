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

// Accordion data
const accordionData = [
    {
        title: <Typography variant='h4'
                sx={{
                    color: AppTheme.palette.primary.dark,
                    fontWeight: 'bold',
                    fontStyle: AppTheme.typography.fontFamily,
                }}
                >
                  Toronto Film School
              </Typography>,
        content: <TFSContentComponent />,
    },
    {
        title: <Typography variant='h4'
                sx={{
                    color: AppTheme.palette.primary.dark,
                    fontWeight: 'bold',
                    fontStyle: AppTheme.typography.fontFamily,
                }}
                >
                  Canadian Business College
              </Typography>,
        content: <CBCContentComponent />
    },
    {
        title: <Typography variant='h4'
                sx={{
                    color: AppTheme.palette.primary.dark,
                    fontWeight: 'bold',
                    fontStyle: AppTheme.typography.fontFamily,
                }}
                >
                  Trios College
              </Typography>,
        content: <TriosContentComponent />
    },
    {
        title: <Typography variant='h4'
                sx={{
                    color: AppTheme.palette.primary.dark,
                    fontWeight: 'bold',
                    fontStyle: AppTheme.typography.fontFamily,
                }}
                >
                  Sheridan College
              </Typography>,
        content: "Sheridan College Institute of Technology and Advanced Learning is a leading institution for arts, business, and technology programs.",
    },
    {
        title: <Typography variant='h4'
                sx={{
                    color: AppTheme.palette.primary.dark,
                    fontWeight: 'bold',
                    fontStyle: AppTheme.typography.fontFamily,
                }}
                >
                  Cardinal Leger Secondary School
              </Typography>,
        content: <CLSSContentComponent />
    }
];

const AccordionTemplate = () => {
   const theme = AppTheme.palette;
   const [expanded, setExpanded] = React.useState<string | false>(false);

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
                                '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                                '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' }, 
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