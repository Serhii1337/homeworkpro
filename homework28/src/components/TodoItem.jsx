export default function TodoItem({ text, index, onDelete }) {
  return (
    <li className="todo-item">
      {text}
      <button
        className="delete-btn"
        onClick={() => onDelete(index)}
      >
        Видалити
      </button>
    </li>
  );
}
