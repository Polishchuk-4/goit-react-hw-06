import style from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { FaUser } from "react-icons/fa";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={style.contacts}>
      {contacts.map((contact) => (
        <li className={style.contactsItem} key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
