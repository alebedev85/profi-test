import React from "react";
import { Button } from "@mui/material";

import styles from "./TariffButtons.module.scss";

export default function TariffButtons() {
  return (
    <div className={styles.buttons}>
      <Button className={styles.button}>Выйти</Button>
      <Button className={styles.button}>О нас</Button>
    </div>
  );
}
