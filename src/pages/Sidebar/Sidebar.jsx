import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Support from "../../components/Support/Support";
import { Button } from "@mui/material";
import SmsIcon from '@mui/icons-material/Sms';

import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Navigation />
      <Support />
      <Button
        className={styles.button}
        variant="contained"
        startIcon={<SmsIcon />}
      >
        Настройка
      </Button>
    </div>
  );
}
