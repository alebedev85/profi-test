import styles from "./FilterSelect.module.scss";

interface IFilterSelectProps {
  label: string;
}

export default function FilterSelect({ label }: IFilterSelectProps) {
  return (
    <div className={styles.filterInput}>
      <p className={styles.label}>{label}</p>
      <select className={styles.select} name="category" id="category-select">
        <option value="">Джинсы</option>
        <option value="">Брюки</option>
        <option value="">Кардиган</option>
        <option value="">Брюки 1</option>
      </select>
    </div>
  );
}
