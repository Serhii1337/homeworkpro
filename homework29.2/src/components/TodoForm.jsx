import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

export default function TodoForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <form className="input-block" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Введіть задачу"
      />
      <button type="submit">Додати</button>
    </form>
  );
}
