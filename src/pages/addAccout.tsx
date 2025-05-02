import { FC, useState } from "react";
import Navbar from "../components/appBar";
import {
  Box,
  Button,
  Card,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const AddAccount: FC = () => {
  const id = useParams();
  const [accountHolderName, setAccountHolderName] = useState("");
  const [branch, setBranch] = useState("");
  const [bankName, setBackName] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(
      "employeeList",
      accountHolderName,
      id,
      branch,
      bankName,
      ifsc,
      accountNo
    );

    navigate("/adminDashboard");
  };
  return (
    <Box
      sx={{ display: "flex", backgroundColor: "primary.main", height: "100%" }}
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
          <Card
            sx={{
              width: { xs: "80%", md: "60%", backgroundColor: "primary.light" },
            }}
          >
            <Typography padding={2} variant="h5">
              Add Employee Bank Account Details
            </Typography>
            <Box component="form" onSubmit={() => handleSubmit()} p={5}>
              <Stack spacing={3}>
                <TextField
                  label="Account Number"
                  variant="outlined"
                  fullWidth
                  type="number"
                  value={accountNo}
                  onChange={(e) => setAccountNo(e.target.value)}
                />
                <TextField
                  label="Account Holder Name"
                  variant="outlined"
                  fullWidth
                  value={accountHolderName}
                  onChange={(e) => setAccountHolderName(e.target.value)}
                />
                <TextField
                  label="Back Name"
                  variant="outlined"
                  fullWidth
                  value={bankName}
                  onChange={(e) => setBackName(e.target.value)}
                />
                <TextField
                  label="IFSC"
                  variant="outlined"
                  fullWidth
                  value={ifsc}
                  onChange={(e) => setIfsc(e.target.value)}
                />
                <TextField
                  label="Branch"
                  variant="outlined"
                  fullWidth
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                />

                <Button type="submit" variant="contained" fullWidth>
                  submit
                </Button>
              </Stack>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default AddAccount;
