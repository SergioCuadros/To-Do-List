import { createSlice } from "@reduxjs/toolkit";
import { initialTasks } from "./task";


const loadFromLocalStorage = () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
};

const initialState = {
    tasks: loadFromLocalStorage(),
    filter: "all",
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { title, description } = action.payload; 
            state.tasks.push({
                id: Date.now(),
                title,
                description,
                timestamp: new Date().toLocaleString(),
                completed: false,
            });
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload;
            const task = state.tasks.find((task) => task.id === id);
            if (task) {
              task.title = title;
              task.description = description;
            }
          },
        toggleTask: (state, action) => {
            const task = state.tasks.find((t) => t.id === action.payload);
            if (task) task.completed = !task.completed;
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((t) => t.id !== action.payload);
        },
    
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addTask, toggleTask, deleteTask, editTask, setFilter } = todoSlice.actions;
export default todoSlice.reducer;