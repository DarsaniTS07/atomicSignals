import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { Avatar, Box, Button, IconButton, Switch, Typography } from "@mui/material";
import profile from "../../assets/profile.jpeg";
import Speedometer from "../../assets/Speedometer.png";
import LetterAvatars from "../../atoms/LetterAvatar";

// Define your column structure
const columns = [
  { id: "Name", label: "Name", minWidth: 180, hasProfile: true },
  { id: "Designation", label: "Designation", minWidth: 160 },
  { id: "Department", label: "Department", minWidth: 150 },
  { id: "Signals", label: "Signals", minWidth: 140 },
  { id: "Overall Performance", label: "Overall Performance", minWidth: 170 },
  { id: "Reporting to", label: "Reporting To", minWidth: 160, hasAvatar: true },
  { id: "Role", label: "Role", minWidth: 120 },
  { id: "Email", label: "Email", minWidth: 210 },
  { id: "Experience", label: "Experience", minWidth: 120 },
  { id: "Status", label: "Status", minWidth: 100, isSwitch: true },
  {
    id: "Actions",
    label: "Actions",
    minWidth: 175,
    StickyRight: true,
    isActions: true,
    align: "center",
  },
];

const TableContent = ({ rows }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ height: '74vh', overflow: 'scroll',scrollbarWidth:'none' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    position: column.StickyRight ? "sticky" : "static",
                    right: column.StickyRight ? 0 : "auto",
                    backgroundColor: column.StickyRight ? "#FFFFFF" : "inherit",
                    zIndex: column.StickyRight ? 1 : "auto",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody >
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <TableRow
                  tabIndex={-1}
                  key={row.id || row.uniqueIdentifier || rowIndex}
                  sx={{ borderBottom: "none" ,scrollbarWidth:'none',msScrollbarWidth:'none'}}
                >
                  {columns.map((column) => {
                    const value = row[column.id.toLowerCase().replace(" ", "")]; // Adjusting to match your row keys
                    return (
                      <TableCell
                        tabIndex={-1}
                        key={`${row.id || row.uniqueIdentifier || rowIndex}-${column.id}`} // Ensure this key is unique
                        style={{
                          padding: "8px",
                          paddingLeft: "15px",
                          position: column.StickyRight ? "sticky" : "static",
                          right: column.StickyRight ? 0 : "auto",
                          backgroundColor: column.StickyRight ? "#FFFFFF" : "inherit",
                          zIndex: column.StickyRight ? 1 : "auto",
                          borderBottom: "none",
                          scrollbarWidth:'none',
                          msScrollbarWidth:'none',
                        }}
                      >
                        {column.hasAvatar ? (
                          <Box display="flex">
                            <Avatar sx={{ width: 24, height: 24, mr: 1 }} src={profile} />
                            <Typography>{row.reportingTo}</Typography>
                          </Box>
                        ) : column.hasProfile ? (
                          <Box display="flex">
                            <Avatar sx={{ width: 24, height: 24, mr: 1 }} src={profile} />
                            {value}
                          </Box>
                        ) : column.id === "Signals" ? (
                          <LetterAvatars />
                        ) : column.id === "Overall Performance" ? (
                          <Box display="flex" alignItems="center" justifyContent="center">
                            <img src={Speedometer} alt="Speedometer" style={{ width: 60, height: 40 }} />
                            {value}
                          </Box>
                        ) : column.isSwitch ? (
                          <Switch checked={value === "Active"} />
                        ) : column.id === 'Experience' ? (<Typography>3 Yrs 4 Mon</Typography>): column.isActions ? (
                          <>
                            <Button
                              variant="contained"
                              size="small"
                              sx={{
                                ml: 1,
                                color: "#FFFFFF",
                                textTransform: "none",
                              }}
                            >
                              Add Feedback
                            </Button>
                            <IconButton color="primary" sx={{ marginLeft: "7px" }}>
                              <ModeEditOutlineOutlinedIcon />
                            </IconButton>
                          </>
                        ) : (
                          value // Directly display the cell value
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ flexShrink: 0, }} 
      />
    </Paper>
  );
};

export default TableContent;
