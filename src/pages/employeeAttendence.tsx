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
  TablePagination,
  TextField,
  InputAdornment,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { employeeList } from "../utils";
import Navbar from "../components/appBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import { useLocation, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

//   import { employeeList } from "../data/employeeList"; // Adjust import path
const drawerWidth = 240;
const EmployeeAttendance: FC = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "");
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState(employeeList);
  const allDates = Array.from(
    new Set(
      employeeList.flatMap((emp: any) =>
        emp.attendance.map((entry: any) => entry.date)
      )
    )
  ).sort();

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    console.log("searchQuery", searchQuery);
    setFilter([]);
    const filteredEmployees = employeeList.filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (employee.phone && employee.phone.includes(searchQuery)) ||
        (employee.email && employee.email.includes(searchQuery))
    );
    setFilter(filteredEmployees);
  }, [searchQuery]);

  const paginatedEmployees = employeeList.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: {
            xs: 0,
            sm: 0,
            // [`@media (min-width:750px)`]: 0, // custom breakpoint applied here
            // [`@media (min-width: 600px) and (max-width: 900px)`]: 0, // Range between 634px and 867px`, // Range between 634px and 867px
            md: `${drawerWidth}px`,
            lg: `${drawerWidth}px`,
          },
        }}
      >
        <Toolbar />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 4 }}>
          <ArrowBackIcon
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
          <HomeIcon
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/adminDashboard")}
          />
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            /&nbsp;{path}
          </Typography>
        </Box>
        <Box
          sx={{
            mb: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Employee Attendance
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Search by name or phone or email"
            size="small"
            sx={{
              mx: { xs: 0, sm: 0, md: 4, lg: 4 },
              mb: 3,
              width: { xs: "80%", sm: "80%", md: "40vh", lg: "40vh" },
            }}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery("");
              setSearchQuery(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            borderRadius: 3,
            boxShadow: 3,
            scrollX: "auto",
            width: {
              xs: "40vh",
              sm: "100%",
              md: "100%",
              lg: "100%",
            },
          }}
        >
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", bgcolor: "#e3f2fd" }}
                >
                  Name
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", bgcolor: "#e3f2fd" }}
                >
                  Email
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", bgcolor: "#e3f2fd" }}
                >
                  Role
                </TableCell>
                {allDates.map((date) => (
                  <TableCell
                    key={date}
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      bgcolor: "#e3f2fd",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {date}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {searchQuery ? (
                <>
                  {filter.map((emp: any) => (
                    <TableRow
                      key={`row-${emp.id}`}
                      sx={{
                        "&:hover": { backgroundColor: "#f0f9ff" },
                        minWidth: 120,
                      }}
                    >
                      <TableCell
                        key={`name-${emp.id}`}
                        align="center"
                        sx={{ fontWeight: 500, minWidth: 120 }}
                      >
                        {emp.name}
                      </TableCell>
                      <TableCell
                        key={`email-${emp.id}`}
                        align="center"
                        sx={{ fontWeight: 500, minWidth: 120 }}
                      >
                        {emp.email}
                      </TableCell>
                      <TableCell
                        key={`role-${emp.id}`}
                        align="center"
                        sx={{ minWidth: 120 }}
                      >
                        {emp.jobRole}
                      </TableCell>
                      {allDates.map((date) => {
                        const record = emp.attendance.find(
                          (a: any) => a.date === date
                        );
                        let status = "-";
                        let color = "#757575";

                        if (record) {
                          if (record.status === "Present") {
                            status = "P";
                            color = "#2e7d32";
                          } else if (record.status === "Absent") {
                            status = "A";
                            color = "#d32f2f";
                          } else if (record.status === "Leave") {
                            status = "L";
                            color = "#f57c00";
                          }
                        }

                        return (
                          <TableCell
                            key={`${emp.id}-${date}`}
                            align="center"
                            sx={{ color, fontWeight: 500, minWidth: 120 }}
                          >
                            {status}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
                </>
              ) : (
                <>
                  {paginatedEmployees.map((emp: any) => (
                    <TableRow
                      key={`row-${emp.id}`}
                      sx={{
                        "&:hover": { backgroundColor: "#f0f9ff" },
                        minWidth: 120,
                      }}
                    >
                      <TableCell
                        key={`name-${emp.id}`}
                        align="center"
                        sx={{ fontWeight: 500, minWidth: 120 }}
                      >
                        {emp.name}
                      </TableCell>
                      <TableCell
                        key={`email-${emp.id}`}
                        align="center"
                        sx={{ fontWeight: 500, minWidth: 120 }}
                      >
                        {emp.email}
                      </TableCell>
                      <TableCell
                        key={`role-${emp.id}`}
                        align="center"
                        sx={{ minWidth: 120 }}
                      >
                        {emp.jobRole}
                      </TableCell>
                      {allDates.map((date) => {
                        const record = emp.attendance.find(
                          (a: any) => a.date === date
                        );
                        let status = "-";
                        let color = "#757575";

                        if (record) {
                          if (record.status === "Present") {
                            status = "P";
                            color = "#2e7d32";
                          } else if (record.status === "Absent") {
                            status = "A";
                            color = "#d32f2f";
                          } else if (record.status === "Leave") {
                            status = "L";
                            color = "#f57c00";
                          }
                        }

                        return (
                          <TableCell
                            key={`${emp.id}-${date}`}
                            align="center"
                            sx={{ color, fontWeight: 500, minWidth: 120 }}
                          >
                            {status}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          count={employeeList.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 15]}
          sx={{ mt: 2 }}
        />
      </Box>
    </Box>
  );
};

export default EmployeeAttendance;
