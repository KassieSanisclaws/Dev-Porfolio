import { Grid, Box, Typography } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from "@mui/lab";
import { WorkOutlineOutlined, School, DeveloperBoardRounded } from "@mui/icons-material";
import AppTheme from "../../theme/AppTheme";

const TimeLine = () => {
  const theme = AppTheme.palette;
    return (
        <Box sx={{ 
                border: `3px solid ${theme.primary.main}`, 
                margin: "5px", 
                borderRadius: "5px", 
                height: "100%", 
                maxHeight: "91%", 
                overflow: "hidden", 
                overflowY: "auto", 
                scrollbarColor: 'green #e0e0e0', 
                }}> 
            <Grid container sx={{ }}>
                <Grid item xs={12} sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: theme.primary.main,
                    color: "white",
                    padding: "5px",
                    borderRadius: "55px",
                    fontFamily: AppTheme.typography.fontFamily
                    }}>
                    <Typography variant='h3' sx={{ textShadow: `2px 2px 4px ${AppTheme.palette.primary.dark}` }}>TimeLine</Typography>
                </Grid>
                <Grid item xs={12} sx={{ height: "100%", }}>
                    <Timeline position="alternate" 
                           sx={{
                            backgroundColor: "white",
                            overflow: "hidden",
                            overflowY: "auto",
                           }}> 
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0',
                                    textTransform: 'uppercase',
                                    fontFamily: AppTheme.typography.fontFamily,
                                    color: theme.primary.dark,
                                    fontWeight: 'bold'
                                 }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                            >
                                Future
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                    <DeveloperBoardRounded />  
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2, fontFamily: AppTheme.typography.fontFamily }}>
                                <Typography variant="h6" component="span">
                                    Future Goal
                                </Typography>
                                <Typography sx={{
                                    textTransform: 'uppercase',
                                    fontFamily: AppTheme.typography.fontFamily,
                                    color: theme.primary.dark,
                                    fontWeight: 'bold'
                                }}>
                                    Future endeavor to create-develop-release mobile RPG fantasy game
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0',
                                    textTransform: 'uppercase',
                                    fontFamily: AppTheme.typography.fontFamily,
                                    color: theme.primary.dark,
                                    fontWeight: 'bold'
                                 }}
                                variant="body2"
                                color="text.secondary"
                            >
                                2024-Current:
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary">
                                    <WorkOutlineOutlined />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2, fontFamily: AppTheme.typography.fontFamily }}>
                                <Typography variant="h6" component="span">
                                    triOS College Business Technology Healthcare
                                </Typography>
                                <Typography sx={{
                                    textTransform: 'uppercase',
                                    fontFamily: AppTheme.typography.fontFamily,
                                    color: theme.primary.dark,
                                    fontWeight: 'bold'
                                }}>
                                    Instructor Teaching
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary" variant="outlined">
                                    <School />
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2, fontFamily: AppTheme.typography.fontFamily }}>
                                <Typography variant="h6" component="span">
                                    TorontoFilmSchool (TFS)
                                </Typography>
                                <Typography sx={{
                                    textTransform: 'uppercase',
                                    fontFamily: AppTheme.typography.fontFamily,
                                    color: theme.primary.dark,
                                    fontWeight: 'bold'
                                }}>
                                    2023-Current: Video Game Design & Development
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary" variant="outlined">
                                    <WorkOutlineOutlined />
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2, fontFamily: AppTheme.typography.fontFamily }}>
                                <Typography variant="h6" component="span">
                                     Bureau Veritas
                                </Typography>
                                <Typography sx={{
                                    textTransform: 'uppercase',
                                    fontFamily: AppTheme.typography.fontFamily,
                                    color: theme.primary.dark,
                                    fontWeight: 'bold'
                                }}>
                                    December 2022-August 2023: Web Developer
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary" variant="outlined">
                                    <School />
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2, fontFamily: AppTheme.typography.fontFamily }}>
                                <Typography variant="h6" component="span">
                                    Canadian Business College (CBC)
                                </Typography>
                                <Typography sx={{
                                    textTransform: 'uppercase',
                                    fontFamily: AppTheme.typography.fontFamily,
                                    color: theme.primary.dark,
                                    fontWeight: 'bold'
                                }}>
                                    2022-2023: Software Engineering
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary" variant="outlined">
                                    <WorkOutlineOutlined />
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2, fontFamily: AppTheme.typography.fontFamily }}>
                                <Typography variant="h6" component="span">
                                    Phoenix Mates Technologies Inc.
                                </Typography>
                                <Typography sx={{
                                    textTransform: 'uppercase',
                                    fontFamily: AppTheme.typography.fontFamily,
                                    color: theme.primary.dark,
                                    fontWeight: 'bold'
                                }}>
                                    November 2020-December 2022: Jr. Full Stack Developer
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary" variant="outlined">
                                    <School />
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2, fontFamily: AppTheme.typography.fontFamily }}>
                                <Typography variant="h6" component="span">
                                    triOS College Business Technology Healthcare
                                </Typography>
                                <Typography sx={{
                                    textTransform: 'uppercase',
                                    fontFamily: AppTheme.typography.fontFamily,
                                    color: theme.primary.dark,
                                    fontWeight: 'bold'
                                }}>
                                    2020-2021: Enterprise Web & Mobile Applications Developer
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Grid>
            </Grid>
        </Box>
    )
};

export default TimeLine;