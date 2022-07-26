import React, {useEffect, useState} from 'react';
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Contact, getContacts } from '../api/contactsService';
import { sortContacts } from '../utils';


const Contacts: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  // const retrieveContacts = useCallback(async () => {
  //   return await getContacts();
  // }, [])

  useEffect(() => {
    const asyncGetContacts = async () => {
      try {
        const data = await getContacts();
        const sortedContacts = sortContacts(data);
        setContacts(sortedContacts);
      } catch (e) {
        // some sort of error handling here
        console.log(e);
      }
    }
    asyncGetContacts();
  }, [])
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
      <List sx={{width: '100%', maxWidth: 500, bgcolor: 'secondary.dark'}}>
        {contacts.map((contact) => (
          <>
            <ListItem key={contact.id}>
              <ListItemAvatar>
                <Avatar>
                  {`${contact.firstName.slice(0,1)}${contact.lastName.slice(0,1)}`}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`${contact.firstName} ${contact.lastName}`} secondary={contact.address} />
              <ListItemText primary={contact.email} secondary={contact.phoneNumber} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  )
}

export default Contacts;