import { Grid, Typography, Box } from "@mui/material";


const EducationHistory = () => {

    return (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='h3'>Education History</Typography>    
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h4'>Content Here Below:</Typography>    
                </Grid>
            </Grid>
        </Box>
    )
};

export default EducationHistory;