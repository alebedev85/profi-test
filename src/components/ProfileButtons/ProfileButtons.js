import React from "react";
import { Button } from "@mui/material";

import styles from "./ProfileButtons.module.scss";

export default function ProfileButtons() {
  return (
    <div className={styles.buttons}>
      <Button className={styles.Profilebutton} variant="outlined"> Выйти</Button>
      <Button className={styles.AboutUsButton} variant="contained">О нас →</Button>
    </div>
  );
}
