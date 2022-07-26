import { Contact } from "./api/contactsService";

export const sortContacts = (contactList: Contact[]): Contact[] => {
  return contactList.sort((a: Contact, b: Contact): number => {
    const textA = a.lastName.toUpperCase();
    const textB = b.lastName.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })
}