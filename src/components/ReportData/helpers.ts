import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { DataType } from "assets/data/DATA";
import { AppDispatch } from "../../redux/store";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export const ImportData = (
  e: React.ChangeEvent<HTMLInputElement>,
  dispatch: AppDispatch,
  setData: ActionCreatorWithPayload<DataType>
) => {
  if (
    e.target.files != null &&
    e.target.files[0].name.split(".")[1] === "xlsx"
  ) {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target?.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      dispatch(setData(parsedData as DataType));
    };
  } else {
    alert("Неправильный формат файла");
    console.log("Неправильный формат файла");
  }
};

export const ExportData = (data: DataType | null) => {
  if (data) {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });
    saveAs(blob, `New file.xlsx`);
  }
};
