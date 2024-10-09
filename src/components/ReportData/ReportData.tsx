import { Button } from "@mui/material";
import InputIcon from "@mui/icons-material/Input";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./ReportData.module.scss";

export default function ReportData() {
  return (
    <div className={styles.data}>
      <div className={styles.left}>
        <Button startIcon={<InputIcon />} className={styles.button}>
          Загрузить данные из csv
        </Button>
        <Button startIcon={<CreateNewFolderIcon />} className={styles.button}>
          Изменить данные
        </Button>
      </div>
      <div className={styles.right}>
        <Button endIcon={<CloseIcon />} className={styles.button}>
          Очистить
        </Button>
      </div>
    </div>
  );
}
