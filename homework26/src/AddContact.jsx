import { useState } from "react";

export default function AddContact({ onSave, onCancel }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  function handleSave() {
    if (!firstName || !lastName || !phone) {
      alert("Будь ласка, заповніть усі поля!");
      return;
    }

    onSave({ firstName, lastName, phone });
    setFirstName("");
    setLastName("");
    setPhone("");
  }

  return (
    <div className="add-contact">
      <h2>Додати новий контакт</h2>

      <input
        type="text"
        placeholder="Ім’я"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />

      <input
        type="text"
        placeholder="Прізвище"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />

      <input
        type="text"
        placeholder="Телефон"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />

      <div className="buttons">
        <button onClick={handleSave}>Зберегти</button>
        <button onClick={onCancel}>Відміна</button>
      </div>
    </div>
  );
}