import { FC, useState } from "react";
import Navbar from "../components/appBar";
import { Box, Button, Card, Modal, Toolbar, Typography } from "@mui/material";
import { employeeList } from "../utils";
import { useParams } from "react-router-dom";

const EmployeeDetails: FC = () => {
  const id: any = useParams();
  const role = localStorage.getItem("role");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const employee = employeeList.find((item) => item.id === Number(id.id));
  const leaves = employee?.requestLeave.filter(
    (item) => item.status === "Approved"
  );
  const pendingLeaves = employee?.requestLeave.filter(
    (item) =>
      item.status === "Pending" &&
      item.date >= new Date().toISOString().split("T")[0]
  );

  console.log({
    employeess: employee,
    iddd: id,
    // leaves: leaves,
    // PendingLeave: pendingLeaves,
  });
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
        <Box
          component={"div"}
          sx={{ display: "flex", justifyContent: "flex-end", padding: 2 }}
        >
          {pendingLeaves?.length !== 0 && (
            <Button
              onClick={handleOpen}
              color="inherit"
              sx={{
                textTransform: "none",
                backgroundColor: "primary.light",
                "&:hover": {
                  backgroundColor: "primary.main",
                },
              }}
            >
              Leave &nbsp;
              <Typography component="span">
                ({pendingLeaves?.length})
              </Typography>
            </Button>
          )}
        </Box>

        <Card sx={{ padding: 5 }}>
          <Box
            component={"div"}
            sx={{
              marginBottom: 2,
              // textAlign: "center",
              borderBottom: "2px solid",
              borderColor: "primary.main", 
              paddingBottom: 1,
            }}
          >
            <Typography variant="h4">{employee?.name}&nbsp; Details</Typography>
          </Box>
          <Typography variant="h6">
            Name: &nbsp;
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {employee?.name}
            </Typography>
          </Typography>
          <Typography variant="h6">
            Email: &nbsp;
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {employee?.email}
            </Typography>
          </Typography>
          <Typography variant="h6">
            Job Role: &nbsp;
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {employee?.jobRole}
            </Typography>
          </Typography>
          <Typography variant="h6">
            Role: &nbsp;
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {employee?.role}
            </Typography>
          </Typography>
          <Typography variant="h6">
            Onleave: &nbsp;
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {employee?.onLeave ? "Yes" : "No"}
            </Typography>
          </Typography>
          <Typography variant="h6">
            Leave Taken: &nbsp;
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {leaves?.length}
            </Typography>
          </Typography>
        </Card>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          // sx={{ width: { md: "80%", lg: "60%" } }}
        >
          <Box
            component={"div"}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", md: "70%", lg: "60%" },
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: 2,
            }}
          >
            <Typography variant="h4">Leave Details</Typography>
            {pendingLeaves?.map((item) => {
              return (
                <Box component={"div"} sx={{ scroll: "auto" }}>
                  <Card sx={{ padding: 3, backgroundColor: "primary.light" }}>
                    <Typography variant="h6">
                      From: &nbsp;
                      <Typography component="span" sx={{ fontWeight: "bold" }}>
                        {item.date}
                      </Typography>
                    </Typography>

                    <Typography variant="h6">
                      Purpose: &nbsp;
                      <Typography component="span" sx={{ fontWeight: "bold" }}>
                        {item.reason}
                      </Typography>
                    </Typography>
                    <Typography variant="h6">
                      Duration: &nbsp;
                      <Typography component="span" sx={{ fontWeight: "bold" }}>
                        {item.duration}
                      </Typography>
                    </Typography>
                    <Typography variant="h6">
                      Purpose: &nbsp;
                      <Typography component="span" sx={{ fontWeight: "bold" }}>
                        {item.description}
                      </Typography>
                    </Typography>
                  </Card>
                  {role === "admin" && (
                    <Box component={"div"} sx={{ mt: 1 }}>
                      <Button sx={{ fontWeight: "bold" }}>Approve</Button>{" "}
                      <Button sx={{ fontWeight: "bold" }}>Reject</Button>
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default EmployeeDetails;
