"use client";
import { useState } from "react";
import styles from "../page.module.css";
import { SearchResultList } from "./searchresults/search_result_lists";
import Search from "./search/search";
import { SearchResultModel } from "../models/searchResults.model";

type NavBarProps = {
  url: string;
  onSearch: (e: SearchResultModel) => void;
};

export const NavBar: React.FC<NavBarProps> = ({ url, onSearch }) => {
  const [results, setResults] = useState([]); // almacenar los resultados de búsqueda

  return (
    <div className={styles.description}>
      <div className={styles.wrapper}>
        <Search setResults={setResults} url={url} />
        <SearchResultList results={results} onClick={onSearch} />
      </div>
      <div className={styles.footer}>
        Powered by{" "}
        <a
          href="https://www.weatherapi.com/"
          title="Free Weather API"
          target="blank"
        >
          WeatherAPI.com
        </a>
      </div>
    </div>
  );
};
