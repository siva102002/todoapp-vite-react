import styles from "./footer.module.css";
export default function Footer({ completedTodos, total }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed: {completedTodos}</span>
      <span className={styles.item}>Total Task: {total}</span>
    </div>
  );
}
