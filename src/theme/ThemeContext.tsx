import { createContext, useContext, useMemo, ReactNode, useState } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import AppTheme from "./AppTheme";

type ThemeMode = "light" | "dark";

interface ThemeContextProps {
    mode: ThemeMode;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeContext = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeProvider");
    }
    return context;
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
   const [mode, setMode] = useState<ThemeMode>("light");;

const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
};

const theme = useMemo(() => AppTheme, [mode]);

return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
        <MUIThemeProvider theme={theme}>
           <CssBaseline />
             {children}
        </MUIThemeProvider>
    </ThemeContext.Provider>
)
//   return (
//         <MUIThemeProvider theme={theme}>
//             <CssBaseline />
//             <ThemeContext.Provider value={{ mode: "light", toggleTheme: () => {} }}>
//                 {children}
//             </ThemeContext.Provider>
//         </MUIThemeProvider>
//     );
};