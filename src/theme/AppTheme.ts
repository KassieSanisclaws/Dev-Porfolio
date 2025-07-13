import { createTheme } from "@mui/material/styles";
import type {} from "@mui/lab/themeAugmentation";


const AppTheme = createTheme({
    palette: {
        mode: "light", //Default theme mode
        primary: {
            main: "#8BDF69", // Green
            light: "#37F78D", // Light Green
            dark: "#046307", // Emerald Green
        },
        secondary: {
            main: "#3CB371", // Sea Green
            light: "#14CE33B6", // Light Sea Green
            dark: "#DAF7A6", // Dark Sea Green
        },
        info: {
            main: "#00FFFF",
        },
        success: {
            main: "#FF2456",
        },
        warning: {
            main: "#191970",
        },
        error: {
            main: "#DF698B",
        },
        background: {
            default: "#FFFFFF",
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            },
        },
       MuiTimeline: {
           styleOverrides: {
             root: {
                backgroundColor: "#8BDF69",
             }
           }
       }
    },
});

export default AppTheme;