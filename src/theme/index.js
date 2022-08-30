import { CssBaseline } from "@mui/material";
import {
    ThemeProvider as MUIThemeProvider,
    createTheme,
    StyledEngineProvider,
} from "@mui/material/styles";

export default function ThemeProvider({ children }) {
    const theme = createTheme({
        components: {
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 0,
                        boxShadow: 0,
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        color: "#757575",
                        borderColor: "#757575",
                    },
                },
            },
        },
    });

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
}
