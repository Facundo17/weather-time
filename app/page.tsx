import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/navbar";
import Dashboard from "./components/dashboard";

const urlBase = "http://api.weatherapi.com/v1";
const apiKEY = "key=9826998231e740f591d135016242607";

const requestSearch = "/search.json?";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar url={urlBase + requestSearch + apiKEY} />
      <div className={styles.center}></div>
      <Dashboard />
    </main>
  );
}
