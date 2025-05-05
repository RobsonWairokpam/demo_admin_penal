import { FC, useState } from "react";
import Navbar from "../components/appBar";
import {
  Box,
  Button,
  Card,
  Grid,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";

const AddAccount: FC = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "");
  const { id } = useParams();
  const navigate = useNavigate();
  const drawerWidth = 240;

  const [formData, setFormData] = useState({
    accountHolderName: "",
    branch: "",
    bankName: "",
    ifsc: "",
    accountNo: "",
    accountType: "",
    mobileNumber: "",
    email: "",
    bankAddress: "",
    accountStatus: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Account data:", formData, "Employee ID:", id);
    navigate("/adminDashboard");
  };

  const inputFields = [
    {
      label: "Account Number",
      name: "accountNo",
      type: "number",
      required: true,
    },
    { label: "Account Holder Name", name: "accountHolderName", required: true },
    { label: "Bank Name", name: "bankName", required: true },
    { label: "IFSC Code", name: "ifsc", required: true },
    { label: "Branch", name: "branch", required: true },
    {
      label: "Account Type",
      name: "accountType",
      type: "select",
      options: ["Business", "Saving", "Other"],
    },
    { label: "Mobile Number", name: "mobileNumber" },
    { label: "Email Address", name: "email" },
    { label: "Bank Address", name: "bankAddress" },
    {
      label: "Account Status",
      name: "accountStatus",
      type: "select",
      options: ["Active", "Inactive"],
    },
  ];

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
        <Toolbar />
        <Box
          component={"div"}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 4 }}>
            <ArrowBackIcon
              sx={{ cursor: "pointer" }}
              onClick={() => navigate(-1)}
            />
            <HomeIcon
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/adminDashboard")}
            />
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              /&nbsp;{path}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // height: "calc(100vh - 100px)",
              // minHeight: "calc(100vh - 100px)",
              minHeight: "80vh",

              // pt: { xs: 20, sm: 20, md: 0, lg: 0 },
            }}
          >
            <Card
              elevation={4}
              sx={{
                // width: { xs: "90%", sm: "90%", md: "80%", lg: "70%" },
                width: "100%",
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
                Add Employee Bank Account Details
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  {inputFields.map((field) => (
                    <Grid size={{ xs: 12, md: 6, lg: 4 }} key={field.name}>
                      <Box sx={{ width: "100%" }}>
                        <Typography sx={{ fontWeight: 500 }}>
                          {field.label} &nbsp;
                          {field.required && (
                            <span style={{ color: "red" }}>*</span>
                          )}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "100%" }}>
                        {field.type === "select" ? (
                          <TextField
                            select
                            fullWidth
                            size="small"
                            variant="outlined"
                            required={field.required ? true : false}
                            name={field.name}
                            value={
                              formData[field.name as keyof typeof formData]
                            }
                            onChange={handleChange}
                          >
                            {field.options?.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                          </TextField>
                        ) : (
                          <TextField
                            fullWidth
                            size="small"
                            variant="outlined"
                            required={field.required ? true : false}
                            name={field.name}
                            type={field.type || "text"}
                            value={
                              formData[field.name as keyof typeof formData]
                            }
                            onChange={handleChange}
                          />
                        )}
                      </Box>
                    </Grid>
                  ))}{" "}
                </Grid>

                {/* <Grid size={{ xs: 12 }}> */}
                <Box component={"div"} mt={4}>
                  <Button
                    type="submit"
                    variant="contained"
                    // fullWidth
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
                </Box>

                {/* </Grid> */}
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddAccount;
