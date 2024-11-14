import { TableContainer } from "@mui/material";
import { Table } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableRow } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import { TableFooter } from "@mui/material";
import { dataSelector } from "../../redux/slices/dataSlice";
import { useAppSelector } from "../../redux/store";

import styles from "./ReportTable.module.scss";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    // color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  [`&.${tableCellClasses.footer}`]: {
    fontSize: 19,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ReportTable() {
  const { data } = useAppSelector(dataSelector);
  return (
    <TableContainer sx={{ maxHeight: 500 }} className={styles.tableContainer}>
      <Table
        stickyHeader
        className={styles.table}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Баркод</StyledTableCell>
            <StyledTableCell align="left">Бренд</StyledTableCell>
            <StyledTableCell align="left">Название</StyledTableCell>
            <StyledTableCell align="left">Колличество</StyledTableCell>
            <StyledTableCell align="left">Цена</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data ? (
            data.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.barcode}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.product_brand}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.product_name}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.product_quantity}
                </StyledTableCell>
                <StyledTableCell align="left">{row.price}</StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <></>
          )}
        </TableBody>
        <TableFooter className={styles.footer}>
          <TableRow>
            <StyledTableCell>Итог:</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left">
              {data
                ? data.reduce((sum, row) => sum + row.product_quantity, 0)
                : 0}
            </StyledTableCell>
            <StyledTableCell align="left">
              {data ? data.reduce((sum, row) => sum + row.price, 0) : 0}
            </StyledTableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
