import { FC } from "react";
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
} from "@mui/material";
import Navbar from "../components/appBar";
import { employeeList } from "../utils";


const EmployeeList: FC = () => {
  return (
    <Box sx={{ display: "flex",backgroundColor:"primary.main" ,height:"100vh"}}>
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }} align="center">Employee Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">Email</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">Job Role</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">On Leave</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employeeList.map((task: any, index: number) => (
                <TableRow
                  key={task.id}
                  draggable
                 
                  
                >
                  <TableCell align="center">{task.name}</TableCell>
                  <TableCell align="center">{task.email}</TableCell>
                  <TableCell
                    align="center"
                    
                  >
                    {task.jobRole}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ color: task.onLeave ? "red" : "greed" }}
                  >
                    {task.onLeave ? "Yes" : "No"}
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
                      <Button
                        variant="contained"
                        size="small"
                      >
                        View
                      </Button>     
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

export default EmployeeList;
