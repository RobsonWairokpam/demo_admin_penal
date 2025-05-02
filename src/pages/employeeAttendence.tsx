import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Toolbar,
} from "@mui/material";
import { FC } from "react";
import { employeeList } from "../utils";
import Navbar from "../components/appBar";
//   import { employeeList } from "../data/employeeList"; // Adjust import path

const EmployeeAttendance: FC = () => {
  // Extract all unique dates from all employee attendance
  const allDates = Array.from(
    new Set(
      employeeList.flatMap((emp: any) =>
        emp.attendance.map((entry: any) => entry.date)
      )
    )
  ).sort();

  return (
    <Box
      sx={{ display: "flex", backgroundColor: "primary.main", height: "100vh" }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          // marginLeft: `${drawerWidth}px`,
        }}
      >
        <Toolbar />
        <Box component={"div"} padding={4} color={"white"}>
          <Typography variant="h4"> Employee Attendence</Typography>
        </Box>
        <TableContainer component={Paper} sx={{ maxWidth:"95%" }}>
          <Table size="small" sx={{scroll:"auto"}}>
            <TableHead>
              <TableRow>
              <TableCell sx={{ fontWeight: "bold" }} align="center">Name
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">Email
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">Role
                </TableCell>
                {allDates.map((date) => (
                  <TableCell sx={{ fontWeight: "bold" }} align="center">{date}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {employeeList.map((emp: any) => (
                <TableRow key={emp.id}>
                  <TableCell sx={{ fontWeight: "bold" }} align="center">{emp.name}</TableCell>
                  <TableCell align="center">{emp.email}</TableCell>
                  <TableCell align="center">{emp.jobRole}</TableCell>
                  {allDates.map((date) => {
                    const record = emp.attendance.find(
                      (a: any) => a.date === date
                    );
                    return (
                      <TableCell align="center">
                        {record
                          ? record.status === "Present"
                            ? "P"
                            : record.status === "Absent"
                            ? "A"
                            : "L"
                          : "-"}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default EmployeeAttendance;
