# To-Do List 📑✍🏻

Esta es una aplicación de lista de tareas (TodoList) construida con React, Redux y Material-UI. La aplicación permite a los usuarios agregar, editar, eliminar y marcar tareas como completadas. También incluye un selector de tema oscuro/claro y un filtro para mostrar todas las tareas, solo las completadas o solo las pendientes.

## Tecnologías utilizadas

El proyecto utiliza las siguientes bibliotecas y herramientas:

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **Redux Toolkit**: Gestión del estado global de la aplicación.
- **Material-UI (MUI)**: Proporciona componentes de interfaz de usuario y diseño, como botones, cuadros de texto y listas.
- **Framer Motion**: Animaciones y transiciones en la interfaz.
- **Snackbar y Alertas**: Utilizados para mostrar mensajes de estado (confirmación de eliminación de tarea, etc.).


## 🔧 Pasos de Instalación y Ejecución

Para instalar y ejecutar la aplicación localmente, sigue estos pasos:

1. Clona el repositorio:
    ```sh
    git clone https://github.com/SergioCuadros/To-Do-List
    ```

2. Instala las dependencias:
    ```sh
    npm install
    ```
3. Luego, instala las siguientes bibliotecas adicionales:
Material-UI (MUI): Componentes de interfaz de usuario modernos y accesibles.
Framer Motion: Para animaciones fluidas en la aplicación.
Redux Toolkit: Para la gestión del estado global.

    ```sh
    npm install @mui/material @emotion/react @emotion/styled framer-motion @reduxjs/toolkit react-redux
    ```

4. Inicia la aplicación:
    ```sh
    npm run dev
    ```
## 🎨Decisiones de Diseño (UI/UX)

Para la interfaz y experiencia de usuario, se tomaron las siguientes decisiones:

- Diseño limpio y minimalista con un toque de colores neon: Se usa Material-UI para mantener una apariencia moderna y accesible.
- Modo oscuro y claro: Implementado con ThemeContext para mejorar la accesibilidad y personalización del usuario.
- Uso de animaciones: Se emplea Framer Motion para hacer que las interacciones sean más dinámicas y fluidas.
- Gestión eficiente del estado: Se optó por Redux Toolkit para manejar el estado de las tareas de manera óptima y escalable.
- Experiencia fluida: Se agregaron snackbars para notificaciones inmediatas (confirmación de nueva tarea, etc.).

- Diseño adaptable: La interfaz es responsive para que funcione bien en cualquier dispositivo.

Estas decisiones aseguran que la aplicación sea intuitiva, rápida y fácil de usar. 🚀

## 📁 Estructura del Proyecto

```bash
TodoList/
├── public/                      # Archivos públicos
├── src/                         
│   ├── components/              # Componentes de la interfaz
│   │   ├── AddTaskModal.jsx     # Modal para agregar tareas
│   │   ├── ConfirmDeleteModal.jsx  # Modal para confirmar eliminación de tarea
│   │   ├── Navbar.jsx           # Barra de navegación
│   │   ├── TodoItem.jsx         # Componente para cada tarea
│   │   └── TodoList.jsx         # Componente que maneja la lista de tareas
│   ├── context/                 
│   │   └── ThemeContext.js      # Contexto para gestionar el tema
│   ├── store/                   
│   │   ├── todoSlice.js         # Slice de Redux para gestionar las tareas
│   │   └── task.js              # Modelo de tarea 
│   ├── App.js                   # Componente principal de la aplicación
│   ├── index.js                 # Punto de entrada de la aplicación
│   └── ...                       # Otros archivos y recursos de la aplicación
├── package.json                 # Dependencias y configuraciones del proyecto
└── README.md                    # Este archivo
```
