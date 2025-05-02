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
    requestLeave: [
      {
        date: "2025-05-05",
        reason: "Medical",
        duration: "2 days",
        status: "Pending",
        description:"requested leave for medical check up",
      },
      {
        date: "2025-05-10",
        reason: "Vacation",
        duration: "2 days",
        status: "Approved",
        description:"requested leave for winter vacation",
      },
    ],
    attendance: [
      {
        date: "2025-04-28",
        status: "Present",
        checkIn: "09:00",
        checkOut: "17:00",
      },
      {
        date: "2025-04-29",
        status: "Present",
        checkIn: "09:05",
        checkOut: "17:10",
      },
      { date: "2025-04-30", status: "On Leave", note: "Vacation" },
      { date: "2025-05-01", status: "Absent" },
      {
        date: "2025-05-02",
        status: "Present",
        checkIn: "09:10",
        checkOut: "16:50",
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
    requestLeave: [
      {
        date: "2025-05-06",
        reason: "Family Event",
        duration: "2 days",
        status: "Pending",
        description:"requested leave for falmily event",
      },
    ],
    attendance: [
      { date: "2025-04-28", status: "On Leave", note: "Personal" },
      { date: "2025-04-29", status: "On Leave", note: "Personal" },
      { date: "2025-04-30", status: "Absent" },
      { date: "2025-05-01", status: "On Leave", note: "Family" },
      { date: "2025-05-02", status: "On Leave", note: "Family" },
    ],
  },
  {
    id: 3,
    name: "employee3",
    email: "email3",
    role: "employee",
    onLeave: false,
    jobRole: "developer",
    requestLeave: [],
    attendance: [
      {
        date: "2025-04-28",
        status: "Present",
        checkIn: "09:00",
        checkOut: "17:00",
      },
      {
        date: "2025-04-29",
        status: "Present",
        checkIn: "09:10",
        checkOut: "17:05",
      },
      {
        date: "2025-04-30",
        status: "Present",
        checkIn: "09:15",
        checkOut: "17:00",
      },
      {
        date: "2025-05-01",
        status: "Present",
        checkIn: "09:00",
        checkOut: "16:45",
      },
      {
        date: "2025-05-02",
        status: "Present",
        checkIn: "09:05",
        checkOut: "17:00",
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
    requestLeave: [
      {
        date: "2025-05-07",
        reason: "Sick",
        duration: "2 days",
        status: "Rejected",

        description:"requested leave for sick",
      },
    ],
    attendance: [
      { date: "2025-04-28", status: "Absent" },
      {
        date: "2025-04-29",
        status: "Present",
        checkIn: "09:10",
        checkOut: "17:00",
      },
      { date: "2025-04-30", status: "On Leave", note: "Sick" },
      {
        date: "2025-05-01",
        status: "Present",
        checkIn: "09:00",
        checkOut: "17:10",
      },
      {
        date: "2025-05-02",
        status: "Present",
        checkIn: "09:00",
        checkOut: "16:55",
      },
    ],
  },
];
