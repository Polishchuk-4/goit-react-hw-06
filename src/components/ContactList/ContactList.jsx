import { useSelector } from "react-redux";

import style from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { FaUser } from "react-icons/fa";

const getFilterContacts = (contacts, nameFilter) => {
  return contacts.filter((contact) => {
    console.log(contacts);
    return contact.username.toLowerCase().includes(nameFilter.toLowerCase());
  });
};
export default function ContactList() {
  const contacts = useSelector((state) => state.contacts);

  const nameFilter = useSelector((state) => state.filters.name);

  const visibleContacts = getFilterContacts(contacts, nameFilter);

  return (
    <ul className={style.contacts}>
      {visibleContacts.map((contact) => (
        <li className={style.contactsItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
