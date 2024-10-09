import styles from "./FilterInput.module.scss";

interface IFilterInputProps {
  label: string;
  inputText: string;
}

export default function FilterInput({ label, inputText }: IFilterInputProps) {
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
