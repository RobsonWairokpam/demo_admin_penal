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
  const capitalizeFirst = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: 600,
              color: "#0d47a1",
              // borderBottom: 1,
              pb: 1,
            }}
          >
            {employee?.name && capitalizeFirst(employee.name)} Details
          </Typography>
          {pendingLeaves?.length !== 0 && (
            <Box component={"div"}>
              {" "}
              <Button
                onClick={handleOpen}
                variant="contained"
                size="small"
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
            </Box>
          )}
        </Box>
        <Grid container spacing={3} >
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              elevation={4}
              sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: "#ffffff",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="logo"
                  width={130}
                  height={130}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    border: "2px solid #1976d2", // Optional: color border
                    objectFit: "cover", // Keeps image inside circle
                  }}
                />
                <Typography variant="subtitle1" sx={{ mt: 2 }}>
                  {employee?.name && capitalizeFirst(employee.name)}
                </Typography>
                <Button variant="contained" size="small" sx={{ mt: 2 }}>
                  {role === "admin" ? "Message" : "Edit"}
                </Button>
              </Box>
            </Card>
            <Card
              elevation={4}
              sx={{
                p: 4,
                mt: 4,
                borderRadius: 3,
                backgroundColor: "#ffffff",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  // mb: 3,
                  fontWeight: 600,
                  color: "#0d47a1",
                  borderBottom: 1,
                  pb: 1,
                }}
              >
                Info
              </Typography>
              <Box component={"div"}>
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderBottom: 1,
                    py: 1,
                    color: "gray",
                  }}
                >
                  <Typography component={"div"} color={"gray"}>
                    Name:&nbsp;
                  </Typography>
                  <Typography component={"span"} color="black" variant="body2">
                    {employee?.name && capitalizeFirst(employee.name)}
                  </Typography>
                </Box>
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderBottom: 1,
                    py: 1,
                    color: "gray",
                  }}
                >
                  <Typography component={"div"} color={"gray"}>
                    Address:&nbsp;
                  </Typography>
                  <Typography component={"span"} color="black" variant="body2">
                    {employee?.address}
                  </Typography>
                </Box>{" "}
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderBottom: 1,
                    py: 1,
                    color: "gray",
                  }}
                >
                  <Typography component={"div"} color={"gray"}>
                    Date Of Birth:&nbsp;
                  </Typography>
                  <Typography component={"span"} color="black" variant="body2">
                    {employee?.dateOfBirth}
                  </Typography>
                </Box>{" "}
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderBottom: 1,
                    py: 1,
                    color: "gray",
                  }}
                >
                  <Typography component={"div"} color={"gray"}>
                    Gender:&nbsp;
                  </Typography>
                  <Typography component={"span"} color="black" variant="body2">
                    {employee?.gender}
                  </Typography>
                </Box>{" "}
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderBottom: 1,
                    py: 1,
                    color: "gray",
                  }}
                >
                  <Typography component={"div"} color={"gray"}>
                    Natinality:&nbsp;
                  </Typography>
                  <Typography component={"span"} color="black" variant="body2">
                    {employee?.nationality}
                  </Typography>
                </Box>{" "}
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderBottom: 1,
                    py: 1,
                    color: "gray",
                  }}
                >
                  <Typography component={"div"} color={"gray"}>
                    Maritual Status:&nbsp;
                  </Typography>
                  <Typography component={"span"} color="black" variant="body2">
                    {employee?.maritualStatus}
                  </Typography>
                </Box>{" "}
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderBottom: 1,
                    py: 1,
                    color: "gray",
                  }}
                >
                  <Typography component={"div"} color={"gray"}>
                    Religion:&nbsp;
                  </Typography>
                  <Typography component={"span"} color="black" variant="body2">
                    {employee?.religion}
                  </Typography>
                </Box>{" "}
              </Box>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
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
                  // borderBottom: 1,
                  pb: 1,
                }}
              >
                Status
              </Typography>

              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderBottom: 1,
                  py: 1,
                  color: "gray",
                }}
              >
                <Typography component={"div"} color={"gray"}>
                  Date Of Joining:&nbsp;
                </Typography>
                <Typography component={"span"} color="black" variant="body2">
                  {employee?.dateOfJoining}
                </Typography>
              </Box>
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderBottom: 1,
                  py: 1,
                  color: "gray",
                }}
              >
                <Typography component={"div"} color={"gray"}>
                  On Leave:&nbsp;
                </Typography>
                <Typography component={"span"} color="black" variant="body2">
                  {employee?.onLeave ? "Yes" : "No"}
                </Typography>
              </Box>
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderBottom: 1,
                  py: 1,
                  color: "gray",
                }}
              >
                <Typography component={"div"} color={"gray"}>
                  Role:&nbsp;
                </Typography>
                <Typography component={"span"} color="black" variant="body2">
                  {employee?.role && capitalizeFirst(employee?.role)}
                </Typography>
              </Box>
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderBottom: 1,
                  py: 1,
                  color: "gray",
                }}
              >
                <Typography component={"div"} color={"gray"}>
                  Job Role:&nbsp;
                </Typography>
                <Typography component={"span"} color="black" variant="body2">
                  {employee?.jobRole}
                </Typography>
              </Box>
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderBottom: 1,
                  py: 1,
                  color: "gray",
                }}
              >
                <Typography component={"div"} color={"gray"}>
                  Leave Taken:&nbsp;
                </Typography>
                <Typography component={"span"} color="black" variant="body2">
                  {leaves?.length}
                </Typography>
              </Box>
            </Card>
            <Card
              elevation={4}
              sx={{
                p: 4,
                mt: 4,
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
                  // borderBottom: 1,
                  pb: 1,
                }}
              >
                Contact Info
              </Typography>
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderBottom: 1,
                  py: 1,
                  color: "gray",
                }}
              >
                <Typography component={"div"} color={"gray"}>
                  Phone:&nbsp;
                </Typography>
                <Typography component={"span"} color="black" variant="body2">
                  {employee?.phone}
                </Typography>
              </Box>
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: 1,
                  py: 1,
                  color: "gray",
                }}
              >
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography component={"div"} color={"gray"}>
                    Email:&nbsp;
                  </Typography>
                  <Typography component={"span"} color="black" variant="body2">
                    {employee?.email}
                  </Typography>
                </Box>{" "}
                {employee?.email && (
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mt: 1, alignSelf: "flex-start" }}
                    href={`mailto:${employee.email}`}
                  >
                    Send Mail
                  </Button>
                )}
              </Box>
            </Card>
          </Grid>
        </Grid>

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
