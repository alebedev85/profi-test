import React from "react";
import { Button } from "@mui/material";

import styles from "./ReportData.module.scss";

export default function ReportData() {
  return (
    <div className={styles.data}>
      <Button>Загрузить данные из csv</Button>
      <Button>Изменить данные</Button>
      <Button>Очистить</Button>
    </div>
  );
}
