import { useState, useEffect } from "react";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("contacts");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function addContact(newContact) {
    const updatedContacts = [...contacts, { id: Date.now(), ...newContact }];
    setContacts(updatedContacts);
    setPage("contacts");
  }

  function deleteContact(contactId) {
    const updatedContacts = contacts.filter((c) => c.id !== contactId);
    setContacts(updatedContacts);
  }

  return (
    <div className="App">
      <h1>Телефонна книга</h1>

      <div className="nav">
        <button onClick={() => setPage("contacts")}>Контакти</button>
        <button onClick={() => setPage("add")}>Додати контакт</button>
      </div>

      {page === "contacts" && (
        <ContactList contacts={contacts} onDelete={deleteContact} />
      )}

      {page === "add" && (
        <AddContact
          onSave={addContact}
          onCancel={() => setPage("contacts")}
        />
      )}
    </div>
  );
}
