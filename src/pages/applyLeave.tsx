import { FC, useState } from "react";
import Navbar from "../components/appBar";
import {
  Box,
  Button,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const ApplyLeave: FC = () => {
  const id = useParams();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [purpose, setPurpose] = useState("");
  const [duration, setDuration] = useState("");

  const navigate = useNavigate();
  console.log("ID_____________", Number(id.id));

  const handleSubmit = () => {
    console.log({
      From: from,
      To: to,
      Purpose: purpose,
      Duration: duration,
      Id: Number(id.id),
    });

    navigate("/employeeDashboard");
  };
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
          component="div"
          sx={{
            display: "flex",
            width: "100%",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            component="form"
            onSubmit={() => handleSubmit()}
            p={3}
            sx={{ width: "50%", backgroundColor: "primary.light" }}
          >
            <Typography paddingBottom={2} variant="h5">Apply Leave</Typography>
            <Stack spacing={2}>
              <TextField
                label="From"
                type="date"
                variant="outlined"
                fullWidth
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                InputLabelProps={{
                  shrink: true, // ensures the label doesn't overlap the date value
                }}
              />
              <TextField
                label="To"
                type="date"
                variant="outlined"
                fullWidth
                value={to}
                onChange={(e) => setTo(e.target.value)}
                InputLabelProps={{
                  shrink: true, // ensures the label doesn't overlap the date value
                }}
              />
              <TextField
                label="Purpose"
                variant="outlined"
                fullWidth
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              />
              <TextField
                label="Duration"
                variant="outlined"
                fullWidth
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />

              <Button type="submit" variant="contained" fullWidth>
                submit
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ApplyLeave;
