import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

const JoinWaitlistModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Submitted:", formData);
    setFormData({ email: "" }); // Clear input fields
    handleClose(); // Close modal
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          bgcolor: "#222",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
          Join the Waitlist
        </Typography>
        <Typography variant="body2" color="white" sx={{ mb: 2, textAlign: "center" }}>
          Enter your details below to get early access to our platform.
        </Typography>

        <TextField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          className="border-2 border-white text-white rounded-lg"
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleSubmit}
          className=" bg-gradient-to-r from-[#b02b2c] to-[#5c5959] text-white font-bold rounded-lg"
        >
          Send
        </Button>
      </Box>
    </Modal>
  );
};

export default JoinWaitlistModal;

