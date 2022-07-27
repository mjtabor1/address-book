import React, { useState } from 'react';
import { Box, Button, TextField } from "@mui/material";
import { Contact, insertContact } from '../api/contactsService';

const defaultValues: Contact = {
  id: 0,
  firstName: '',
  lastName: '',
  address: '',
  phoneNumber: '',
  email: ''
};

interface RequiredFormFieldErrors {
  email: boolean;
  phoneNumber: boolean;
}

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [errors, setErrors] = useState<RequiredFormFieldErrors>({email: false, phoneNumber: false});

  const validateOnSubmit = (): boolean => {
    let temp: RequiredFormFieldErrors = {email: false, phoneNumber: false};
    temp.email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formValues.email) ? false : true;
    temp.phoneNumber = formValues.phoneNumber.length > 9 ? false : true;
    setErrors({
      ...temp
    });
    return Object.values(temp).every((x) => x === false);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (!validateOnSubmit()) {
      console.error(`An error occurred in one of the Required Form Fields`)
    } else {
      await insertContact(formValues);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormValues(defaultValues);
    setErrors({email: false, phoneNumber: false});
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
        error={errors.email}
        label="Email*"
        type="text"
        value={formValues.email}
        onChange={handleInputChange}
        sx={{margin: '5px', backgroundColor: 'secondary.main'}}
      />
      <TextField
        id="phone-number-input"
        name="phoneNumber"
        error={errors.phoneNumber}
        label="Phone Number*"
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
  )
}

export default ContactForm;