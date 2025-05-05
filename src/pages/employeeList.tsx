import { FC, useEffect, useState } from "react";
import {
  Box,
  Button,
  Toolbar,
  TableContainer,
  TableHead,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  TablePagination,
  TextField,
  InputAdornment,
} from "@mui/material";
import Navbar from "../components/appBar";
import { employeeList } from "../utils";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

const drawerWidth = 240;
const EmployeeList: FC = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "");
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState(employeeList);
  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // let filteredEmployees

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
    <Box sx={{ display: "flex" }}>
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 0 },
            mb: 3,
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            textAlign={{ xs: "center", sm: "left" }}
            sx={{ hidden: { xs: "none", sm: "block" } }}
          >
            Employee List
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search by name or phone or email"
              size="small"
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
            <Box component={"div"} sx={{ width: "50%" }}>
              <Button
                variant="contained"
                onClick={() => navigate("/addEmployee")}
                sx={{
                  backgroundColor: "#195a63",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 500,
                  px: 3,
                  py: 1,
                  borderRadius: "8px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": {
                    backgroundColor: "#287177",
                  },
                }}
              >
                Add Employee
              </Button>
            </Box>
          </Box>
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            scrollX: "auto",
            // overflowX: "auto",
            // minWidth: 700,
            width: {
              xs: "40vh",
              sm: "100%",
              md: "100%",
              lg: "100%",
            },
          }}
        >
          <Table
            sx={{ minWidth: 650 }}
            size="small"
            aria-label="employee table"
          >
            <TableHead>
              <TableRow sx={{ backgroundColor: "#e9f1f4" }}>
                {[
                  "Id",
                  "Employee Name",
                  "Email",
                  "Job Role",
                  "On Leave",
                  "Date of Joining",
                  "Action",
                ].map((header) => (
                  <TableCell
                    key={header}
                    align="center"
                    sx={{ fontWeight: 600, color: "#333", py: 1.5 }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {searchQuery ? (
                <>
                  {filter.map((employee: any, index: number) => (
                    <TableRow
                      key={employee.id}
                      sx={{
                        backgroundColor:
                          index % 2 === 0 ? "#ffffff" : "#f9f9f9",
                        transition: "background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "#eef6f8",
                        },
                      }}
                    >
                      <TableCell align="center">{employee.id}</TableCell>
                      <TableCell align="center">{employee.name}</TableCell>
                      <TableCell align="center">{employee.email}</TableCell>
                      <TableCell align="center">{employee.jobRole}</TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          color: employee.onLeave ? "#d32f2f" : "#388e3c",
                          fontWeight: 500,
                        }}
                      >
                        {employee.onLeave ? "Yes" : "No"}
                      </TableCell>
                      <TableCell align="center">
                        {employee.dateOfJoining}
                      </TableCell>

                      <TableCell align="center">
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            backgroundColor: "#195a63",
                            color: "#fff",
                            textTransform: "none",
                            fontWeight: 500,
                            px: 2.5,
                            py: 0.5,
                            borderRadius: "6px",
                            "&:hover": {
                              backgroundColor: "#287177",
                            },
                          }}
                          onClick={() =>
                            navigate(`/employeeDetails/${employee.id}`)
                          }
                        >
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              ) : (
                <>
                  {paginatedEmployees.map((employee: any, index: number) => (
                    <TableRow
                      key={employee.id}
                      sx={{
                        backgroundColor:
                          index % 2 === 0 ? "#ffffff" : "#f9f9f9",
                        transition: "background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "#eef6f8",
                        },
                      }}
                    >
                      <TableCell align="center">{employee.id}</TableCell>
                      <TableCell align="center">{employee.name}</TableCell>
                      <TableCell align="center">{employee.email}</TableCell>
                      <TableCell align="center">{employee.jobRole}</TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          color: employee.onLeave ? "#d32f2f" : "#388e3c",
                          fontWeight: 500,
                        }}
                      >
                        {employee.onLeave ? "Yes" : "No"}
                      </TableCell>
                      <TableCell align="center">
                        {employee.dateOfJoining}
                      </TableCell>

                      <TableCell align="center">
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            backgroundColor: "#195a63",
                            color: "#fff",
                            textTransform: "none",
                            fontWeight: 500,
                            px: 2.5,
                            py: 0.5,
                            borderRadius: "6px",
                            "&:hover": {
                              backgroundColor: "#287177",
                            },
                          }}
                          onClick={() =>
                            navigate(`/employeeDetails/${employee.id}`)
                          }
                        >
                          View
                        </Button>
                      </TableCell>
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

export default EmployeeList;
