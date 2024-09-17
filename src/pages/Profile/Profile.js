import React from "react";
import ProfileName from "../../components/ProfileName/ProfileName";
import Tariff from "../../components/Tariff/Tariff";
import TariffButtons from "../../components/TariffButtons/TariffButtons";

import styles from "./Profile.module.scss";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div>
        <ProfileName />
        <Tariff />
      </div>
      <TariffButtons />
    </div>
  );
}
