Esta es una aplicación de lista de tareas (TodoList) construida con React, Redux y Material-UI. La aplicación permite a los usuarios agregar, editar, eliminar y marcar tareas como completadas. También incluye un selector de tema oscuro/claro y un filtro para mostrar todas las tareas, solo las completadas o solo las pendientes.

Tecnologías y Dependencia:

Este proyecto utiliza las siguientes tecnologías y dependencias:

React: Biblioteca principal para construir la interfaz de usuario.
Redux: Gestión del estado global de la aplicación.
Material-UI (MUI): Proporciona componentes de interfaz de usuario y diseño, como botones, cuadros de texto y listas.
Framer Motion: Animaciones y transiciones en la interfaz.
React Router: Para manejar las rutas (si se usaran en el futuro).
Snackbar y Alertas: Utilizados para mostrar mensajes de estado (confirmación de eliminación de tarea, etc.).

## 🔧 Pasos de Instalación y Ejecución

Para instalar y ejecutar la aplicación localmente, sigue estos pasos:

1. Clona el repositorio:
    ```sh
    git clone https://github.com/SergioCuadros/To-Do-List}
    ```

2. Instala las dependencias:
    ```sh
    npm install
    ```

3. Inicia la aplicación:
    ```sh
    npm run dev
    ```

## 📁 Estructura del Proyecto
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
