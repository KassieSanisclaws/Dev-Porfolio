import { createTheme } from "@mui/material/styles";

const AppTheme = createTheme({
    palette: {
        mode: "light", //Default theme mode
        primary: {
            main: "#000000", 
        },
        secondary: {
            main: "#FFFFFF",
            light: "#FFFFFF",
            dark: "#000000",
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
    // "&.MuiButton-containedSecondary": {
    //     backgroundColor: "#FFFFFF",
    //     color: "white", //Text color
    //     "&:hover": {
    //         backgroundColor: "#FFFFFF",
    //         color: "black", //Text color
    //  },
    // },

});

export default AppTheme;