import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { adminDetail, employeeDetail } from "../utils";
import { useNavigate } from "react-router-dom";

const LoginPage: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  useEffect(() => {
    if (role === "admin") {
      navigate("/adminDashboard");
    }
    if (role === "employee") {
      navigate("/employeeDashboard");
    }
    // if (role === "hr") {
    //   navigate("/hrDashboard");
    // }
  }, [navigate, role]);
  const handleSubmit = () => {
    if (
      adminDetail.username === username &&
      adminDetail.password === password
    ) {
      localStorage.setItem("role", adminDetail.role);
      navigate("/adminDashboard");
    }
    if (
      username === employeeDetail.username &&
      password === employeeDetail.password
    ) {
      localStorage.setItem("role", employeeDetail.role);
      localStorage.setItem("employeeId", employeeDetail.id.toString());

      navigate("/employeeDashboard");
    }
    // if (
    //     username === hRDetail.username &&
    //     password === hRDetail.password
    //   ) {
    //     localStorage.setItem("role", hRDetail.role);
    //     navigate("/hrDashboard");
    //   }
    console.log(username, password);
  };
  return (
    <Box
    component="div"
    sx={{
      display: "flex",
      width: "100%",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f5f5f5", // light background
    }}
  >
    <Box
      sx={{
        width: "100%",
        maxWidth: 400,
        bgcolor: "white",
        boxShadow: 3,
        borderRadius: 3,
        p: 4,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#244D59", fontWeight: 600 }}
      >
        Login
      </Typography>
  
      <Box component="form" onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <Stack spacing={3}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#244D59",
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1c3b45",
              },
            }}
            fullWidth
          >
            Login
          </Button>
        </Stack>
      </Box>
    </Box>
  </Box>
  
  );
};

export default LoginPage;
