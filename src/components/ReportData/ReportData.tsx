import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputIcon from "@mui/icons-material/Input";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import CloseIcon from "@mui/icons-material/Close";
import { ImportData, ExportData } from "./helpers";
import styles from "./ReportData.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setData, dataSelector } from "../../redux/slices/dataSlice";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function ReportData() {
  const { data } = useAppSelector(dataSelector);
  const dispatch = useAppDispatch();
  
  return (
    <div className={styles.data}>
      <div className={styles.left}>
        <Button
          startIcon={<InputIcon />}
          className={styles.button}
          component="label"
        >
          Загрузить данные из xls
          <VisuallyHiddenInput type="file" onChange={(e) => ImportData(e, dispatch, setData)} multiple />
        </Button>
        <Button
          startIcon={<CreateNewFolderIcon />}
          className={styles.button}
          onClick={(e) => ExportData(data)}
        >
          Сохранить данные
        </Button>
      </div>
      <div className={styles.right}>
        <Button endIcon={<CloseIcon />} className={styles.button}>
          Очистить
        </Button>
      </div>
    </div>
  );
}
