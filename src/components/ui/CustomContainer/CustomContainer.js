import styles from "./CustomContainer.module.scss";

export default function CustomContainer({children}) {
  return <div className={styles.container}>{children}</div>;
}
