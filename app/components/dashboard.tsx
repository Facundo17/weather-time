import { useEffect, useState } from "react";
import { SearchResultModel } from "../models/searchResults.model";
import { Welcome } from "./welcome/welcome";
import axios from "axios";
import { DayModel } from "../models/day.model";
import Forecast from "./forecast/forecast";

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

  const [foreCastDays, setForeCastDays] = useState<any[]>([]);
  const [currentDay, setCurrentDay] = useState<DayModel | null>(null);
  const [load, setLoad] = useState(false);

  const fetchData = async (search: SearchResultModel) => {
    let foreCastUrl = url + "&q=" + search.lat + "," + search.lon + "&days=5";
    setLoad(true);

    try {
      const result = await axios.get(foreCastUrl);

      setLoad(false);

      if (result.status === 200 && result.data) {
        setForeCastDays(result.data.forecast.forecastday);
        setCurrentDay(result.data.current);
      }
    } catch (error) {
      setLoad(false);
    }
  };

  return load || (search && foreCastDays && foreCastDays.length > 0) ? (
    <Forecast
      foreCastDays={foreCastDays}
      currentDay={currentDay}
      loading={load}
    />
  ) : (
    <Welcome />
  );
};
