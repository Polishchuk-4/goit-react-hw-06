import ContactList from "../ContactList/ContactList";
import initialContacts from "../../contacts.json";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import style from "./App.module.css";

import { useState, useEffect } from "react";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    } else {
      return initialContacts;
    }
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const addContact = (contact) => {
    setContacts((prevValues) => {
      return [...prevValues, contact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevValues) => {
      return prevValues.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  console.log(contacts);

  return (
    <div className={style.app}>
      <h1 className={style.appTitle}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
