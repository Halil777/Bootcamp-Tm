import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import Spacer from "../components/Spacer";
import TextField from "@mui/material/TextField";
import vector from "../style/coursesImage/Vector.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { enrollSection } from "../style/enroll.mjs";
import { Helmet } from "react-helmet-async";
import * as Yup from "yup";
import { useFormik } from "formik";

const validationSchema = Yup.object({
  login: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export const MyTextField = styled(TextField)({
  "& .MuiInputLabel-root": {
    color: "#fff", // Change label color here
    borderRadius: "14px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: "14px",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.4)",
      borderRadius: "14px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "your-color-here", // Change focus border color here
      borderRadius: "14px",
    },
    "& .MuiInputBase-input": {
      color: "#fff", // Change text color here
      borderRadius: "14px",
    },
  },
});

export const MyTextFieldP = styled(TextField)({
  "& .MuiInputLabel-root": {
    color: "#fff",
    borderRadius: "14px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: "14px",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.4)",
      borderRadius: "14px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "your-color-here",
      borderRadius: "14px",
    },
    "& .MuiInputBase-input": {
      color: "#fff",
      borderRadius: "14px",
    },
    "& .MuiInputAdornment-root svg": {
      color: "#fff", // Change icon color here
      borderRadius: "14px",
    },
    "& .MuiInputBase-input[type='password']": {
      letterSpacing: "0.5em", // Add custom style for password input here
      borderRadius: "14px",
    },
  },
});

const SignIn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sign-up");
  };

  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <>
      <Helmet>
        <title>{t("login")} | BootcampTm</title>
      </Helmet>
      <Spacer count={3} />
      <Container>
        <Box sx={enrollSection} p={{ lg: 10, sm: 7, xs: 5 }}>
          <Typography
            sx={{
              color: "#CA0088",
              fontFamily: "AppRegular",
              fontWeight: "600",
              fontSize: { lg: "30px", sm: "25px", xs: "20px" },
              textAlign: "center",
            }}
          >
            {t("signintoContinue")}
          </Typography>
          <Spacer count={3} />
          <Grid container spacing={3} mb={-10}>
            <Grid item lg={6} alignItems={"center"}>
              <form onSubmit={formik.handleSubmit}>
                <Stack spacing={2}>
                  <MyTextField
                    id="login"
                    label={t("login")}
                    variant="outlined"
                    value={formik.values.login}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.login && Boolean(formik.errors.login)}
                    helperText={formik.touched.login && formik.errors.login}
                  />
                  <MyTextFieldP
                    id="password"
                    label={t("password")}
                    type="password" // Add type property here
                    variant="outlined"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Stack>
                <Stack direction="row" spacing={2} mt={2}>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#CA0088",
                      fontSize: "16px",
                      fontFamily: "AppReguular",
                      border: "1px solid #CA0088",
                      borderRadius: "10px",
                      "&:hover": {
                        border: "1px solid #CA0088",
                        borderRadius: "10px",
                      },
                    }}
                    onClick={handleClick}
                  >
                    {t("signup")}
                  </Button>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      textTransform: "none",
                      color: "#F4F4F4",
                      fontSize: "16px",
                      fontFamily: "AppReguular",
                      borderRadius: "10px",
                      background: "#1D4CF2",
                      boxShadow: "0px 10px 40px rgba(29, 76, 242, 0.2)",
                      "&:hover": {
                        background: "#1D4CF2",
                      },
                    }}
                  >
                    {t("continue")}
                  </Button>
                </Stack>
              </form>
            </Grid>
            <Grid item lg={6} mt={{ lg: 0, sm: 0, xs: 3 }}>
              <img src={vector} style={{ width: "100%" }} alt="vector" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default SignIn;
