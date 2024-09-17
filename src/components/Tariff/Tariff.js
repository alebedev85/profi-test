import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import styles from "./Tariff.module.scss";

export default function Tariff() {
  return (
    <div className={styles.tariff}>
      <CalendarMonthIcon />
      <p className={styles.tariffText}>Тариф до 15.04.2024</p>
    </div>
  );
}
