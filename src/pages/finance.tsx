import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/appBar";
import { employeeList } from "../utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
const drawerWidth = 240;

const Finance: FC = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "");
  const navigate = useNavigate();
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
          <HomeIcon sx={{ cursor: "pointer" }} onClick={() => navigate("/")} />
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            /&nbsp;{path}
          </Typography>
        </Box>
        <Typography
          variant="h4"
          sx={{ color: "#0d47a1", mb: 3, fontWeight: 600 }}
        >
          Employees Account Details
        </Typography>

        <TableContainer
          component={Paper}
          sx={{ borderRadius: 3, boxShadow: 3 }}
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
              {employeeList.map((task: any) => {
                const totalSalary =
                  task.salaryDetails?.reduce(
                    (total: number, entry: any) => total + Number(entry.salary),
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
                        color={task.account.accountNo ? "primary" : "success"}
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
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Finance;
