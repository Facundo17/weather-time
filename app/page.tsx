import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/navbar";
import Dashboard from "./components/dashboard";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.center}>
      </div>
      <Dashboard />
    </main>
  );
}
