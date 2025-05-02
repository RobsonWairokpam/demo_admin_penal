import { FC } from "react";
import Navbar from "../../components/appBar";
import { employeeList } from "../../utils";
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
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const EmployeeDasboard: FC = () => {
  const employeeId = localStorage.getItem("employeeId");
  const employee = employeeList.find((item) => item.id === Number(employeeId));
  console.log(employee, "iofugierhgoeg");
  const navigate= useNavigate()
  return (
    <>
      <Navbar />
      <Box
        component={"div"}
        padding={4}
        sx={{
          width: "90%",
          margin: "auto",
          backgroundColor: "#E8E8E8",
          marginTop: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Typography variant="h5">Leave List</Typography>
          <Button variant="contained" onClick={() => {navigate(`/applyLeave/${employeeId}`)}}>
            Apply Leave
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }} align="center">From</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">To</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">Reason</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">Duration</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">Is Approved</TableCell>

              </TableRow>
            </TableHead>
            {/* <TableBody>
              {employee?.leaves.map((task: any, index: number) => (
                <TableRow key={index}>
                  <TableCell align="center">{task?.from}</TableCell>
                  <TableCell align="center">{task?.to}</TableCell>
                  <TableCell align="center">{task?.purpose}</TableCell>
                  <TableCell align="center">{task?.duration}</TableCell>
                  <TableCell align="center">{task?.isApproved?"Approved":"Not Approved"}</TableCell>

                </TableRow>
              ))}
            </TableBody> */}
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default EmployeeDasboard;
