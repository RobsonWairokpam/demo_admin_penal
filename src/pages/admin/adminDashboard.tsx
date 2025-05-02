import { FC } from "react";
import Navbar from "../../components/appBar";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Toolbar,
  Link,
} from "@mui/material";
import {
  AccessAlarm,
  AccountCircle,
  Notifications,
  Settings,
} from "@mui/icons-material";

// const drawerWidth = 240;

const AdminDashboard: FC = () => {
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
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Card
              sx={{
                height: { xs: 180, md: 260 },
                padding: { xs: 2, md: 5 },
                backgroundImage: "url('/stock.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <CardContent sx={{ color: "white" }}>
                <Typography variant="h6">SourceDotCom Private Ltd.</Typography>
                <Typography variant="body2">
                  16, Electronic City, Sector 18, Udyog Vihar, Phase IV,
                  Gurugram, Haryana 122015
                </Typography>
                <Link
                  href="https://www.sourceinfosys.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    sx={{ color: "white", backgroundColor: "#3F51B5", mt: 2 }}
                  >
                    visit
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                height: { xs: 180, md: 260 },
                padding: { xs: 2, md: 6 },
                backgroundImage: "url('/images.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <CardContent>
                <Typography variant="h6">Smart City</Typography>
                <Typography variant="body2">
                  We deal with Robust Solutions for Smart City
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Additional Rows */}
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
              width: "22%",
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
                <Typography variant="h6">New Alerts</Typography>
                <Typography variant="body2" color="text.secondary">
                  You have 5 new notifications.
                </Typography>
              </Box>
              <Notifications sx={{ fontSize: 40, color: "#3F51B5" }} />
            </CardContent>
          </Card>

          <Card
            sx={{
              height: 120,
              width: "22%",
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
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h6">Active Users</Typography>
                <Typography variant="body2" color="text.secondary">
                  12 active users online.
                </Typography>
              </Box>
              <AccountCircle sx={{ fontSize: 40, color: "#4caf50" }} />
            </CardContent>
          </Card>

          <Card
            sx={{
              height: 120,
              width: "22%",
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
                  8 tasks pending for review.
                </Typography>
              </Box>
              <AccessAlarm sx={{ fontSize: 40, color: "#e91e63" }} />
            </CardContent>
          </Card>

          <Card
            sx={{
              height: 120,
              width: "22%",
              mx: 1,
              boxShadow: 3,
              borderRadius: 2,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
              backgroundColor: "#e3f2fd",
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
                <Typography variant="h6">System Settings</Typography>
                <Typography variant="body2" color="text.secondary">
                  Manage your system settings.
                </Typography>
              </Box>
              <Settings sx={{ fontSize: 40, color: "#2196f3" }} />
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            // gap: 3,
            mt:5
          }}
        >
          <Card
            sx={{
              height: 120,
              width: "22%",
              mx: 1,
              boxShadow: 3,
              borderRadius: 2,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
              backgroundColor: "#fff3e0",
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
                <Typography variant="h6">Sales</Typography>
                <Typography variant="body2" color="text.secondary">
                  $12,340 in sales this month.
                </Typography>
              </Box>
              <AccessAlarm sx={{ fontSize: 40, color: "#ff9800" }} />
            </CardContent>
          </Card>

          <Card
            sx={{
              height: 120,
              width: "22%",
              mx: 1,
              boxShadow: 3,
              borderRadius: 2,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
              backgroundColor: "#c8e6c9",
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
                <Typography variant="h6">Completed Projects</Typography>
                <Typography variant="body2" color="text.secondary">
                  25 projects completed this month.
                </Typography>
              </Box>
              <Notifications sx={{ fontSize: 40, color: "#388e3c" }} />
            </CardContent>
          </Card>

          <Card
            sx={{
              height: 120,
              width: "22%",
              mx: 1,
              boxShadow: 3,
              borderRadius: 2,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
              backgroundColor: "#d1c4e9",
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
                <Typography variant="h6">Support Tickets</Typography>
                <Typography variant="body2" color="text.secondary">
                  14 open tickets.
                </Typography>
              </Box>
              <AccountCircle sx={{ fontSize: 40, color: "#8e24aa" }} />
            </CardContent>
          </Card>

          <Card
            sx={{
              height: 120,
              width: "22%",
              mx: 1,
              boxShadow: 3,
              borderRadius: 2,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
              backgroundColor: "#e0f7fa",
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
                <Typography variant="h6">Website Traffic</Typography>
                <Typography variant="body2" color="text.secondary">
                  1,200 visitors this week.
                </Typography>
              </Box>
              <Settings sx={{ fontSize: 40, color: "#00bcd4" }} />
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
