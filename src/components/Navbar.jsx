import { useContext } from "react";
import { AppBar, Toolbar, Typography, IconButton, Select, MenuItem, Box } from "@mui/material";
import { ThemeContext } from "../context/ThemeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/todoSlice";
import AssignmentIcon from "@mui/icons-material/Assignment"; 

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todo.filter);

  return (
    <AppBar
      position="static"
      sx={{
        background: darkMode
          ? "linear-gradient(45deg, #1A1A1A 30%, #2A2A2A 90%)" // Gradiente oscuro
          : "linear-gradient(45deg, #6c3483 30%, #9b59b6 90%)", // Gradiente claro
        boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.2)",
        marginBottom: 4,
      }}
    >
      <Toolbar>
        {/* Título con ícono */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <AssignmentIcon sx={{ marginRight: 1, color: darkMode ? "#77E1F7" : "#FFFFF"  }} />
          <Typography variant="h6" >
            TO-DO 📑✍🏻
          </Typography>
        </Box>

        {/* Selector de filtro */}
        <Select
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
          sx={{
            color: darkMode ? "#77E1F7" : "#6c3483", // Color del texto según el tema
            marginRight: 2,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: darkMode ? "#77E1F7" : "#6c3483", // Borde según el tema
            },
            "& .MuiSvgIcon-root": {
              color: darkMode ? "#77E1F7" : "#6c3483", // Ícono según el tema
            },
            backgroundColor: darkMode ? "#1e1e1e" : "#ffffff", // Fondo según el tema
            borderRadius: "8px", // Bordes redondeados
          }}
        >
          <MenuItem value="all">Todas</MenuItem>
          <MenuItem value="completed">Completadas</MenuItem>
          <MenuItem value="pending">Pendientes</MenuItem>
        </Select>

        {/* Botón de cambio de tema */}
        <IconButton
          onClick={toggleTheme}
          sx={{
            color: darkMode ? "#77E1F7" : "#6c3483", // Color del ícono según el tema
            "&:hover": {
              backgroundColor: darkMode ? "rgba(119, 225, 247, 0.1)" : "rgba(108, 52, 131, 0.1)", // Efecto hover
            },
          }}
        >
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;