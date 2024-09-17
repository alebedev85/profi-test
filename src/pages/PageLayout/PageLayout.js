import styles from "./PageLayout.module.scss";

import Sidebar from "../Sidebar/Sidebar";

function PageLayout({ children }) {
  return (
    <div className={styles.page}>
      <Sidebar />
      <div className={styles.profile}>profile</div>
      <div className={styles.children}>{children}</div>
    </div>
  );
}

export default PageLayout;
