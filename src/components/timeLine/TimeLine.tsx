import { Grid, Box, Typography } from "@mui/material";

const TimeLine = () => {
    return (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='h3'>TimeLine</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h4'>Content Here Below:</Typography>
                </Grid>
            </Grid>
        </Box>
    )
};

export default TimeLine;