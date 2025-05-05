import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
  Box,
  Button,
  Divider,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { FC, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 240;

type SubMenuItem = {
  name: string;
  path: string;
};

type DrawerSection = {
  section: string;
  items: {
    name: string;
    children?: SubMenuItem[];
  }[];
};

const drawerDataAdmin: DrawerSection[] = [
  {
    section: "Master",
    items: [
      {
        name: "Employees",
        children: [
          { name: "Employee List", path: "/employeeList" },
          { name: "Attendance", path: "/employeeAttendance" },
          { name: "Finance", path: "/finance" },
        ],
      },
    ],
  },
  {
    section: "Operations",
    items: [{ name: "Leaves" }, { name: "Leave Requests" }],
  },
  {
    section: "Reports",
    items: [{ name: "Attendance Report" }, { name: "Leave Report" }],
  },
];

const drawerDataEmployee: DrawerSection[] = [
  {
    section: "Self Service",
    items: [{ name: "Profile" }, { name: "Requested Leaves" }],
  },
];

const Navbar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("role");
  const employeeId = localStorage.getItem("employeeId");

  const isAdmin = role === "admin";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [employeesOpen, setEmployeesOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavClick = (name: string) => {
    switch (name) {
      case "logout":
        localStorage.clear();
        navigate("/");
        break;
      case "Profile":
        navigate(`/employeeDetails/${employeeId}`);
        break;
      case "Requested Leaves":
        // navigate("/requestedLeaveList");
        break;
      case "Leave Requests":
        // navigate("/leaveRequests");
        break;
      case "Attendance Report":
        // navigate("/attendanceReport");
        break;
      case "Leave Report":
        // navigate("/leaveReport");
        break;
      case "Dashboard":
        navigate(isAdmin ? "/adminDashBoard" : "/employeeDashBoard");
        break;
      // case "Employees":
      //   setEmployeesOpen((prev) => !prev);
      //   break;
      case "Employees":
        const currentPath = location.pathname;
        const isChildActive = drawerDataAdmin
          .find((s) => s.section === "Master")
          ?.items.find((i) => i.name === "Employees")
          ?.children?.some((child) => child.path === currentPath);

        if (!isChildActive) {
          setEmployeesOpen((prev) => !prev);
        }
        break;
    }
    if (isMobile) setMobileOpen(false); // Close drawer on nav
  };

  const drawerSections = isAdmin ? drawerDataAdmin : drawerDataEmployee;

  useEffect(() => {
    const hasMatch = drawerDataAdmin.some((section) =>
      section.items.some(
        (item) =>
          item.name === "Employees" &&
          item.children?.some((c) => c.path === location.pathname)
      )
    );
    if (hasMatch) setEmployeesOpen(true);
  }, [location.pathname]);

  const drawerContent = (
    <>
      <List disablePadding sx={{ mt: 2 }}>
        {drawerSections.map((section) => (
          <Box key={section.section} sx={{ px: 1, mb: 2 }}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#999",
                pl: 2,
                pt: 2,
                pb: 1,
                fontSize: "0.75rem",
                letterSpacing: "0.05em",
              }}
            >
              {section.section}
            </Typography>
            <Divider sx={{ mb: 1 }} />

            {section.items.map((item) => (
              <Box key={item.name}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => handleNavClick(item.name)}
                    selected={
                      item.name === "Employees" &&
                      item.children?.some((c) => c.path === location.pathname)
                    }
                    sx={{
                      px: 3,
                      py: 1.25,
                      borderRadius: 2,
                      mx: 1,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#f9f9f9",
                      },
                      "&.Mui-selected": {
                        backgroundColor: "#e3f2fd",
                        color: "#0d47a1",
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.name}
                      primaryTypographyProps={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                      }}
                    />
                    {item.children &&
                      (employeesOpen ? <ExpandLess /> : <ExpandMore />)}
                  </ListItemButton>
                </ListItem>

                {item.children && (
                  <Collapse in={employeesOpen} timeout="auto" unmountOnExit>
                    <List
                      component="div"
                      disablePadding
                      sx={{ mt: 0.5, mb: 0.5 }}
                    >
                      {item.children.map((child) => (
                        <ListItemButton
                          key={child.name}
                          onClick={() => navigate(child.path)}
                          selected={location.pathname === child.path}
                          sx={{
                            pl: 5,
                            py: 1.1,
                            borderRadius: 2,
                            mx: 2,
                            fontSize: "0.9rem",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              backgroundColor: "#f1f1f1",
                            },
                            "&.Mui-selected": {
                              backgroundColor: "#dcedc8",
                              color: "#33691e",
                            },
                          }}
                        >
                          <ListItemText
                            primary={child.name}
                            primaryTypographyProps={{
                              fontSize: "0.875rem",
                            }}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Box>
            ))}
          </Box>
        ))}
      </List>
    </>
  );

  return (
    <Box component={"div"}>
      <AppBar
        position="fixed"
        sx={{
          // width: {
          //   sm: `calc(100% - ${drawerWidth}px)`,
          //   md: `calc(100% - ${drawerWidth}px)`,
          // },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#fff",
          // backgroundColor: "#f5f5f5",
          color: "#000",
          boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
          zIndex: 1201,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={toggleDrawer}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Box
              sx={{
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ml: 1,
              }}
            >
              <img
                src="/sdc_logo.png"
                alt="logo"
                width={45}
                style={{ cursor: "pointer" }}
                onClick={() => handleNavClick("Dashboard")}
              />
            </Box>
            {/* {isAdmin ? "Admin Dashboard" : "Employee Dashboard"} */}
          </Box>

          <Button
            variant="outlined"
            size="small"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              borderRadius: 3,
              px: 3,
              py: 1,
              color: "#244D59",
              borderColor: "#244D59",
              "&:hover": {
                backgroundColor: "#244D59",
                color: "#fff",
              },
            }}
            onClick={() => handleNavClick("logout")}
          >
            Log out
          </Button>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#fafafa",
          },
        }}
      >
        <Toolbar />
        {drawerContent}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            border: "none",
            boxSizing: "border-box",
            // borderRight: "1px solid #e0e0e0",
            backgroundColor: "#fafafa",
          },
        }}
        open
      >
        <Toolbar sx={{ border: "none" }} />

        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Navbar;
