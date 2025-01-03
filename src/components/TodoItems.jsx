import TodoItem from "./TodoItem";
import styles from "./todoItems.module.css";
export default function TodoItems({ todos, setTodos }) {
  console.log(todos.length);
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.todoContainer}>
      {todos.length == 0 ? (
        <p className={styles.greet}>Your Todos Waitig for You !</p>
      ) : (
        <></>
      )}
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
