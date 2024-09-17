import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";

import styles from "./PageLayout.module.scss";

function PageLayout({ children }) {
  return (
    <div className={styles.page}>
      <Sidebar className={styles.sidebar} />
      <div className={styles.content}>
        <Profile className={styles.profile} />
        <div className={styles.children}>111{children}</div>
      </div>
    </div>
  );
}

export default PageLayout;
