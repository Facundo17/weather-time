import styles from "../page.module.css";
import InfoContainer from "./info_container";

export default function Dashboard() {
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

  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {testRow.map((el) => {
          return (
            <InfoContainer
              title={el.title}
              image={el.image}
              desc={el.desc}
              name={styles.card}
            />
          );
        })}
      </div>

      <p>Today's Hightlights</p>

      <div className={styles.grid + " " + styles.gridWrap}>
        {testRow.map((el) => {
          return (
            <InfoContainer
              title={el.title}
              image={el.image}
              desc={el.desc}
              name={styles.card + " " + styles.cardWidth}
            />
          );
        })}
      </div>
    </div>
  );
}
