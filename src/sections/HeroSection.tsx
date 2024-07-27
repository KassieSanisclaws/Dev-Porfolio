import React from 'react';
import { Grid, Typography } from "@mui/material";


const HeroSection = () => { 

    return (
        <Grid>
            <Typography variant='h3'>Welcome to my Portfolio</Typography>
            <Grid container spacing={3}>
               <Typography variant='h4'>Content Here Below:</Typography>
            </Grid>
        </Grid>
    )
};

export default HeroSection;