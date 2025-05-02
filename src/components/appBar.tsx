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
  Button,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { FC, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import EventNoteIcon from "@mui/icons-material/EventNote";

const drawerWidth = 240;

type SubMenuItem = {
  name: string;
  path: string;
};

type DrawerItem = {
  name: string;
  path?: string;
  icon?: React.ElementType;
  children?: SubMenuItem[];
};

type DrawerSection = {
  section: string;
  items: DrawerItem[];
};

const drawerDataAdmin: DrawerSection[] = [
  {
    section: "Master",
    items: [
      {
        name: "Employees",
        icon: PeopleIcon,
        children: [
          { name: "Employee List", path: "/employeeList" },
          // { name: "Employee Attendance", path: "/employeeAttendance" },
        ],
      },
    ],
  },
  {
    section: "Operations",
    items: [
      {
        name: "Leaves",
        icon: EventNoteIcon,
        path: "/leaves", // assuming there's a page
      },
    ],
  },
];

const drawerDataEmployee: DrawerSection[] = [
  {
    section: "Self Service",
    items: [{ name: "Profile" }],
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
      navigate("/leaves");
    } else if (itemName === "Employees") {
      setEmployeesOpen((prev) => !prev);
    } else if (itemName === "Dashboard" && role === "admin") {
      navigate("/adminDashBoard");
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
    backgroundColor: "#fefefe",
    color: "#1e1e1e",
    borderBottom: "1px solid #e0e0e0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  }}
>
  <Toolbar sx={{ justifyContent: "space-between", px: 3 }}>
    {/* Left: App Title */}
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Typography
  variant="h6"
  noWrap
  sx={{
    fontWeight: 700,
    fontSize: 20,
    color: "transparent",
    background: "linear-gradient(90deg, #244D59, #3f8a9d)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "0.8px",
    cursor: "pointer",
    textShadow: "0 1px 1px rgba(0,0,0,0.1)",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      opacity: 0.9,
      transform: "scale(1.03)",
    },
  }}
  onClick={() => handleNavClick("Dashboard")}
>
  Dashboard
</Typography>

    </Box>

    {/* Right: Actions */}
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
    <Button
  variant="outlined"
  size="small"
  sx={{
    borderColor: "#244D59",
    color: "#244D59",
    fontWeight: 600,
    textTransform: "none",
    borderRadius: 3,
    px: 3,
    py: 1,
    fontSize: 14,
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
    "&:hover": {
      background: "linear-gradient(90deg, #244D59, #3f8a9d)",
      color: "#fff",
      borderColor: "#244D59",
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      transform: "scale(1.03)",
    },
  }}
  onClick={() => handleNavClick("logout")}
>
  Log out
</Button>

    </Box>
  </Toolbar>
</AppBar>


      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(8px)",
            borderRight: "1px solid #e0e0e0",
            color: "#2c3e50",
          },
        }}
      >
        <Box sx={{ overflow: "auto", height: "100%" }}>
          <Box
            sx={{
              padding: 2,
              textAlign: "center",
              borderBottom: "1px solid #ddd",
              backgroundColor: "#ffffffcc",
            }}
          >
            <img src="/sdc_logo.png" alt="logo" width={45} />
          </Box>

          <List sx={{ py: 1 }}>
            {drawerSections.map((section) => (
              <Box key={section.section} sx={{ mb: 2 }}>
                <Typography
                  sx={{
                    pl: 3,
                    py: 1,
                    mb: 0.5,
                    fontSize: 12,
                    textTransform: "uppercase",
                    fontWeight: 600,
                    color: "#2c3e50",
                    backgroundColor: "#ecf0f1",
                    borderLeft: "4px solid #3498db",
                  }}
                >
                  {section.section}
                </Typography>

                {section.items.map((item) => {
                  const isParentSelected =
                    item.name === "Employees" &&
                    item.children?.some((c) => c.path === location.pathname);

                  return (
                    <Box key={item.name}>
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={() => handleNavClick(item.name)}
                          selected={isParentSelected}
                          sx={{
                            borderRadius: 2,
                            mx: 1,
                            my: 0.5,
                            px: 2.5,
                            py: 1.2,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            transition: "0.3s",
                            "&.Mui-selected": {
                              backgroundColor: "#e3f2fd",
                              color: "#0d47a1",
                              fontWeight: 600,
                            },
                            "&:hover": {
                              backgroundColor: "#f1f1f1",
                            },
                          }}
                        >
                          {item.icon && (
                            <item.icon
                              style={{ marginRight: 8 }}
                              fontSize="small"
                            />
                          )}
                          <ListItemText
                            primary={item.name}
                            primaryTypographyProps={{
                              fontSize: 14,
                            }}
                          />
                          {item.name === "Employees" &&
                            (employeesOpen ? <ExpandLess /> : <ExpandMore />)}
                        </ListItemButton>
                      </ListItem>

                      {item.name === "Employees" && item.children && (
                        <Collapse
                          in={employeesOpen}
                          timeout="auto"
                          unmountOnExit
                        >
                          <List component="div" disablePadding>
                            {item.children.map((childItem) => (
                              <ListItemButton
                                key={childItem.name}
                                onClick={() =>
                                  handleEmployeeSubItemClick(childItem.path)
                                }
                                selected={location.pathname === childItem.path}
                                sx={{
                                  pl: 6,
                                  py: 1,
                                  borderRadius: 2,
                                  mx: 1,
                                  my: 0.3,
                                  transition: "0.3s",
                                  "&.Mui-selected": {
                                    backgroundColor: "#dcedc8",
                                    color: "#33691e",
                                    fontWeight: 500,
                                  },
                                  "&:hover": {
                                    backgroundColor: "#f9fbe7",
                                  },
                                }}
                              >
                                <ListItemText
                                  primary={childItem.name}
                                  primaryTypographyProps={{ fontSize: 13 }}
                                />
                              </ListItemButton>
                            ))}
                          </List>
                        </Collapse>
                      )}
                    </Box>
                  );
                })}
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
