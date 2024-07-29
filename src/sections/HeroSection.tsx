import { Grid, Typography, Box } from "@mui/material";


const HeroSection = () => { 

    return (
        <Box sx={{ border: "3px solid orange"}}>
            <Grid container sx={{ border: "3px solid yellow",}}>
                <Grid item sx={{
                    border: "3px solid red",
                    display: "flex",
                    justifyContent: "space-evenly",
                    overflow: "hidden",
                    padding: "10px"
                }}
                xs={7}>
                    <Box sx={{
                        border: "3px solid purple",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "15vh",
                        width: "15vw",
                        overflow: "hidden",
                    }}>
                        <Typography variant='h4'>Content Here:</Typography>
                    </Box>  
                </Grid> 
                <Grid item sx={{
                    border: "3px solid blue",
                    display: "flexStart",
                    justifyContent: "space-evenly",
                    overflow: "hidden",
                    padding: "10px"
                }}
                xs={5}>
                    <Box sx={{
                        border: "3px solid purple",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "15vh",
                        width: "15vw",
                        overflow: "hidden",
                    }}>
                        <Typography variant='h4'>Content Here:</Typography>
                    </Box>  
                </Grid>
            </Grid>
            <Grid container> 
                <Grid item sx={{
                   border: "3px solid green",
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "center",
                   padding: "10px",
                   overflow: "hidden",
                 }}
                 xs={12}>
                    <Box sx={{
                        border: "3px solid purple",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "15vh",
                        width: "55vw",
                        overflow: "hidden",
                    }}>
                        <Typography variant='h4'>Content Here:</Typography>
                    </Box>  
               </Grid>
            </Grid>
        </Box>
    )
};

export default HeroSection;