import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../store/todoSlice";
import { motion, AnimatePresence } from "framer-motion";

const AddTaskModal = ({ open, handleClose, task }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [task]);

  const handleSaveTask = () => {
    if (title.trim()) {
      if (task) {
        dispatch(editTask({ id: task.id, title, description }));
        setSnackbarMessage("Tarea editada");
      } else {
        dispatch(addTask({ title, description }));
        setSnackbarMessage("Tarea agregada");
      }
      setSnackbarOpen(true);
      handleClose();
    } else {
      setAlertOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  return (
    <>

      <Modal open={open} onClose={handleClose}>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
              }}
            >
              <Box sx={{
                width: 400,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
              }}>
                <TextField
                  label="Título"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Descripción"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  fullWidth
                  multiline
                  rows={4}
                  sx={{ mb: 2 }}
                />
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
                  <Button
                    onClick={handleClose}
                    variant="outlined"
                  >
                    Cancelar
                  </Button>
                  <Button
                    onClick={handleSaveTask}
                    variant="contained"
                  >
                    {task ? "Guardar Cambios" : "Agregar"}
                  </Button>
                </Box>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity="error" sx={{ width: '100%' }}>
          El título es obligatorio
        </Alert>
      </Snackbar>
    </>
  );
};


export default AddTaskModal;