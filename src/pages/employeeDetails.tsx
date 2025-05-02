import { FC, useState } from "react";
import Navbar from "../components/appBar";
import { Box, Button, Card, Modal, Typography } from "@mui/material";
import { employeeList } from "../utils";
import { useParams } from "react-router-dom";

const EmployeeDetails: FC = () => {
  const id: any = useParams();
  const role = localStorage.getItem("role");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const employee = employeeList.find((item) => item.id === Number(id.id));
  const leaves = employee?.leaves.filter((item) => item.isApproved === true);
  const pendingLeaves = employee?.leaves.filter(
    (item) =>
      item.isApproved === false &&
      item.from >= new Date().toISOString().split("T")[0]
  );
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  console.log({
    employeess: employee,
    iddd: id,
    leaves: leaves,
    PendingLeave: pendingLeaves,
  });
  return (
    <>
      <Navbar />
      <Box component={"div"} padding={10}>
        <Box
          component={"div"}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography padding={3} variant="h3">
            {employee?.name}&nbsp; Details
          </Typography>
          <Box>
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
        </Box>

        <Card sx={{ padding: 5 }}>
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
        >
          <Box component={"div"} sx={style}>
            <Typography variant="h4">Pending Leaves</Typography>
            {pendingLeaves?.map((item) => {
              return (
                <Box component={"div"} sx={{ scroll: "auto" }}>
                  <Card sx={{ padding: 5, margin: 2 }}>
                    <Typography variant="h6">
                      From: &nbsp;
                      <Typography component="span" sx={{ fontWeight: "bold" }}>
                        {item.from}
                      </Typography>
                    </Typography>
                    <Typography variant="h6">
                      To: &nbsp;
                      <Typography component="span" sx={{ fontWeight: "bold" }}>
                        {item.to}
                      </Typography>
                    </Typography>
                    <Typography variant="h6">
                      Purpose: &nbsp;
                      <Typography component="span" sx={{ fontWeight: "bold" }}>
                        {item.purpose}
                      </Typography>
                    </Typography>
                    <Typography variant="h6">
                      Duration: &nbsp;
                      <Typography component="span" sx={{ fontWeight: "bold" }}>
                        {item.duration}
                      </Typography>
                    </Typography>
                  </Card>
                  {role === "admin" && (
                    <Box>
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
    </>
  );
};

export default EmployeeDetails;
