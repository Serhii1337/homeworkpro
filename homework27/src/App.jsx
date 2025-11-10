import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import Header from "./Header";
import "./App.css";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [language, setLanguage] = useState(localStorage.getItem("language") || "ua");

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) setContacts(JSON.parse(savedContacts));
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  function toggleLanguage() {
    setLanguage((prev) => (prev === "ua" ? "en" : "ua"));
  }

  const text = {
    ua: {
      title: "Телефонна книга",
      contacts: "Контакти",
      add: "Додати контакт",
      empty: "Контактів поки немає",
      delete: "Видалити",
      name: "Ім’я",
      last: "Прізвище",
      phone: "Телефон",
      newContact: "Додати новий контакт",
      save: "Зберегти",
      cancel: "Відміна",
      alert: "Будь ласка, заповніть усі поля!",
    },
    en: {
      title: "Phone Book",
      contacts: "Contacts",
      add: "Add Contact",
      empty: "No contacts yet",
      delete: "Delete",
      name: "First Name",
      last: "Last Name",
      phone: "Phone",
      newContact: "Add new contact",
      save: "Save",
      cancel: "Cancel",
      alert: "Please fill in all fields!",
    },
  };

  function addContact(newContact) {
    const updatedContacts = [...contacts, { id: Date.now(), ...newContact }];
    setContacts(updatedContacts);
  }

  function deleteContact(contactId) {
    setContacts((prev) => prev.filter((contact) => contact.id !== contactId));
  }

  return (
    <div className={`App ${theme}`}>
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        language={language}
        onToggleLanguage={toggleLanguage}
        text={text[language]}
      />

      <h1>{text[language].title}</h1>

      <Routes>
        <Route
          path="/"
          element={
            <ContactList
              contacts={contacts}
              onDelete={deleteContact}
              text={text[language]}
            />
          }
        />
        <Route
          path="/add"
          element={<AddContact onSave={addContact} text={text[language]} />}
        />
      </Routes>
    </div>
  );
}
