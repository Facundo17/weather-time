import { useEffect, useState } from "react";
import { SearchResultModel } from "../models/searchResults.model";
import styles from "../page.module.css";
import InfoContainer from "./info_container";
import { Welcome } from "./welcome/welcome";
import axios from "axios";

interface SearchData {
  url: string;
  search?: SearchResultModel;
}

export const Dashboard: React.FC<SearchData> = ({ url, search }) => {
  // Objeto de pruebas. Reemplazar después con el API

  const testRow = [
    {
      title: "Tomorrow",
      image: styles.vercelLogo,
      desc: "16° 11°C",
    },
    {
      title: "Tomorrow",
      image: styles.vercelLogo,
      desc: "16° 11°C",
    },
    {
      title: "Tomorrow",
      image: styles.vercelLogo,
      desc: "16° 11°C",
    },
    {
      title: "Tomorrow",
      image: styles.vercelLogo,
      desc: "16° 11°C",
    },
    {
      title: "Tomorrow",
      image: styles.vercelLogo,
      desc: "16° 11°C",
    },
  ];

  useEffect(() => {
    if (search) {
      fetchData(search);
    }
  }, [search]);

  const [foreCastDays, setForeCastDays] = useState<any[]>([]);

  const fetchData = async (search: SearchResultModel) => {
    let foreCastUrl = url + "&q=" + search.lat + "," + search.lon + "&days=5";
    const result = await axios.get(foreCastUrl);
    console.log(result);
    setForeCastDays(result.data.forecast.forecastday);
  };

  return search && foreCastDays && foreCastDays.length > 0 ? (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {foreCastDays.map((el: any, index: number) => {
          return (
            <InfoContainer
              key={index}
              title={el.date}
              image={"https:" + el.day.condition.icon}
              desc={el.day.condition.text}
              name={styles.card}
              classN={styles.vercelLogo}
            />
          );
        })}
      </div>

      <p>Today's Hightlights</p>

      <div className={styles.grid + " " + styles.gridWrap}>
        {testRow.map((el, index) => {
          return (
            <InfoContainer
              key={index}
              title={el.title}
              image={"/cloud_test.webp"}
              desc={el.desc}
              name={styles.card + " " + styles.cardWidth}
              classN={styles.vercelLogo}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <Welcome />
  );
};
