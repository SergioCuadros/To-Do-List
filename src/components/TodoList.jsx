import React, { useState } from "react";
import { Container, Button, List, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import AddTaskModal from "./AddTaskModal";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const TodoList = () => {
  const [open, setOpen] = useState(false); // Controla el estado del modal
  const tasks = useSelector((state) => state.todo.tasks);
  const filter = useSelector((state) => state.todo.filter);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const filteredTasks = tasks.filter((t) =>
    filter === "all" ? true : filter === "completed" ? t.completed : !t.completed
  );

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Button onClick={handleOpen} variant="contained" fullWidth>
        Agregar Tarea
      </Button>

      <AddTaskModal open={open} handleClose={handleClose} />

      {filteredTasks.length === 0 ? (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <AssignmentTurnedInIcon sx={{ fontSize: 60, color: 'gray' }} />
          <Typography variant="h6" sx={{ mt: 2, color: 'gray' }}>
            No hay tareas pendientes 💪🏻
          </Typography>
        </Box>
      ) : (
        <List sx={{ mt: 2 }}>
          {filteredTasks.map((t) => (
            <TodoItem key={t.id} task={t} />
          ))}
        </List>
      )}
    </Container>
  );
};

export default TodoList;