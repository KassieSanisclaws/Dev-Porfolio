import { createTheme } from "@mui/material/styles";

const AppTheme = createTheme({
    palette: {
        mode: "light", //Default theme mode
        primary: {
            main: "#8BDF69", // Green
            light: "#37F78D", // Light Green
            dark: "#046307" // Emerald Green
        },
        secondary: {
            main: "#3CB371",
            light: "#14CE33B6",
            dark: "#DAF7A6",
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
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            },
        },
    },
});

export default AppTheme;