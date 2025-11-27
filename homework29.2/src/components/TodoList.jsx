import React from "react";
import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <ul className="todos-list">
        {todos.map((todo, index) => (
          <li className="todo-item" key={index}>{todo}</li>
        ))}
      </ul>
      <footer>Загальна кількість елементів: {todos.length}</footer>
    </div>
  );
}
