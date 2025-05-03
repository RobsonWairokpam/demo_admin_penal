import { FC, useState } from "react";
import Navbar from "../components/appBar";
import {
  Box,
  Button,
  Card,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
const AddEmployee: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");

  const location = useLocation();
  const path = location.pathname.replace("/", "");

  const navigate = useNavigate();
  const drawerWidth = 240;

  const handleSubmit = () => {
    console.log("employeeList", name, email, role, jobRole);

    navigate("/adminDashboard");
  };
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
            md: `${drawerWidth}px`,
            lg: `${drawerWidth}px`,
          },
        }}
      >
        <Toolbar />

        <Box sx={{ display: "flex", alignItems: "center", gap: 1,mt:4 }}>
          <ArrowBackIcon
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
          <HomeIcon sx={{ cursor: "pointer" }} onClick={() => navigate("/")} />
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            /&nbsp;{path}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "calc(100vh - 100px)",
            pt: { xs: 20, sm: 20, md: 0, lg: 0 },
          }}
        >
          <Card
            elevation={4}
            sx={{
              width: { xs: "90%", sm: "90%", md: "80%", lg: "70%" },
              p: 4,
              backgroundColor: "white",
              borderRadius: 3,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h5"
              sx={{ mb: 3, fontWeight: 600, color: "#0d47a1" }}
            >
              Add Employee Bank Account Details
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Role"
                    variant="outlined"
                    fullWidth
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Job Role"
                    variant="outlined"
                    fullWidth
                    value={jobRole}
                    onChange={(e) => setJobRole(e.target.value)}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Date of Joining"
                    variant="outlined"
                    fullWidth
                    type="date"
                    value={dateOfJoining}
                    InputLabelProps={{
                      shrink: true, // ensures the label doesn't overlap the date value
                    }}
                    onChange={(e) => setDateOfJoining(e.target.value)}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      py: 1.5,
                      fontWeight: 600,
                      textTransform: "capitalize",
                      backgroundColor: "#0d47a1",
                      "&:hover": {
                        backgroundColor: "#1565c0",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default AddEmployee;
