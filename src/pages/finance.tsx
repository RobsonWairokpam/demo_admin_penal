import {
  Box,
  Button,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/appBar";
import { employeeList } from "../utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
const drawerWidth = 240;

const Finance: FC = () => {
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
    <Box
      sx={{
        display: "flex",
        // backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        // width: "100%",
      }}
    >
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
          component={"div"}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#0d47a1", mb: 3, fontWeight: 600 }}
          >
            Employees Account Details
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

          {/* <Input

          size="small"
            placeholder="Search by name, phone or email"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery("");
              setSearchQuery(e.target.value);
            }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            }
            sx={{
              mx: { xs: 0, sm: 0, md: 4, lg: 4 },
              mb: 3,
              width: { xs: "80%", sm: "80%", md: "40vh", lg: "40vh" },
            }}
          /> */}
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            borderRadius: 3,
            boxShadow: 3,
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
          <Table size="small">
            <TableHead sx={{ backgroundColor: "#e3f2fd" }}>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", color: "#0d47a1" }}
                >
                  Employee Name
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", color: "#0d47a1" }}
                >
                  Account Number
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", color: "#0d47a1" }}
                >
                  Bank Name
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", color: "#0d47a1" }}
                >
                  Branch
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", color: "#0d47a1" }}
                >
                  Total Paid Salary
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", color: "#0d47a1" }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {searchQuery ? (
                <>
                  {filter.map((task: any) => {
                    const totalSalary =
                      task.salaryDetails?.reduce(
                        (total: number, entry: any) =>
                          total + Number(entry.salary),
                        0
                      ) ?? 0;

                    return (
                      <TableRow
                        key={task.id}
                        sx={{
                          "&:hover": { backgroundColor: "#f1f8ff" },
                        }}
                      >
                        <TableCell align="center" sx={{ fontWeight: 500 }}>
                          {task.name}
                        </TableCell>
                        <TableCell align="center">
                          {task.account.accountNo ?? "-"}
                        </TableCell>
                        <TableCell align="center">
                          {task.account.bankName ?? "-"}
                        </TableCell>
                        <TableCell align="center">
                          {task.account.branch ?? "-"}
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 500 }}>
                          ₹{totalSalary.toLocaleString("en-IN")}
                        </TableCell>
                        <TableCell align="center">
                          <Button
                            variant="contained"
                            size="small"
                            color={
                              task.account.accountNo ? "primary" : "success"
                            }
                            onClick={() =>
                              navigate(
                                task.account.accountNo
                                  ? `/updateAccount/${task.id}`
                                  : `/addAccount/${task.id}`
                              )
                            }
                            sx={{
                              textTransform: "capitalize",
                              fontWeight: 500,
                              px: 2,
                              minWidth: 80,
                            }}
                          >
                            {task.account.accountNo ? "Update" : "Add"}
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </>
              ) : (
                <>
                  {" "}
                  {paginatedEmployees.map((task: any) => {
                    const totalSalary =
                      task.salaryDetails?.reduce(
                        (total: number, entry: any) =>
                          total + Number(entry.salary),
                        0
                      ) ?? 0;

                    return (
                      <TableRow
                        key={task.id}
                        sx={{
                          "&:hover": { backgroundColor: "#f1f8ff" },
                        }}
                      >
                        <TableCell align="center" sx={{ fontWeight: 500 }}>
                          {task.name}
                        </TableCell>
                        <TableCell align="center">
                          {task.account.accountNo ?? "-"}
                        </TableCell>
                        <TableCell align="center">
                          {task.account.bankName ?? "-"}
                        </TableCell>
                        <TableCell align="center">
                          {task.account.branch ?? "-"}
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 500 }}>
                          ₹{totalSalary.toLocaleString("en-IN")}
                        </TableCell>
                        <TableCell align="center">
                          <Button
                            variant="contained"
                            size="small"
                            color={
                              task.account.accountNo ? "primary" : "success"
                            }
                            onClick={() =>
                              navigate(
                                task.account.accountNo
                                  ? `/updateAccount/${task.id}`
                                  : `/addAccount/${task.id}`
                              )
                            }
                            sx={{
                              textTransform: "capitalize",
                              fontWeight: 500,
                              px: 2,
                              minWidth: 80,
                            }}
                          >
                            {task.account.accountNo ? "Update" : "Add"}
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
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

export default Finance;
