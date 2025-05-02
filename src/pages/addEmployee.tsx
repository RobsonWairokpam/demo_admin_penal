import { FC, useState } from "react";
import Navbar from "../components/appBar";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddEmployee: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("employeeList", name, email, role);

    navigate("/adminDashboard");
  };
  return (
    <>
      <Navbar />
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
        <Typography variant="h4">New Employee</Typography>
        <Box
          component="form"
          onSubmit={() => handleSubmit()}
          p={5}
          sx={{ width: "50%" }}
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

            <Button type="submit" variant="contained" fullWidth>
              submit
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default AddEmployee;
