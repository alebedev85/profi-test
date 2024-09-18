import React from "react";
import { Button } from "@mui/material";
import FilterInput from "../FilterInput/FilterInput";
import FilterSelect from "../FilterSelect/FilterSelect";
import UploadFileIcon from '@mui/icons-material/UploadFile';

import styles from "./ReportFilter.module.scss";

export default function ReportFilter() {
  return (
    <div className={styles.filter}>
      <div className={styles.inputs}>
        <FilterInput label="Баркод" inputText="44656546546456456546" />
        <FilterInput label="Артикул" inputText="44656546546456456546" />
        <FilterInput label="Размер" inputText="44" />
        <FilterSelect label="Категория" />
      </div>
      <div className={styles.buttons}>
        <Button className={styles.formButton} variant="contained">
          Сформировать
        </Button>
        <Button
          className={styles.exportButton}
          variant="contained"
          startIcon={<UploadFileIcon />}
        >
          Экспорт
        </Button>
      </div>
    </div>
  );
}
