import { FC, useState } from "react";
import Navbar from "../components/appBar";
import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { employeeList } from "../utils";

const RequestedLeaveList: FC = () => {
  const employeeId = localStorage.getItem("employeeId");
  const employee = employeeList.find((item) => item.id === Number(employeeId));

  const navigate = useNavigate();

  return (
    <Box
      sx={{ display: "flex", backgroundColor: "primary.main", height: "100%" }}
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
        
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 2,
            }}
          >
            <Typography variant="h5" color="white">Leave List</Typography>
            <Button
              variant="contained"
              onClick={() => {
                navigate(`/applyLeave/${employeeId}`);
              }}
            >
              Apply Leave
            </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }} align="center">
                    Date
                  </TableCell>

                  <TableCell sx={{ fontWeight: "bold" }} align="center">
                    Reason
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="center">
                    Duration
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="center">
                    Is Approved
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employee?.requestLeave.map((task: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell align="center">{task?.date}</TableCell>
                    <TableCell align="center">{task?.reason}</TableCell>
                    <TableCell align="center">{task?.duration}</TableCell>
                    <TableCell align="center">{task?.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </Box>
    </Box>
  );
};

export default RequestedLeaveList;
