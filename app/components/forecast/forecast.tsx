import styles from "../../page.module.css";
import { InfoContainer } from "../info_container";
import { DayModel } from "@/app/models/day.model";
import Skeleton from "../skeleton/skeleton";
import TButton from "../tbutton/tbutton";
import { useState } from "react";

type ForecastProps = {
  foreCastDays: any[];
  currentDay: DayModel | null;
  loading: boolean;
};

export default function Forecast({
  foreCastDays,
  currentDay,
  loading,
}: ForecastProps) {
  const [celsius, setCelsius] = useState("°C");

  function switchButton(value: string) {
    setCelsius(value);
  }

  return loading ? (
    <Skeleton />
  ) : (
    <div className={styles.gridContainer}>
      <div className={styles.buttonContainer}>
        <TButton
          name="°C"
          onClick={switchButton}
          active={celsius == "°C" ? true : false}
        ></TButton>
        <TButton
          name="°F"
          onClick={switchButton}
          active={celsius == "°F" ? true : false}
        ></TButton>
      </div>
      <div className={styles.grid}>
        {foreCastDays.map((el: any, index: number) => {
          return (
            <InfoContainer
              key={index}
              title={el.date}
              image={"https:" + el.day.condition.icon}
              day={el.day}
              name={styles.card}
              classN={styles.vercelLogo}
              large={false}
              celsius={celsius}
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
  );
}
