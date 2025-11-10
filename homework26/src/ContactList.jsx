export default function ContactList({ contacts, onDelete }) {
  return (
    <div className="contact-list">
      {contacts.length === 0 ? (
        <p>Контактів поки немає</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Ім’я</th>
              <th>Прізвище</th>
              <th>Телефон</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phone}</td>
                <td>
                  <button onClick={() => onDelete(contact.id)}>Видалити</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}