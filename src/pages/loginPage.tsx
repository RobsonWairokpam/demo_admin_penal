import {
  Box,
  Button,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { adminDetail, employeeDetail } from "../utils";
import { useNavigate } from "react-router-dom";

const LoginPage: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (role === "admin") navigate("/adminDashboard");
    if (role === "employee") navigate("/employeeDashboard");
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
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url('/your-image-path.jpg')`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 4,
          borderRadius: 3,
          backgroundColor: "rgba(255, 255, 255, 0.9)", // semi-transparent white
          backdropFilter: "blur(8px)",
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 2, fontWeight: 600, textAlign: "center", color: "#333" }}
        >
          Login to your account
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Stack spacing={2}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#1cc9a4",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#159e83",
                },
              }}
            >
              Login
            </Button>
            <Link
              href="#"
              variant="body2"
              sx={{ textAlign: "center", color: "#616161" }}
            >
              Forgot password?
            </Link>
            <Link
              href="#"
              variant="body2"
              sx={{ textAlign: "center", color: "#616161" }}
            >
              Don’t have an account? Register
            </Link>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
