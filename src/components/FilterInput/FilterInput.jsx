import React from "react";

import styles from "./FilterInput.module.scss";

export default function FilterInput({ label, inputText }) {
  return (
    <div className={styles.filterInput}>
      <p className={styles.label}>{label}</p>
      <input
        className={styles.input}
        size={inputText.length}
        type="text"
        disabled
        placeholder={`${inputText}`}
      />
    </div>
  );
}
