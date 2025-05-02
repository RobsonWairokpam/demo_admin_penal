import { FC, useState } from "react";
import Navbar from "../components/appBar";
import {
  Box,
  Button,
  Card,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddEmployee: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [jobRole, setJobRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("employeeList", name, email, role,jobRole);

    navigate("/adminDashboard");
  };
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
        <Box
          component="div"
          sx={{
            display: "flex",
            width: "100%",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Card
            sx={{
              width: { xs: "80%", md: "60%", backgroundColor: "primary.light" },
            }}
          >
            <Typography padding={2} variant="h5">
              New Employee
            </Typography>
            <Box
              component="form"
              onSubmit={() => handleSubmit()}
              p={5}
            >
              <Stack spacing={3}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Role"
                  variant="outlined"
                  fullWidth
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
                  <TextField
                  label="Job Role"
                  variant="outlined"
                  fullWidth
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                />

                <Button type="submit" variant="contained" fullWidth>
                  submit
                </Button>
              </Stack>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default AddEmployee;
