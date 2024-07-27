import { SearchResultModel } from "../models/searchResults.model";
import styles from "../page.module.css";
import InfoContainer from "./info_container";
import { Welcome } from "./welcome/welcome";

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

  console.log(search);

  /*const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {});
  };*/

  return search ? (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {testRow.map((el, index) => {
          return (
            <InfoContainer
              key={index}
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
        {testRow.map((el, index) => {
          return (
            <InfoContainer
              key={index}
              title={el.title}
              image={el.image}
              desc={el.desc}
              name={styles.card + " " + styles.cardWidth}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <Welcome />
  );
};
