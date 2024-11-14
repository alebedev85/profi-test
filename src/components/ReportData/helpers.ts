import * as XLSX from "xlsx";
import { DataType } from "assets/data/DATA";
import { useAppDispatch } from "redux/store";
import { setData } from "redux/slices/dataSlice";

export const ImportData = (e: React.ChangeEvent<HTMLInputElement>) => {
  const dispatch = useAppDispatch();
  if (e.target.files != null) {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target?.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      // console.log(parsedData);
      dispatch(setData(parsedData as DataType))
    };
  }
};