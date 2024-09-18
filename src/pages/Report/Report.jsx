import React from "react";
import { Button } from "@mui/material";

import styles from "./Report.module.scss";

export default function Report() {
  return (
    <div className={styles.report}>
      <div className={styles.reportParams}>
        <div className={styles.headline}>
          <h2 className={styles.title}>
            Остатки сформированы на 01.04.2023 г.
          </h2>
          <Button>Инструкция</Button>
        </div>
        <div className={styles.filter}>
          <div className={styles.inputs}>
            <div className={styles.filterInput}>
              <p className={styles.label}>Баркод</p>
              <input type="text" disabled placeholder="2312434324"/>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button>Сформировать</Button>
            <Button>Экспорт</Button>
          </div>
        </div>
        <div className={styles.data}>
          <Button>Загрузить данные из csv</Button>
          <Button>Изменить данные</Button>
          <Button>Очистить</Button>
        </div>
      </div>
      <div className={styles.table}>Таблица</div>
    </div>
  );
}
