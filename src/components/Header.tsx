import { Grid, Typography, Box, useMediaQuery } from "@mui/material";
import HamburgerMenu from './hamburgerMenu/HamburgerMenu';
import PageTabs from '../components/pageTabs/PageTabs';
import AppTheme from "../theme/AppTheme";

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 1186px)');
    const theme = AppTheme.palette;
    return (
        <Box sx={{ width: "100%" }}>
            <Grid container>
                <Grid item xs={10} md={10} lg={7.5}  sx={{
                      background: 'linear-gradient(rgba(20, 206, 51, 0.712), rgba(255, 255, 255, 0.466))',
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      paddingRight: "3%",
                      }}>
                    <Typography 
                      variant='h3'
                        sx={{ 
                            textTransform: 'uppercase',
                            color: "white", 
                            textShadow: `2px 2px 4px ${theme.primary.dark}`,
                            fontWeight: "bold", 
                        }}>
                       Kadeem Cherman
                    </Typography> 
                </Grid>
                <Grid item xs={2} md={2} lg={4.5}  sx={{ 
                       overflow: "hidden", 
                       display: "flex", 
                       alignItems: "center", 
                       justifyContent: "center" 
                       }}>
                    {isMobile ? <HamburgerMenu /> : <PageTabs />} 
                </Grid>   
            </Grid>
        </Box>
    )
};

export default Header;