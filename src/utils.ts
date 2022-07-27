import { Contact } from "./api/contactsService";

export const sortContacts = (contactList: Contact[]): Record<string, Contact[]> => {
  const sortedList = contactList.sort((a: Contact, b: Contact): number => {
    const textA = a.lastName.toUpperCase();
    const textB = b.lastName.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })

  let hash: Record<string, Contact[]> = {};
  let prefix: string | undefined = '';
  for (var i = 0; i < sortedList.length; i++) {
    prefix = sortedList[i].lastName?.slice(0,1)
    if (!(prefix in hash)) {
      hash[prefix] = [sortedList[i]]
    } else {
      hash[prefix].push(sortedList[i])
    }
  }

  return hash;
}