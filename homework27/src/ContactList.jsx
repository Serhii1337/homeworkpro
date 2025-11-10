export default function ContactList({ contacts, onDelete, text }) {
  return (
    <div className="contact-list">
      {contacts.length === 0 ? (
        <p>{text.empty}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>{text.name}</th>
              <th>{text.last}</th>
              <th>{text.phone}</th>
              <th>{text.delete}</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phone}</td>
                <td>
                  <button onClick={() => onDelete(contact.id)}>
                    {text.delete}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
