import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddContact({ onSave, text }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  function handleSave() {
    if (!firstName || !lastName || !phone) {
      alert(text.alert);
      return;
    }

    onSave({ firstName, lastName, phone });
    navigate("/");
  }

  return (
    <div className="add-contact">
      <h2>{text.newContact}</h2>

      <input
        type="text"
        placeholder={text.name}
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />

      <input
        type="text"
        placeholder={text.last}
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />

      <input
        type="text"
        placeholder={text.phone}
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />

      <div className="buttons">
        <button onClick={handleSave}>{text.save}</button>
        <button onClick={() => navigate("/")}>{text.cancel}</button>
      </div>
    </div>
  );
}
