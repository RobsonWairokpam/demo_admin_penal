import { FC, useEffect, useState } from "react";
import Navbar from "../../components/appBar";
import { employeeList } from "../../utils";

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
import { format } from "date-fns";

const EmployeeDasboard: FC = () => {
  const employeeId = localStorage.getItem("employeeId");
  const employee = employeeList.find((item) => item.id === Number(employeeId));
  console.log(employee, "iofugierhgoeg");
  const navigate = useNavigate();

  const standardStartTime = new Date();

  standardStartTime.setHours(9, 30, 0, 0); // 9:30 AM

  const [clockedOut, setClockedOut] = useState(false);
  const [elapsedTime, setElapsedTime] = useState("00:00:00");

  useEffect(() => {
    if (clockedOut) return;

    const interval = setInterval(() => {
      const now = new Date();
      const diff = Math.max(0, now.getTime() - standardStartTime.getTime());

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const formatted = `${String(hours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

      setElapsedTime(formatted);
    }, 1000);

    return () => clearInterval(interval);
  }, [clockedOut, standardStartTime]);
  const drawerWidth = 240;
  return (
    <Box
      sx={{
        display: "flex",
        // backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        // width: "100%",
      }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: {
            xs: 0,
            sm: 0,
            // [`@media (min-width:750px)`]: 0, // custom breakpoint applied here
            // [`@media (min-width: 600px) and (max-width: 900px)`]: 0, // Range between 634px and 867px`, // Range between 634px and 867px
            md: `${drawerWidth}px`,
            lg: `${drawerWidth}px`,
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 4,
          }}
        >
          <Card
            sx={{
              height: 120,
              width: "30%",
              mx: 1,
              boxShadow: 3,
              borderRadius: 2,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
              backgroundColor: "#f4f4f9",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h6">Shift Today </Typography>
                <Typography variant="body2" color="text.secondary">
                  {format(new Date(), "dd MMMM EEEE")}
                </Typography>
                <IconButton color="primary">
                  <ArrowForwardIcon />
                </IconButton>
              </Box>
              <AccountCircle sx={{ fontSize: 40, color: "#4caf50" }} />
              {/* <Notifications sx={{ fontSize: 40, color: "#3F51B5" }} /> */}
            </CardContent>
          </Card>

          <Card
            sx={{
              height: 120,
              width: "30%",
              mx: 1,
              boxShadow: 3,
              borderRadius: 2,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
              backgroundColor: "#e8f5e9",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Box>
                <Typography variant="h6">Working Hours</Typography>
                <Box
                  component={"span"}
                  sx={{
                    display: "flex",
                    mt: 2,
                    justifyContent: "space-around",
                  }}
                >
                  <Typography sx={{ py: 1 }}>{elapsedTime}</Typography>
                  <Button
                    variant="contained"
                    color="error"
                    disabled={clockedOut}
                    onClick={() => setClockedOut(true)}
                    size="small"
                  >
                    Clock Out
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>

          <Card
            sx={{
              height: 120,
              width: "30%",
              mx: 1,
              boxShadow: 3,
              borderRadius: 2,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
              backgroundColor: "#fce4ec",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h6">Pending Tasks</Typography>
                <Typography variant="body2" color="text.secondary">
                  2 tasks pending for review.
                </Typography>{" "}
                <IconButton color="primary">
                  <ArrowForwardIcon />
                </IconButton>
              </Box>
              {/* <AccessAlarm sx={{ fontSize: 40, color: "#e91e63" }} /> */}
            </CardContent>
          </Card>
        </Box>
        <Divider sx={{ my: 3  }} />
        <Box
          component={"div"}
          sx={{
            my: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              height: 250,
              width: "98%",
              mt: 1,
              p: 1,
              boxShadow: 3,
              borderRadius: 2,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
              backgroundColor: "#f4f4f9",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                // alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Box component={"span"} sx={{ borderBottom: "2px solid", mb: 1 }}>
                <Typography variant="h6">Announcements </Typography>
                <Typography variant="body2" color="text.secondary">
                  {format(new Date(), "dd MMMM EEEE")}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeeDasboard;
