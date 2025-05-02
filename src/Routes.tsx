import { FC, ReactNode, useMemo } from "react";
import { Navigate, Route, Routes as RouterRoutes } from "react-router-dom";
import { joinPaths } from "./utils";
import LoginPage from "./pages/loginPage";
import AdminDasboard from "./pages/admin/adminDashboard";
import EmployeeDasboard from "./pages/employee/employeeDasboard";
import EmployeeDetails from "./pages/employeeDetails";
import AddEmployee from "./pages/addEmployee";
import ApplyLeave from "./pages/applyLeave";
import EmployeeList from "./pages/employeeList";
import EmployeeAttendance from "./pages/employeeAttendence";

const Routes: FC = () => {
  const routes = useMemo(() => {
    const r: Array<Required<Omit<IRoute, "children">>> = [];
    parseRoutes(ROUTES, null, r);

    return r;
  }, []);

  return (
    <RouterRoutes>
      {routes.map(({ path, component }) => {
        return <Route key={path} path={path} element={component}></Route>;
      })}
      <Route path="*" element={<Navigate to="/" />} />
    </RouterRoutes>
  );
};

const ROUTES: IRoute = {
  path: "/",
  component: <LoginPage />,
  children: [
    {
      path: "/adminDashboard",
      component: <AdminDasboard />,
    },
    {
      path: "/employeeDashboard",
      component: <EmployeeDasboard />,
    },
    {
      path: "/employeeDetails/:id",
      component: <EmployeeDetails />,
    },
    {
      path: "/addEmployee",
      component: <AddEmployee />,
    },
    {
      path: "/applyLeave/:id",
      component: <ApplyLeave />,
    },
    {
      path: "/employeeList",
      component: <EmployeeList />,
    },
    {
      path: "/employeeAttendance",
      component: <EmployeeAttendance />,
    }
  ],
};

const parseRoutes = (
  route: IRoute,
  prevRoute: string | null = null,
  parsedRoutes: Array<Required<Omit<IRoute, "children">>> = []
) => {
  const path = prevRoute ? joinPaths(prevRoute, route.path) : route.path;

  if (route.children) {
    route.children.forEach((child) => {
      parseRoutes(child, path, parsedRoutes);
    });
  }

  if (route.component) {
    parsedRoutes.push({
      path,
      component: route.component,
    });
  }
};

export type IRoute = {
  path: string;
  component?: ReactNode;
  children?: IRoute[];
};

export default Routes;
