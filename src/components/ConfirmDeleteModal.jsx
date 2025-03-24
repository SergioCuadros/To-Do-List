import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const ConfirmDeleteModal = ({ open, handleClose, handleConfirm, setSnackbarMessage, setSnackbarOpen }) => {
    const handleConfirmAndClose = () => {
        handleConfirm();
        setSnackbarMessage("Tarea eliminada exitosamente.");
        setSnackbarOpen(true);
        handleClose();
    };

    return (
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
                        <Box
                            sx={{
                                width: 400,
                                bgcolor: "background.paper",
                                boxShadow: 24,
                                p: 4,
                            }}
                        >
                            <Typography variant="h6" component="h2">
                                Confirmar Eliminación
                            </Typography>
                            <Typography sx={{ mt: 2 }}>
                                ¿Estás seguro de que deseas eliminar esta tarea?
                            </Typography>
                            <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
                                <Button onClick={handleClose} variant="outlined" color="primary">
                                    Cancelar
                                </Button>
                                <Button onClick={handleConfirmAndClose} variant="contained" color="secondary">
                                    Eliminar
                                </Button>
                            </Box>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </Modal>
    );
};

export default ConfirmDeleteModal;