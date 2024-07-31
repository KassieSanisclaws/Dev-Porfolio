import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent,
         TimelineDot } from "@mui/lab";
import { Fastfood, Hotel, Repeat, LaptopChromebook } from "@mui/icons-material";

const TimeLine = () => {
    return (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='h3'>TimeLine</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Timeline position="alternate" 
                           sx={{
                            backgroundColor: "white"
                           }}>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                            >
                                9:30 am
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                    <Fastfood />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Eat
                                </Typography>
                                <Typography>Because you need strength</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                variant="body2"
                                color="text.secondary"
                            >
                                10:00 am
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary">
                                    <LaptopChromebook />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Code
                                </Typography>
                                <Typography>Because it&apos;s awesome!</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary" variant="outlined">
                                    <Hotel />
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Sleep
                                </Typography>
                                <Typography>Because you need rest</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                <TimelineDot color="secondary">
                                    <Repeat />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Repeat
                                </Typography>
                                <Typography>Because this is the life you love!</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Grid>
            </Grid>
        </Box>
    )
};

export default TimeLine;