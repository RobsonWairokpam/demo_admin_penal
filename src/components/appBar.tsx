import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { FC, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
          { name: "Employee Attendance", path: "/employeeAttendance" },
          { name: "Finance", path: "/finance" },
        ],
      },
    ],
  },
  {
    section: "Operations",
    items: [
      {
        name: "Leaves",
      },
      {
        name: "Leave Requests",
      },
    ],
  },
  {
    section: "Reports",
    items: [
      {
        name: "Attendance Report",
      },
      {
        name: "Leave Report",
      },
    ],
  },
];

const drawerDataEmployee: DrawerSection[] = [
  {
    section: "Self Service",
    items: [
      { name: "Profile" },
      {
        name: "Requested Leaves",
      },
    ],
  },
];

const Navbar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("role");
  const employeeId = localStorage.getItem("employeeId");
  const [employeesOpen, setEmployeesOpen] = useState(false);

  useEffect(() => {
    const employeesMenu = drawerDataAdmin.find((section) =>
      section.items.some(
        (item) =>
          item.name === "Employees" &&
          item.children?.some((c) => c.path === location.pathname)
      )
    );
    if (employeesMenu) setEmployeesOpen(true);
  }, [location.pathname]);

  const handleNavClick = (itemName: string) => {
    if (itemName === "logout") {
      localStorage.clear();
      navigate("/");
    } else if (itemName === "Profile") {
      navigate(`/employeeDetails/${Number(employeeId)}`);
    } else if (itemName === "Leaves") {
      // navigate("/leaves");
    } else if (itemName === "Employees") {
      setEmployeesOpen((prev) => !prev);
    } else if (itemName === "Dashboard" && role === "admin") {
      navigate("/adminDashBoard");
    } else if (itemName === "Dashboard" && role === "employee") {
      navigate("/employeeDashBoard");
    } else if (itemName === "Requested Leaves") {
      navigate("/requestedLeaveList");
    }
  };

  const handleEmployeeSubItemClick = (path: string) => {
    navigate(path);
  };

  const drawerSections =
    role === "admin" ? drawerDataAdmin : drawerDataEmployee;

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "#f8f9fa",
          color: "#333",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            sx={{ cursor: "pointer" }}
            onClick={() => handleNavClick("Dashboard")}
          ></Typography>
          <Typography
            variant="body2"
            sx={{ cursor: "pointer" }}
            onClick={() => handleNavClick("logout")}
          >
            Log out
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        // open ={false}
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "primary.main",
            color: "white",
          },
        }}
      >
        <Box sx={{ overflow: "auto" }}>
          <Box
            padding={2}
            textAlign="center"
            onClick={() => {
              if (role === "admin") {
                navigate("/adminDashBoard");
              } else if (role === "employee") {
                navigate("/employeeDashBoard");
              }
            }}
          >
            <img style={{ cursor: "pointer" }} src="/sdc_logo.png" alt="logo" width={50} />
          </Box>
          <List>
            {drawerSections.map((section) => (
              <Box key={section.section}>
                <Typography sx={{ pl: 2, mt: 2, fontWeight: 600 }}>
                  {section.section}
                </Typography>

                {section.items.map((item) => (
                  <Box key={item.name}>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => handleNavClick(item.name)}
                        selected={
                          item.name === "Employees" &&
                          item.children?.some(
                            (c) => c.path === location.pathname
                          )
                        }
                        sx={{
                          "&.Mui-selected": {
                            backgroundColor: "#e0e0e0",
                            color: "black",
                          },
                          "&.Mui-selected:hover": {
                            backgroundColor: "#d5d5d5",
                          },
                        }}
                      >
                        <ListItemText primary={item.name} />
                        {item.name === "Employees" &&
                          (employeesOpen ? <ExpandLess /> : <ExpandMore />)}
                      </ListItemButton>
                    </ListItem>

                    {/* Only Employees has collapsible sub-items */}
                    {item.name === "Employees" && item.children && (
                      <Collapse in={employeesOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {item.children.map((childItem) => (
                            <ListItemButton
                              key={childItem.name}
                              onClick={() =>
                                handleEmployeeSubItemClick(childItem.path)
                              }
                              selected={location.pathname === childItem.path}
                              sx={{
                                pl: 4,
                                "&.Mui-selected": {
                                  backgroundColor: "#e0e0e0",
                                  color: "black",
                                },
                                "&.Mui-selected:hover": {
                                  backgroundColor: "#d5d5d5",
                                },
                              }}
                            >
                              <ListItemText primary={childItem.name} />
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
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
