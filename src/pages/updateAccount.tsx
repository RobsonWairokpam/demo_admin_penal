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
import { employeeList } from "../utils";

const UpdateAccount: FC = () => {
  const id = useParams();
  const employee = employeeList.find((item) => item.id === Number(id.id));
  const [accountHolderName, setAccountHolderName] = useState(
    employee?.account.accountHolderName
  );
  const [branch, setBranch] = useState(employee?.account.branch);
  const [bankName, setBackName] = useState(employee?.account.bankName);
  const [ifsc, setIfsc] = useState(employee?.account.ifsc);
  const [accountNo, setAccountNo] = useState(employee?.account.accountNo);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // console.log("employeeList", name, email, role,jobRole);

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
              Update Employee Bank Account Details
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

export default UpdateAccount;
