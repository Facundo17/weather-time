import React from "react";
import Image from "next/image";
import { ProgressBar } from "./progress/progress";

interface InfoProps {
  title: string;
  image: string;
  desc?: string;
  sub?: string;
  degrees?: number;
  name: string;
  classN: string;
  large: boolean;
}

export const InfoContainer: React.FC<InfoProps> = ({
  title,
  image,
  desc,
  sub,
  degrees,
  name,
  classN,
  large,
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
      <div>
        <Image
          src={image}
          alt="Vercel Logo"
          className={classN}
          width={50}
          height={50}
          priority
        />
      </div>
      <div>
        <p>{desc}</p>
      </div>
    </div>
  );
};
