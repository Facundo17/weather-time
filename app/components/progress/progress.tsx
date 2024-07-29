import React from "react";

interface ProgressValue {
  current: number;
}

export const ProgressBar: React.FC<ProgressValue> = ({ current }) => {
  return <progress value={current} max={100} />;
};
