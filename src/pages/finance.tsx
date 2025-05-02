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
import { FC,   } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/appBar";
import { employeeList } from "../utils";

const Finance: FC = () => {
    const navigate = useNavigate();
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
        <Typography variant="h5" color="white" padding={2}>Employees Account Details</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  Employee Name
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  Account Number
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  Bank Name
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  Branch
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  Total Paid Salary
                </TableCell>

                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employeeList.map((task: any, index: number) => (
                <TableRow key={task.id} draggable>
                  <TableCell align="center">{task.name}</TableCell>
                  <TableCell align="center">
                    {task.account.accountNo ?? "-"}
                  </TableCell>
                  <TableCell align="center">
                    {task.account.bankName ?? "-"}
                  </TableCell>
                  <TableCell align="center">
                    {task.account.branch ?? "-"}
                  </TableCell>
                  <TableCell align="center">
                    ₹
                    {task.salaryDetails?.reduce(
                      (total: number, entry: any) =>
                        total + Number(entry.salary),
                      0
                    ) ?? 0}
                  </TableCell>
                  <TableCell align="center">
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      {task.account.accountNo ? (
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => {navigate(`/updateAccount/${task.id}`)}}
                        >
                          Update
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => {navigate(`/addAccount/${task.id}`)}}
                        >
                          Add
                        </Button>
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Finance;
