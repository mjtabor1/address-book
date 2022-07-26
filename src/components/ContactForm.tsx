import React, { useState } from 'react';
import { Box, Button, Grid, Input, TextField } from "@mui/material";
import { Contact } from '../api/contactsService';

const defaultValues: Contact = {
  id: 0,
  firstName: '',
  lastName: '',
  address: '',
  phoneNumber: '',
  email: ''
};


const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState(defaultValues)

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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formValues);
    // if (validateOnSubmit()) {
    //   window.alert("Submitting...");
    // }
    // employeeService.insertEmployee(values);
    // resetForm();
  };

  const resetForm = () => {
    setFormValues(defaultValues);
    // setErrors({});
  };
  
  return (
    <>
      <TextField
        id="first-name-input"
        name="firstName"
        label="First Name"
        type="text"
        value={formValues.firstName}
        onChange={handleInputChange}
        sx={{margin: '5px', backgroundColor: 'secondary.main'}}
      />
      <TextField
        id="last-name-input"
        name="lastName"
        label="Last Name"
        type="text"
        value={formValues.lastName}
        onChange={handleInputChange}
        sx={{margin: '5px', backgroundColor: 'secondary.main'}}
      />
      <TextField
        id="email-input"
        name="email"
        label="Email"
        type="text"
        value={formValues.email}
        onChange={handleInputChange}
        sx={{margin: '5px', backgroundColor: 'secondary.main'}}
      />
      <TextField
        id="phone-number-input"
        name="phoneNumber"
        label="Phone Number"
        type="text"
        value={formValues.phoneNumber}
        onChange={handleInputChange}
        sx={{margin: '5px', backgroundColor: 'secondary.main'}}
      />
      <TextField
        id="address-input"
        name="address"
        label="Address"
        type="text"
        value={formValues.address}
        onChange={handleInputChange}
        sx={{margin: '5px', backgroundColor: 'secondary.main'}}
      />
      <Box sx={{
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
      }}>
        <Button 
          type="submit" 
          sx={{margin: '5px', backgroundColor: 'primary.main', color: '#fff'}}
          onClick={handleSubmit}
          >
            Submit
          </Button>
        <Button 
          sx={{margin: '5px', backgroundColor: 'primary.main', color: '#fff'}} 
          onClick={resetForm}
        >
          Reset
        </Button>
      </Box>
    </>
    // <Box sx={{
    //   backgroundColor: "secondary.main",
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alightItems: 'center',
    //   border: 1,
    //   borderRadius: '10px',
    //   padding: '10px'
    // }}>
    //   <TextField
    //     id="first-name-input"
    //     name="firstName"
    //     label="First Name"
    //     type="text"
    //     value={formValues.firstName}
    //     onChange={handleInputChange}
    //   />
    //   <TextField
    //     id="last-name-input"
    //     name="lastName"
    //     label="Last Name"
    //     type="text"
    //     value={formValues.lastName}
    //     onChange={handleInputChange}
    //   />
    // </Box>
  )
}

export default ContactForm;