import {FC} from "react";
import ContactEntry from "./pages/ContactEntry";
import Contacts from "./pages/Contacts";

interface Route {
  key: string,
  title: string,
  path: string,
  enabled: boolean,
  component: FC<{}>
}

export const routes: Array<Route> = [
  {
    key: 'home-route',
    title: 'Home',
    path: '/',
    enabled: true,
    component: ContactEntry
  },
  {
      key: 'contacts-route',
      title: 'Contacts',
      path: '/contacts',
      enabled: true,
      component: Contacts
  }  
]