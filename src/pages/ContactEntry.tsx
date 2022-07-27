import React from 'react';
import { Box, Typography } from "@mui/material";
import ContactForm from '../components/ContactForm';


const ContactEntry: React.FC = () => {
  
  return (
    <Box sx={{
      backgroundColor: "primary.light",
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: 1,
      borderRadius: '10px',
      padding: '10px',
    }}>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1 }}
      >
        Add New Contact
      </Typography>
      <ContactForm />
    </Box>
  )
}

export default ContactEntry;