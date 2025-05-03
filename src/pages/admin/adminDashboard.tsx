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
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", projects: 2 },
  { month: "Feb", projects: 5 },
  { month: "Mar", projects: 3 },
  { month: "Apr", projects: 6 },
  { month: "May", projects: 4 },
  { month: "Jun", projects: 7 },
  { month: "Jul", projects: 5 },
  { month: "Aug", projects: 8 },
  { month: "Sep", projects: 6 },
  { month: "Oct", projects: 4 },
  { month: "Nov", projects: 9 },
  { month: "Dec", projects: 7 },
];
const drawerWidth = 240;
const AdminDashboard: FC = () => {
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
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Card
              sx={{
                height: { xs: 180, md: 260 },
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
                    Visit
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                height: { xs: 180, md: 260 },
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

          {/* Stat Cards Row 1 */}
          {[
            {
              title: "New Alerts",
              desc: "You have 5 new notifications.",
              icon: <Notifications sx={{ fontSize: 40, color: "#3F51B5" }} />,
              bg: "#f4f4f9",
            },
            {
              title: "Active Employees",
              desc: "12 active employees online.",
              icon: <AccountCircle sx={{ fontSize: 40, color: "#4caf50" }} />,
              bg: "#e8f5e9",
            },
            {
              title: "Pending Tasks",
              desc: "8 tasks pending for review.",
              icon: <AccessAlarm sx={{ fontSize: 40, color: "#e91e63" }} />,
              bg: "#fce4ec",
            },
            {
              title: "System Settings",
              desc: "Manage your system settings.",
              icon: <Settings sx={{ fontSize: 40, color: "#2196f3" }} />,
              bg: "#e3f2fd",
            },
          ].map((item, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: 120,
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "transform 0.3s ease",
                  backgroundColor: item.bg,
                  "&:hover": { transform: "scale(1.05)" },
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
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </Box>
                  {item.icon}
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* Stat Cards Row 2 */}
          {[
            {
              title: "Sales",
              desc: "$12,340 in sales this month.",
              icon: <AccessAlarm sx={{ fontSize: 40, color: "#ff9800" }} />,
              bg: "#fff3e0",
            },
            {
              title: "Completed Projects",
              desc: "25 projects completed this month.",
              icon: <Notifications sx={{ fontSize: 40, color: "#388e3c" }} />,
              bg: "#c8e6c9",
            },
            {
              title: "Support Tickets",
              desc: "14 open tickets.",
              icon: <AccountCircle sx={{ fontSize: 40, color: "#8e24aa" }} />,
              bg: "#d1c4e9",
            },
            {
              title: "Website Traffic",
              desc: "1,200 visitors this week.",
              icon: <Settings sx={{ fontSize: 40, color: "#00bcd4" }} />,
              bg: "#e0f7fa",
            },
          ].map((item, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
              <Card
                sx={{
                  height: 120,
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "transform 0.3s ease",
                  backgroundColor: item.bg,
                  "&:hover": { transform: "scale(1.05)" },
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
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </Box>
                  {item.icon}
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* Chart Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Employee Activity Over Time for 2025
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="projects"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
