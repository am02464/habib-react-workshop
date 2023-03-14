import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function TodoPage() {
  const [todoList, setTodoList] = useState([]);

  function handleSubmit(e, todo){
    e.preventDefault();
    
    setTodoList([...todoList, {
        title: todo,
        id: Date.now()
    }]);
  }

  return (
    <>
      <TodoForm onSubmit={handleSubmit} />
      <hr/>
      {todoList.map((todo, index)=> <Todo key={todo.id} todo={todo} index={index} />)}
    </>
  );
}
