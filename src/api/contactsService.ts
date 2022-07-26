export interface Contact {
  id: number,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  address: string
}

export interface ContactsResponse {
  contacts: Contact[]
}

const BASE_URL = 'http://localhost:3000/'

export const getContacts = async (): Promise<Contact[]> => {
  const endpoint = `${BASE_URL}contacts`;

  const data = await (await fetch(endpoint)).json();
  return data;
}