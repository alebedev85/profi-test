import { Button } from "@mui/material";
import { useAppDispatch } from "../../redux/store";
import { logOut } from "../../redux/slices/authSlice";

import styles from "./ProfileButtons.module.scss";

export default function ProfileButtons() {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.buttons}>
      <Button className={styles.Profilebutton} variant="outlined" onClick={() => dispatch(logOut())}> Выйти</Button>
      <Button className={styles.AboutUsButton} variant="contained">О нас →</Button>
    </div>
  );
}
