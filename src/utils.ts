export const joinPaths = (...paths: string[]): string => {
  return paths.join("/").replaceAll(/\/+/g, "/");
};

export const getFileExtension = (filename: any) => {
  const extension = filename.split(".").pop();
  return extension;
};

export interface Task {
  id: string;
  text: string;
  category: string;
  priority: "Low" | "Medium" | "High";
  completed: boolean;
}

export const adminDetail = {
  username: "admin",
  password: "admin",
  role: "admin",
};
export let employeeDetail = {
  id: 1,
  username: "employee",
  password: "employee",
  role: "employee",
  onLeave: false,
};
// export let hRDetail = {
//   username: "hr",
//   password: "hr",
//   role: "hr",
//   onLeave: false,
// };
export let employeeList = [
  {
    id: 1,
    name: "employee1",
    email: "email1",
    role: "employee",
    onLeave: false,
    jobRole: "developer",
    leaves: [
      {
        id: 1,
        from: "2025-06-01",
        to: "2025-06-02",
        purpose: "vacation",
        duration: "2 days",
        isApproved: false,
      },
      {
        id: 2,
        from: "2024-04-01",
        to: "2023-04-02",
        purpose: "Sick",
        duration: "2 days",
        isApproved: true,
      },
      {
        id: 3,
        from: "2023-03-01",
        to: "2023-03-02",
        purpose: "Sick",
        duration: "2 days",
        isApproved: true,
      },
    ],
  },
  {
    id: 2,
    name: "employee2",
    email: "email2",
    role: "employee",
    onLeave: true,
    jobRole: "developer",
    leaves: [
      {
        id: 1,
        from: "2023-01-01",
        to: "2023-01-02",
        purpose: "vacation",
        duration: "2 days",
        isApproved: false,
      },
      {
        id: 2,
        from: "2023-04-01",
        to: "2023-04-02",
        purpose: "Sick",
        duration: "2 days",
        isApproved: false,
      },
      {
        id: 3,
        from: "2023-03-01",
        to: "2023-03-02",
        purpose: "Sick",
        duration: "2 days",
        isApproved: true,
      },
    ],
  },
  {
    id: 3,
    name: "employee3",
    email: "email3",
    role: "employee",
    onLeave: false,
    jobRole: "developer",
    leaves: [
      {
        id: 1,
        from: "2023-01-01",
        to: "2023-01-02",
        purpose: "vacation",
        duration: "2 days",
        isApproved: false,
      },
      {
        id: 2,
        from: "2023-04-01",
        to: "2023-04-02",
        purpose: "Sick",
        duration: "2 days",
        isApproved: true,
      },
      {
        id: 3,
        from: "2023-03-01",
        to: "2023-03-02",
        purpose: "Sick",
        duration: "2 days",
        isApproved: false,
      },
    ],
  },
  {
    id: 4,
    name: "employee4",
    email: "email4",
    role: "employee",
    onLeave: false,
    jobRole: "developer",
    leaves: [
      {
        id: 1,

        from: "2023-01-01",
        to: "2023-01-02",
        purpose: "vacation",
        duration: "2 days",
        isApproved: false,
      },
      {
        id: 1,

        from: "2023-04-01",
        to: "2023-04-02",
        purpose: "Sick",
        duration: "2 days",
        isApproved: false,
      },
      {
        id: 1,

        from: "2023-03-01",
        to: "2023-03-02",
        purpose: "Sick",
        duration: "2 days",
        isApproved: true,
      },
    ],
  },
];
