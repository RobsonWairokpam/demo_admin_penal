import { FC, useState } from "react";
import Navbar from "../components/appBar";
import {
  Box,
  Button,
  Card,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { employeeList } from "../utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";

const UpdateAccount: FC = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "");
  const id = useParams();
  const employee = employeeList.find((item) => item.id === Number(id.id));
  const [accountHolderName, setAccountHolderName] = useState(
    employee?.account.accountHolderName
  );
  const [branch, setBranch] = useState(employee?.account.branch);
  const [bankName, setBankName] = useState(employee?.account.bankName);
  const [ifsc, setIfsc] = useState(employee?.account.ifsc);
  const [accountNo, setAccountNo] = useState(employee?.account.accountNo);
  const [accountType, setAccountType] = useState(
    employee?.account.accountType || ""
  );
  const [mobileNumber, setMobileNumber] = useState(
    employee?.account.mobileNumber || ""
  );
  const [email, setEmail] = useState(employee?.account.email || "");
  const [bankAddress, setBankAddress] = useState(
    employee?.account.bankAddress || ""
  );
  const [accountStatus, setAccountStatus] = useState(
    employee?.account.accountStatus || "Active"
  );

  const navigate = useNavigate();
  const drawerWidth = 240;

  const handleSubmit = () => {
    // Handle form submission
    navigate("/adminDashboard");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: {
            xs: 0,
            sm: 0,
            md: `${drawerWidth}px`,
            lg: `${drawerWidth}px`,
          },
        }}
      >
        <Toolbar />{" "}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 4 }}>
          <ArrowBackIcon
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
          <HomeIcon sx={{ cursor: "pointer" }} onClick={() => navigate("/")} />
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            /&nbsp;{path}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "calc(100vh - 100px)",
            pt: { xs: 20, sm: 20, md: 0, lg: 0 },
          }}
        >
          <Card
            elevation={4}
            sx={{
              width: { xs: "90%", sm: "90%", md: "80%", lg: "70%" },
              p: 4,
              backgroundColor: "white",
              borderRadius: 3,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h5"
              sx={{ mb: 3, fontWeight: 600, color: "#0d47a1" }}
            >
              Update Bank Account Details
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Account Number"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={accountNo}
                    onChange={(e) => setAccountNo(e.target.value)}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Account Holder Name"
                    variant="outlined"
                    fullWidth
                    value={accountHolderName}
                    onChange={(e) => setAccountHolderName(e.target.value)}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Bank Name"
                    variant="outlined"
                    fullWidth
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="IFSC Code"
                    variant="outlined"
                    fullWidth
                    value={ifsc}
                    onChange={(e) => setIfsc(e.target.value)}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Branch"
                    variant="outlined"
                    fullWidth
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Account Type"
                    variant="outlined"
                    fullWidth
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Mobile Number"
                    variant="outlined"
                    fullWidth
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Bank Address"
                    variant="outlined"
                    fullWidth
                    value={bankAddress}
                    onChange={(e) => setBankAddress(e.target.value)}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Account Status"
                    variant="outlined"
                    fullWidth
                    value={accountStatus}
                    onChange={(e) => setAccountStatus(e.target.value)}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      py: 1.5,
                      fontWeight: 600,
                      textTransform: "capitalize",
                      backgroundColor: "#0d47a1",
                      "&:hover": {
                        backgroundColor: "#1565c0",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default UpdateAccount;
