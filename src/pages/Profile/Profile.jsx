import React from "react";
import ProfileName from "../../components/ProfileName/ProfileName";
import Tariff from "../../components/Tariff/Tariff";
import ProfileButtons from "../../components/ProfileButtons/ProfileButtons";

import styles from "./Profile.module.scss";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.profileText}>
        <ProfileName />
        <Tariff />
      </div>
      <ProfileButtons />
    </div>
  );
}
