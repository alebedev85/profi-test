import ReportHeadline from "../../components/ReportHeadline/ReportHeadline";
import ReportFilter from "../../components/ReportFilter/ReportFilter";
import ReportData from "../../components/ReportData/ReportData";
import ReportTable from "../../components/ReportTable/ReportTable";

import styles from "./Report.module.scss";

export default function Report() {
  return (
    <div className={styles.report}>
      <div className={styles.reportParams}>
        <ReportHeadline />
        <ReportFilter/>
        <ReportData/>
      </div>
      <div className={styles.table}>
        <ReportTable/>
      </div>
    </div>
  );
}
