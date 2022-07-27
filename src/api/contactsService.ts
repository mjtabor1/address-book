export interface Contact {
  id: number,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  address: string
}

const BASE_URL = 'http://localhost:3000/'

export const getContacts = async (): Promise<Contact[]> => {
  const endpoint = `${BASE_URL}contacts`;

  const data = await (await fetch(endpoint)).json();
  return data;
}

export const insertContact = async (values: Contact): Promise<void> => {
  const endpoint = `${BASE_URL}contacts`;
  let currentContacts = await getContacts();
  const uid = getUniqueId(currentContacts);
  if (verifyUnique(currentContacts, values)) {
    let input = {...values, id: uid}
    await fetch(endpoint, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    })
  }
}

const verifyUnique = (contactList: Contact[], addingContact: Contact): boolean => {
  return contactList.every((contact) => {
    return (contact.email !== addingContact.email && contact.phoneNumber !== addingContact.phoneNumber);
  });
}

const getUniqueId = (contactList: Contact[]): number => {
  const max = contactList.flatMap((c) => c.id).reduce((a, b) => Math.max(a,b))
  return max + 1;
}