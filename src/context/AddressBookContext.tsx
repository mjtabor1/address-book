import { Box } from '@mui/material';
import React, { useState, useEffect, Suspense } from 'react';

import { Contact, getContacts } from '../api/contactsService';

enum ApiStatus {
  Loading = 'loading',
  Success = 'success',
  Failure = 'failure',
}

interface AddressBookContextProps {
  contacts: Contact[];
  searchContacts: (query: string) => void;
}

const initialAddressBookValues: AddressBookContextProps = {
  contacts: [{
    id: 0,
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    email: ''
  }],
  searchContacts: (query: string): void => void 0,
};

export const AddressBookContext = React.createContext<AddressBookContextProps>(initialAddressBookValues);

export const AddressBookContextProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [contacts, setContacts] = useState<Contact[]>(initialAddressBookValues.contacts);
  const [originalContacts, setOriginalContacts] = useState<Contact[]>(initialAddressBookValues.contacts)
  const [apiStatus, setApiStatus] = useState(ApiStatus.Loading);
  const [message, setMessage] = useState('Fetching...');

  useEffect(() => {
    const fetchUser = () => {
      getContacts()
        .then((currentContacts) => {
          setMessage('Fetching Contacts');
          console.log('Setting contacts', currentContacts);
          setContacts(currentContacts);
          setOriginalContacts(currentContacts);
          setApiStatus(ApiStatus.Success);
        })
        .catch((error) => {
          console.error('Error getting contacts.', error);
          setApiStatus(ApiStatus.Failure);
          setMessage('Unable to fetch contacts.');
        });
    };
    fetchUser();
  }, []);

  const searchContacts = (query: string): void => {
    let sanQuery = query.split(' ')
    if (sanQuery.length) {
      if (sanQuery.length > 1) {
        const filteredContacts = originalContacts.filter((cont) => {
          if (cont.firstName.toLowerCase().includes(sanQuery[0].toLowerCase()) && cont.lastName.toLowerCase().includes(sanQuery[1].toLowerCase())) {
            return cont;
          }
          return null;
        })
        filteredContacts.length ? setContacts(filteredContacts) : setContacts([]);
      } else {
        const filteredContacts = originalContacts.filter((cont) => {
          if (cont.firstName.toLowerCase().includes(sanQuery[0].toLowerCase()) || cont.lastName.toLowerCase().includes(sanQuery[0].toLowerCase())) {
            return cont;
          }
          return null;
        })
        filteredContacts.length ? setContacts(filteredContacts) : setContacts([]);
      }
    } else {
      setContacts(originalContacts);
    }
  }

  const renderContextProvider = (): JSX.Element => {
    if (apiStatus === ApiStatus.Loading) {
      return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          sx={{backgroundColor: 'primary.main'}}
        />
      )
    }

    if (apiStatus === ApiStatus.Failure) {
      return <div>An error has occurred fetching contacts.</div>;
    }

    return (
      <AddressBookContext.Provider
        value={{
          contacts,
          searchContacts
        }}
      >
        {children}
      </AddressBookContext.Provider>
    );
  };
  return <Suspense fallback={<div>{message}</div>}>{renderContextProvider()}</Suspense>;
};
