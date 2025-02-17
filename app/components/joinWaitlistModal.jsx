import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// Custom styled components for better visibility and responsiveness
const StyledTextField = styled(TextField)({
  '& label': {
    color: '#E0E0E0',
  },
  '& label.Mui-focused': {
    color: '#e84142',
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '8px',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#e84142',
    },
  },
});

const StyledButton = styled(Button)({
  background: 'linear-gradient(to right, #e84142, #e84142CC)',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '8px',
  padding: '10px 0',
  '&:hover': {
    background: 'linear-gradient(to right, #d83a3b, #d83a3bCC)',
    transform: 'scale(1.02)',
    boxShadow: '0 4px 8px rgba(232, 65, 66, 0.2)',
  },
  transition: 'all 0.3s ease',
});

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
          width: { xs: '90%', sm: '80%', md: 700 },
          maxWidth: 800,
          bgcolor: "#1A1A1A",
          boxShadow: 24,
          p: { xs: 3, sm: 4 },
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Typography 
          id="modal-title" 
          variant="h4" 
          component="h2" 
          gutterBottom
          color="white"
          fontWeight={600}
          sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}
        >
          Join the Waitlist
        </Typography>
        
        <Typography 
          variant="body1" 
          color="rgba(255, 255, 255, 0.7)" 
          sx={{ 
            mb: 2, 
            textAlign: "center",
            maxWidth: '90%',
            fontSize: { xs: '0.9rem', sm: '1rem' } 
          }}
        >
          Enter your details below to get early access to our AI-powered crypto platform.
        </Typography>

        <StyledTextField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          placeholder="your.email@example.com"
          sx={{ mb: 2 }}
        />

        <StyledButton
          fullWidth
          onClick={handleSubmit}
          sx={{ mt: 1 }}
        >
          Join Now
        </StyledButton>
        
        <Typography 
          variant="caption" 
          color="rgba(255, 255, 255, 0.5)"
          sx={{ mt: 2, textAlign: 'center', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}
        >
          We'll notify you as soon as LancheAI is ready. No spam, we promise!
        </Typography>
      </Box>
    </Modal>
  );
};

export default JoinWaitlistModal;