import React from "react";
import SupportBadge from "../ui/SupportBadge/SupportBadge";
import styles from "./Support.module.scss";

export default function Support() {
  return (
    <div className={styles.support}>
      <h2 className={styles.headline}>Техническая поддержка</h2>
      <div className={styles.info}>
        <SupportBadge
          label="Номер поддержки:"
          text="8 (999) 999 99 99"
          className={styles.phone}
        />
        <SupportBadge
          label="Почта поддержки:"
          text="pf1@werthesest.ru"
          className={styles.mail}
        />
        <SupportBadge
          label="Часы работы:"
          text="Пн - Пт с 9:00 до 19:00 мск"
          className={styles.time}
        />
      </div>
      <div className={styles.links}>
        <a className={styles.link} href={"/*"}>
          Пользовательское соглашение
        </a>
        <a className={styles.link} href={"/*"}>
          Политика конфиденциальности
        </a>
        <a className={styles.link} href={"/*"}>
          Юридическая информация
        </a>
        <a className={styles.link} href={"/*"}>
          Публичная оферта
        </a>
      </div>
    </div>
  );
}
