import React, { useState } from "react";
import { ListItem, ListItemText, Checkbox, IconButton, Box, Typography, Snackbar, Alert } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../store/todoSlice";
import { motion } from "framer-motion";
import AddTaskModal from "./AddTaskModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const TodoItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
    setSnackbarMessage(task.completed ? "Tarea marcada como incompleta." : "Tarea marcada como completada.");
    setSnackbarOpen(true);
  };

  const handleDelete = () => {
    setIsConfirmingDelete(true);
  };


  const handleConfirmDelete = () => {
    dispatch(deleteTask(task.id));
    setSnackbarOpen(true);
    setIsConfirmingDelete(false); 
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  const handleCloseConfirm = () => {
    setIsConfirmingDelete(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <motion.div
           initial={{ opacity: 0, y: -50 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, x: -100 }}
           transition={{ type: "spring", stiffness: 120, damping: 10 }}
      >
        <ListItem
          secondaryAction={
            <>
              <IconButton edge="end" aria-label="edit" onClick={handleEdit}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          <Checkbox edge="start" checked={task.completed} onChange={handleToggle} />
          <Box sx={{ flexGrow: 1 }}>
            <ListItemText primary={task.title} sx={{ textDecoration: task.completed ? "line-through" : "none" }} />
            <Typography variant="body2" color="textSecondary" sx={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.description}
            </Typography>
            <Typography variant="caption" color="textSecondary" sx={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.timestamp}
            </Typography>
          </Box>
        </ListItem>
      </motion.div>

      <AddTaskModal
        open={isEditing}
        handleClose={handleClose}
        task={task}
        setSnackbarMessage={setSnackbarMessage}
        setSnackbarOpen={setSnackbarOpen}
      />
      
      <ConfirmDeleteModal
        open={isConfirmingDelete}
        handleClose={handleCloseConfirm}
        handleConfirm={handleConfirmDelete}
        setSnackbarMessage={setSnackbarMessage}
        setSnackbarOpen={setSnackbarOpen}
      />
      
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default TodoItem;
