import { Navigate, Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import { useAppSelector } from "../../redux/store";
import { authSelector } from "../../redux/slices/authSlice";

import styles from "./PageLayout.module.scss";

function PageLayout() {
  const { isAuth } = useAppSelector(authSelector);
  const location = useLocation();
  return isAuth ? (
    <div className={styles.page}>
      <Sidebar />
      <div className={styles.content}>
        <Profile />
        <div>{<Outlet />}</div>
      </div>
    </div>
  ) : (
    <Navigate state={{ from: location }} to="/login" replace />
  );
}

export default PageLayout;
