"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { NavBar } from "./components/navbar";
import { SearchResultModel } from "./models/searchResults.model";
import { Dashboard } from "./components/dashboard";

const urlBase = "https://api.weatherapi.com/v1";
const apiKEY = "key=9826998231e740f591d135016242607";

const requestSearch = "/search.json?";
const requestForecast = "/forecast.json?";

export default function Home() {
  const [searchData, setSearchData] = useState<SearchResultModel>();

  const searchResult = (value: SearchResultModel) => {
    setSearchData(value);
  };

  const autoSearchURL = urlBase + requestSearch + apiKEY;
  const forecastURL = urlBase + requestForecast + apiKEY;

  return (
    <main className={styles.main}>
      <NavBar url={autoSearchURL} onSearch={searchResult} />
      <div className={styles.center}></div>
      <Dashboard url={forecastURL} search={searchData} />
      <div className={styles.abFooter}>
        Created by Facundo Saucedo
        <a
          href="https://www.weatherapi.com/"
          title="Free Weather API"
          target="blank"
        >
          WeatherAPI.com
        </a>
      </div>
    </main>
  );
}
