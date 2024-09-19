import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";

import styles from "./PageLayout.module.scss";

function PageLayout({ children }) {
  return (
    <div className={styles.page}>
      <Sidebar />
      <div className={styles.content}>
        <Profile />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default PageLayout;
