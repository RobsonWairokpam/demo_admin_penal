import { FC, useState } from "react";
import Navbar from "../components/appBar";
import {
  Box,
  Button,
  Card,
  Grid,
  Modal,
  Toolbar,
  Typography,
} from "@mui/material";
import { employeeList } from "../utils";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";

const drawerWidth = 240;

const EmployeeDetails: FC = () => {
  const id: any = useParams();
  const role = localStorage.getItem("role");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const location = useLocation();
  const path = location.pathname.replace("/", "");

  const employee = employeeList.find((item) => item.id === Number(id.id));
  const leaves = employee?.requestLeave.filter(
    (item) => item.status === "Approved"
  );
  const pendingLeaves = employee?.requestLeave.filter(
    (item) =>
      item.status === "Pending" &&
      item.date >= new Date().toISOString().split("T")[0]
  );

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
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 4 }}>
          <ArrowBackIcon
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
          <HomeIcon sx={{ cursor: "pointer" }} onClick={() => navigate("/")} />
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            /&nbsp;{path}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          {pendingLeaves?.length !== 0 && (
            <Button
              onClick={handleOpen}
              variant="contained"
              sx={{
                backgroundColor: "#0d47a1",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
            >
              Pending Leaves&nbsp;
              <Typography component="span">
                ({pendingLeaves?.length})
              </Typography>
            </Button>
          )}
        </Box>

        <Card
          elevation={4}
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: "#ffffff",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: 600,
              color: "#0d47a1",
              borderBottom: 1,
              pb: 1,
            }}
          >
            {employee?.name} - Employee Details
          </Typography>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle1">
                <strong>Name:</strong> {employee?.name}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle1">
                <strong>Email:</strong> {employee?.email}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle1">
                <strong>Job Role:</strong> {employee?.jobRole}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle1">
                <strong>Role:</strong> {employee?.role}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle1">
                <strong>On Leave:</strong> {employee?.onLeave ? "Yes" : "No"}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle1">
                <strong>Leaves Taken:</strong> {leaves?.length}
              </Typography>
            </Grid>
          </Grid>
        </Card>

        {/* Modal for Pending Leaves */}
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: "80%", md: "60%" },
              bgcolor: "background.paper",
              borderRadius: 3,
              boxShadow: 24,
              p: 4,
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
              Pending Leave Requests
            </Typography>

            {pendingLeaves?.map((item, index) => (
              <Card
                key={index}
                sx={{
                  p: 3,
                  mb: 2,
                  backgroundColor: "#e3f2fd",
                  borderRadius: 2,
                }}
              >
                <Typography variant="subtitle1">
                  <strong>Date:</strong> {item.date}
                </Typography>
                <Typography variant="subtitle1">
                  <strong>Duration:</strong> {item.duration}
                </Typography>
                <Typography variant="subtitle1">
                  <strong>Reason:</strong> {item.reason}
                </Typography>
                <Typography variant="subtitle1">
                  <strong>Description:</strong> {item.description}
                </Typography>

                {role === "admin" && (
                  <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ fontWeight: "bold" }}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ fontWeight: "bold" }}
                    >
                      Reject
                    </Button>
                  </Box>
                )}
              </Card>
            ))}
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default EmployeeDetails;
