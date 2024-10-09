import { Avatar } from "@mui/material";

import styles from "./ProfileName.module.scss";

export default function ProfileName() {
  return (
    <div className={styles.profileName}>
      <Avatar className={styles.avatar} src="/broken-image.jpg" />
      <p className={styles.name}>Иванов И.И.</p>
    </div>
  );
}
