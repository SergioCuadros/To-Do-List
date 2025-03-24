import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#77E1F7" : "#6c3483", // Azul neón
      },
      secondary: {
        main: mode === "dark" ? "#FF4081" : "#6c3483", // Rosa neón
      },
      background: {
        default: mode === "dark" ? "#121212" : "#fafafa", // Fondo oscuro para dark mode
        paper: mode === "dark" ? "#1e1e1e" : "#ffffff", // Fondo de tarjetas y elementos
      },
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "8px", // Bordes redondeados
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra suave
            textTransform: "none", // No poner todo en mayúsculas
            transition: "all 0.3s ease-in-out", // Transición suave para efectos
            "&:hover": {
              backgroundColor: "#e7c700", // Efecto hover con rosa neón
              boxShadow: "0 6px 8px rgba(255, 64, 129, 0.2)", // Sombra al hacer hover
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "dark" ? "#2A2A2A" : "#ffffff", // Fondo para tarjetas
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
  });
