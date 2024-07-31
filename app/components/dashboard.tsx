import { useEffect, useState } from "react";
import { SearchResultModel } from "../models/searchResults.model";
import styles from "../page.module.css";
import { Welcome } from "./welcome/welcome";
import axios from "axios";
import { DayModel } from "../models/day.model";
import { InfoContainer } from "./info_container";
import Skeleton from "./skeleton/skeleton";

type SearchData = {
  url: string;
  search?: SearchResultModel;
};

export const Dashboard: React.FC<SearchData> = ({ url, search }) => {
  useEffect(() => {
    if (search) {
      fetchData(search);
    }
  }, [search?.lat]);

  const firstSkeletor = 5;
  const secondSkeletor = 4;

  const [foreCastDays, setForeCastDays] = useState<any[]>([]);
  const [currentDay, setCurrentDay] = useState<DayModel>();

  const fetchData = async (search: SearchResultModel) => {
    let foreCastUrl = url + "&q=" + search.lat + "," + search.lon + "&days=5";

    try {
      const result = await axios.get(foreCastUrl);

      if (result.status === 200 && result.data) {
        console.log(result);
        setForeCastDays(result.data.forecast.forecastday);
        setCurrentDay(result.data.current);
      }
    } catch (error) {}
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
              large={false}
            />
          );
        })}
      </div>

      <p>Today's Hightlights</p>

      <div className={styles.grid + " " + styles.gridWrap}>
        <InfoContainer
          title={"Wind Status"}
          image=""
          desc={currentDay?.wind_mph.toString()}
          sub={"mph"}
          name={styles.card + " " + styles.cardWidth}
          classN={styles.dayDesc}
          large={true}
        />
        <InfoContainer
          title={"Humidity"}
          image=""
          desc={currentDay?.humidity.toString()}
          sub={"%"}
          degrees={currentDay?.humidity}
          name={styles.card + " " + styles.cardWidth}
          classN={styles.dayDesc}
          large={true}
        />
        <InfoContainer
          title={"Visibility"}
          image=""
          desc={currentDay?.vis_miles.toString()}
          sub={"miles"}
          name={styles.card + " " + styles.cardWidth}
          classN={styles.dayDesc}
          large={true}
        />
        <InfoContainer
          title={"Air Pressure"}
          image=""
          desc={currentDay?.pressure_mb.toString()}
          sub={"mb"}
          name={styles.card + " " + styles.cardWidth}
          classN={styles.dayDesc}
          large={true}
        />
      </div>
    </div>
  ) : (
    <Skeleton />
  );
};
