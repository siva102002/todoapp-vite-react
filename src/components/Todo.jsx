import { useState } from "react";
import Form from "./Form";
import TodoItems from "./TodoItems";
import Footer from "./Footer";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((item) => item.done).length;
  const total = todos.length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoItems todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} total={total} />
    </div>
  );
}
