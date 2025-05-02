import { FC } from "react";
import {
 
  Button,
  Toolbar,
  
} from "@mui/material";
import Navbar from "../components/appBar";
import { employeeList } from "../utils";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, IconButton, Tooltip, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


const EmployeeList: FC = () => {
  function handleDelete(id: any): void {
    throw new Error("Function not implemented.");
  }

  function handleEdit(id: any): void {
    throw new Error("Function not implemented.");
  }

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
        <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2, mt: 3 }}>
  <Table sx={{ minWidth: 650 }} size="small" aria-label="employee table">
  <TableHead>
  <TableRow
    sx={{
      background: "linear-gradient(to right, #e0f7fa, #f8f9fa)",
      borderBottom: "2px solid #ccc",
    }}
  >
    {["Employee Name", "Email", "Job Role", "On Leave", "Action"].map((heading) => (
      <TableCell
        key={heading}
        align="center"
        sx={{
          fontWeight: "bold",
          color: "#2c3e50",
          textTransform: "uppercase",
          fontSize: 13,
          letterSpacing: 0.5,
          paddingY: 1.5,
        }}
      >
        {heading}
      </TableCell>
    ))}
  </TableRow>
</TableHead>
    <TableBody>
      {employeeList.map((task: any) => (
        <TableRow
          key={task.id}
          hover
          sx={{
            transition: "background 0.3s",
            "&:hover": { backgroundColor: "#f0f4f8" },
          }}
        >
          <TableCell align="center" sx={{ fontWeight: 500 }}>{task.name}</TableCell>
          <TableCell align="center">{task.email}</TableCell>
          <TableCell align="center">{task.jobRole}</TableCell>
          <TableCell
            align="center"
            sx={{
              fontWeight: 600,
              color: task.onLeave ? "#e74c3c" : "#27ae60",
            }}
          >
            {task.onLeave ? "Yes" : "No"}
          </TableCell>
          <TableCell align="center">
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
              <Tooltip title="Edit">
                <IconButton color="primary" onClick={() => handleEdit(task.id)}>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton color="error" onClick={() => handleDelete(task.id)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
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
