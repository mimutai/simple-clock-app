import Link from "next/link";
import React, { useEffect, useState } from "react";

import styles from "../styles/simple_clock.module.css";

const SimpleClockPage = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 200);
    return () => clearInterval(id);
  }, [time]);

  const onClickScreen = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    if (document.fullscreenElement === null) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }

    e.preventDefault();
  };

  return (
    <div
      className={styles.simple_clock_screen}
      onClick={(e) => onClickScreen(e)}
    >
      <div className={styles.text_group}>
        <div className={styles.time_text}>{Time2HMSString(time)}</div>
        <div className={styles.date_text}>{Time2MDWString(time)}</div>
      </div>
    </div>
  );
};

export default SimpleClockPage;

const Time2HMSString = (time: Date): string => {
  return (
    String(time.getHours()).padStart(2, "0") +
    " : " +
    String(time.getMinutes()).padStart(2, "0") +
    " : " +
    String(time.getSeconds()).padStart(2, "0")
  );
};

const Time2MDWString = (time: Date): string => {
  return (
    dayOfWeek[time.getDay()] +
    ", " +
    monthsOfYear[time.getMonth()] +
    " " +
    String(time.getDate()).padStart(2, "0")
  );
};

const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
