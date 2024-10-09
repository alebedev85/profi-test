import { ReactNode } from "react";
import styles from "./CustomContainer.module.scss";

interface ICustomContainerProps {
  children: ReactNode;
}

export default function CustomContainer({ children }: ICustomContainerProps) {
  return <div className={styles.container}>{children}</div>;
}
