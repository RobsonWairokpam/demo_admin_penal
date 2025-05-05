import { FC, useState } from "react";
import Navbar from "../components/appBar";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
const AddEmployee: FC = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "");

  const navigate = useNavigate();
  const drawerWidth = 240;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    jobRole: "",
    dateOfJoining: "",
    gender: "",
    address: "",
    phone: "",
    nationality: "",
    maritualStatus: "",
    dateOfBirth: "",
    religion: "",
    cast: "",
    profilePhoto: null as File | null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;

    if (target.type === "file" && target.files) {
      const file = target.files[0];
      setFormData((prev) => ({ ...prev, [name]: file }));
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    // console.log("employeeList", name, email, role, jobRole);

    navigate("/adminDashboard");
  };
  console.log({ Datatata: formData });
  const inputFields = [
    { label: "Name", name: "name", required: true },
    { label: "Email", name: "email", required: true },
    { label: "Address", name: "address", required: true },
    { label: "Phone", name: "phone", required: true },
    {
      label: "Date Of Birth",
      name: "dateOfBirth",
      type: "date",
      required: true,
    },
    {
      label: "Gender",
      name: "gender",
      type: "select",
      options: ["Male", "Female", "Other"],
    },
    {
      label: "Marital Status",
      name: "maritualStatus",
      type: "select",
      options: ["Single", "Married", "UnMarried", "Divorce"],
    },
    {
      label: "Nationality",
      name: "nationality",
      type: "select",
      options: ["India", "America", "Other"],
    },
    {
      label: "Religion",
      name: "religion",
    },
    {
      label: "Cast",
      name: "cast",
    },
    { label: "Job Role", name: "jobRole" },
    { label: "Date Of Joining", name: "dateOfJoining", type: "date" },
    {
      label: "Role",
      name: "role",
      type: "radio",
      options: ["hr", "employee"],
    },

    { label: "Passport Photo", name: "profilePhoto", type: "file" },
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
        <Toolbar />{" "}
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
                Add New Employee
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  {inputFields.map((field) => (
                    <Grid size={{ xs: 12, md: 6, lg: 4 }} key={field.name}>
                      <Typography sx={{ fontWeight: 500, mb: 1 }}>
                        {field.label} &nbsp;
                        {field.required && (
                          <span style={{ color: "red" }}>*</span>
                        )}
                      </Typography>

                      {field.name === "profilePhoto" && imagePreview && (
                        <Box mb={2}>
                          <Typography variant="subtitle2">
                            Image Preview:
                          </Typography>
                          <img
                            src={imagePreview}
                            alt="Preview"
                            style={{
                              width: 150,
                              height: "auto",
                              borderRadius: 8,
                              border: "1px solid #ccc",
                              marginTop: 8,
                            }}
                          />
                        </Box>
                      )}

                      {field.type === "file" ? (
                        <TextField
                          fullWidth
                          size="small"
                          variant="outlined"
                          required={field.required ? true : false}
                          name={field.name}
                          type="file"
                          onChange={handleChange}
                          inputProps={{ accept: "image/*" }}
                        />
                      ) : field.type === "select" ? (
                        <FormControl fullWidth variant="outlined">
                          <Select
                            size="small"
                            name={field.name}
                            value={
                              (formData[
                                field.name as keyof typeof formData
                              ] as string) || ""
                            }
                            onChange={handleChange}
                          >
                            {field.options?.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      ) : field.type === "radio" ? (
                        <FormControl>
                          <RadioGroup
                            row
                            name={field.name}
                            value={
                              formData[field.name as keyof typeof formData]
                            }
                            onChange={handleChange}
                          >
                            {field.options?.map((option) => (
                              <FormControlLabel
                                key={option}
                                value={option}
                                control={<Radio />}
                                label={option}
                              />
                            ))}
                          </RadioGroup>
                        </FormControl>
                      ) : (
                        <TextField
                          fullWidth
                          size="small"
                          variant="outlined"
                          required={field.required ? true : false}
                          name={field.name}
                          type={field.type || "text"}
                          value={
                            formData[field.name as keyof typeof formData] || ""
                          }
                          onChange={handleChange}
                        />
                      )}
                    </Grid>
                  ))}
                </Grid>
              </Box>
              {/* <Grid size={{ xs: 12 }}> */}
              <Box component={"div"} mt={4}>
                {" "}
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
              {/* </Grid> */}
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddEmployee;
