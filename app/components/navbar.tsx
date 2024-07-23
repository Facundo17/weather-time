import styles from "../page.module.css";
import Search from "./search";

export default function NavBar() {
  return (
    <div className={styles.description}>
      <Search />
    </div>
  );
}
