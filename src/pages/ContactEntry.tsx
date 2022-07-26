import React, { useState } from 'react';
import { Box, TextField, Typography } from "@mui/material";
import { Contact } from '../api/contactsService';
import ContactForm from '../components/ContactForm';


const ContactEntry: React.FC = () => {
  // const [formValues, setFormValues] = useState(defaultValues)

  // const retrieveContacts = useCallback(async () => {
  //   return await getContacts();
  // }, [])

  // useEffect(() => {
  //   const asyncGetContacts = async () => {
  //     try {
  //       const data = await getContacts();
  //       setContacts(data);
  //     } catch (e) {
  //       // some sort of error handling here
  //       console.log(e);
  //     }
  //   }
  //   asyncGetContacts();
  // }, [])
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // };
  
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