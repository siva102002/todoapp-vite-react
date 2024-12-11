import styles from "./todoItem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleClick(item) {
    setTodos(todos.filter((itemDel) => itemDel.name !== item));
  }
  function handleDone(name) {
    const newTodos = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  }
  const classNameLine = item.done ? styles.classNameLine : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={classNameLine} onClick={(e) => handleDone(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleClick(item.name)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
