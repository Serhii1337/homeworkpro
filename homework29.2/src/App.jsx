import React from "react";
import './App.css'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="app">
      <h1>TODO додаток</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
