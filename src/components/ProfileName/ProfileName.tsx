import { Avatar } from "@mui/material";
import { useAppSelector } from "../../redux/store";
import { authSelector } from "../../redux/slices/authSlice";

import styles from "./ProfileName.module.scss";

export default function ProfileName() {
  const { user } = useAppSelector(authSelector);
  return (
    <div className={styles.profileName}>
      <Avatar className={styles.avatar} src="/broken-image.jpg" />
      <p className={styles.name}>{user?.username}</p>
    </div>
  );
}
