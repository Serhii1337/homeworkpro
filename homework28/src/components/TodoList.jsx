import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((task, index) => (
        <TodoItem
          key={index}
          text={task}
          index={index}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
