import Navigation from "../components/Navigation/Navigation";
import { Button } from "@mui/material";
import styles from "./PageLayout.module.scss";
import SmsIcon from '@mui/icons-material/Sms';

function PageLayout({ children }) {
  return (
    <div className={styles.page}>
      <div className={styles.sidebar}>
        <Navigation />
        <Navigation />
        <Button variant="contained" startIcon={<SmsIcon />}>Настройка</Button>
      </div>
      <div className={styles.profile}>profile</div>
      <div className={styles.children}>{children}</div>
    </div>
  );
}

export default PageLayout;
