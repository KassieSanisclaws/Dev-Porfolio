import React from 'react';
import { Grid, Typography, Box } from "@mui/material";


const Header = () => {

    return (
        <Grid>
            <Grid container>
                <Typography variant='h3'>Header</Typography>
                <Typography variant='h4'>Content Here Below:</Typography>
            </Grid>
        </Grid>
    )
};

export default Header;