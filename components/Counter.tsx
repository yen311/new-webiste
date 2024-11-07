import React, { useState, useEffect } from "react";

interface Props {
  date: Date;
  color: string;
}

export const Counter: React.FC<Props> = ({ date, color }) => {
  const [number, setNumber] = useState<string>();
  const currentNumber = () => {
    const secOfYear = 60 * 60 * 24 * 365;
    setNumber(((Date.now() - date.getTime()) / 1000 / secOfYear).toFixed(8));
  };
  useEffect(() => {
    const time = setInterval(() => currentNumber(), 1);
    return () => {
      clearInterval(time);
    };
  }, []);
  return <span style={{ color: color }}>{number}</span>;
};
