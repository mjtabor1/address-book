import React, {useContext, useEffect, useState} from 'react';
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Contact } from '../api/contactsService';
import { sortContacts } from '../utils';
import { AddressBookContext } from '../context/AddressBookContext';
import { Typography } from '@mui/material';


const Contacts: React.FC = () => {
  const { contacts } = useContext(AddressBookContext);
  const [hashContacts, setHashContacts] = useState<Record<string, Contact[]>>({});

  useEffect(() => {
    const sortedContacts = sortContacts(contacts);
    setHashContacts(sortedContacts);
  }, [contacts])

  if (!Object.keys(hashContacts).length) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{backgroundColor: 'primary.main'}}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1 }}
        >
          No Contacts Available
        </Typography>
      </Box>
    )
  }

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
          Contact List
        </Typography>
        {hashContacts && (
          <List sx={{width: '100%'}}>
            {Object.keys(hashContacts).map((key) => 
              <ListItem key={key} sx={{border: 1, margin: '5px 0 5px 0', bgcolor: 'secondary.dark'}}>
                <ListItemAvatar>
                  <Avatar>{key}</Avatar>
                </ListItemAvatar>
                {hashContacts[key].map((c) => 
                  <>
                    <ListItemText 
                      key={c.id}
                      primary={
                        <>
                          <div>{`${c.firstName} ${c.lastName}`}</div>
                          <div>{c.email}</div>
                          <div>{c.phoneNumber}</div>
                          <div>{c.address}</div>
                        </>
                      }
                    />
                    <Divider key={`${c.id}divider`} orientation='vertical' sx={{padding: '5px'}} />
                  </>
                )}
              </ListItem>
            )}
          </List>
        )}
    </Box>
  )
}

export default Contacts;