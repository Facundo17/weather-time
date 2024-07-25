"use client";
import { useState } from "react";
import styles from "../page.module.css";
import { SearchResultList } from "./searchresults/search_result_lists";
import Search from "./search/search";

export default function NavBar() {

  const [results, setResults] = useState([]); // almacenar los resultados de búsqueda

  return (
    <div className={styles.description}>
      <div className={styles.wrapper}>
        <Search setResults={setResults} />
        <SearchResultList results={results} />
      </div>
    </div>
  );
}
