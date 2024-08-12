import React from "react";
import Image from "next/image";
import { ProgressBar } from "./progress/progress";

type DayForecast = {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  condition: ConditionForecast;
};

type ConditionForecast = {
  code: number;
  icon: string;
  text: string;
};
interface InfoProps {
  title: string;
  image: string;
  sub?: string;
  degrees?: number;
  desc?: string;
  name: string;
  classN: string;
  large: boolean;
  day?: DayForecast;
  celsius?: string;
}

export const InfoContainer: React.FC<InfoProps> = ({
  title,
  image,
  sub,
  degrees,
  desc,
  name,
  classN,
  large,
  day,
  celsius,
}) => {
  return large ? (
    <div className={name}>
      <p>{title}</p>
      <div className={classN}>
        <h1>{desc}</h1>
        <p>{sub}</p>
      </div>
      {degrees ? <ProgressBar current={degrees} /> : ""}
    </div>
  ) : (
    <div className={name}>
      <p>{title}</p>
      <div className="flex justify-center">
        <Image
          src={image}
          alt="Vercel Logo"
          className={classN}
          width={50}
          height={50}
          priority
        />
      </div>
      <div className="w-40">{day?.condition.text}</div>
      <div className="flex justify-around mt-2">
        {celsius === "°C" ? (
          <>
            <div>{day?.maxtemp_c}°C</div>
            <div>{day?.mintemp_c}°C</div>
          </>
        ) : (
          <>
            <div>{day?.maxtemp_f}°F</div>
            <div>{day?.mintemp_f}°F</div>
          </>
        )}
      </div>
    </div>
  );
};
