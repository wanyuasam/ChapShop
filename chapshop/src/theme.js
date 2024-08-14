import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#1760a5",
            light: "skyblue",
            dark: "#003c6e", 
            contrastText: "#fff"
        },
        secondary: {
            main: '#15c630',
            light: "#6fe67a",
            dark: "#0b7a1a", 
            contrastText: "#fff"
        },
        otherColor: {
            main: '#8888', 
            light: '#aaaaaa',  
            dark: '#555555',   
            contrastText: "#000"
        }
    }
})
