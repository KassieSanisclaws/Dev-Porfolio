import { Grid, Typography, Box } from "@mui/material";
import AccordionTemplate from "../accordion/AccordionTemplate";
import AppTheme from "../../theme/AppTheme";

const EducationHistory = () => {
    const theme = AppTheme.palette;
    return (
        <Box>
            <Grid container>
                <Grid item xs={12}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 1,
                    mb: 1,
                  }}
                 >
                    <Typography variant='h3' sx={{
                           color: "white",
                           textShadow: `2px 2px 4px ${theme.primary.dark}`
                        }}>
                        Education History:</Typography>    
                </Grid>
                <Grid item xs={12}>
                    <AccordionTemplate />
                </Grid>
            </Grid>
        </Box>
    )
};

export default EducationHistory;