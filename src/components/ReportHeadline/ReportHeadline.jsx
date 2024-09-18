import React from "react";
import { Button } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

import styles from "./ReportHeadline.module.scss";

export default function ReportHeadline() {
  return (
    <div className={styles.headline}>
      <h2 className={styles.title}>Остатки сформированы на 01.04.2023 г.</h2>
      <Button
        variant="contained"
        className={styles.button}
        startIcon={<LibraryBooksOutlinedIcon />}
      >
        Инструкция
      </Button>
    </div>
  );
}
