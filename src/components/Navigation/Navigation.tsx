import React from "react";
import { Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className={styles.head}>
        <h2 className={styles.text}>
          <span className={styles.fin}>ФИН</span>
          <span className={styles.title}>Контроль</span>
        </h2>
        <Button
          className={styles.menuClose}
          size="small"
          variant="text"
          endIcon={<CloseIcon />}
        >
          Меню
        </Button>
      </div>
      <Button
        className={styles.button}
        variant="contained"
        startIcon={<SettingsIcon />}
      >
        Настройка
      </Button>
      <Button
        className={styles.button}
        variant="contained"
        startIcon={<EditNoteIcon />}
      >
        Внесение данных
      </Button>
      <Button
        className={styles.button}
        variant="contained"
        startIcon={<CollectionsBookmarkOutlinedIcon />}
      >
        Отчеты
      </Button>
      <Button
        className={styles.button}
        variant="contained"
        startIcon={<LibraryBooksOutlinedIcon />}
      >
        База знаний
      </Button>
    </div>
  );
}
