import { useState } from "react";

export default function TodoForm({onSubmit}) {
  const [title, setTitle] = useState("");

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e){
    onSubmit(e, title);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Todo App:</h1>
      <label htmlFor="todo-title">Todo Title:</label>
      <input
        type="text"
        value={title}
        id="todo-title"
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
