import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Spacer from "../components/Spacer";
import vector from "../style/coursesImage/Vector.png";
import { useTranslation } from "react-i18next";
import { enrollSection } from "../style/enroll.mjs";
import { Helmet } from "react-helmet-async";
import * as Yup from "yup";
import { useFormik } from "formik";
import { MyTextField, MyTextFieldP } from "./SignIn";
import { ToastContainer } from "react-toastify";
import { showError, showSuccess } from "../components/Alert";

const SignUp = () => {
  const { t } = useTranslation();

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      showError("Passwords do not match!");
    } else {
      showSuccess("Password  is correct!");
      formik.handleSubmit();
    }
  };

  const validationSchema = Yup.object({
    login: Yup.string().required(t("required")),
    password: Yup.string().required(t("required")),
    confirmPassword: Yup.string()
      .required(t("required"))
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      showSuccess("You successfully signed up");
      resetForm({
        values: {
          login: "",
          password: "",
          confirmPassword: "",
        },
      });
      resetForm();
    },
  });

  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>{t("signup")} | BootcampTm</title>
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
            {t("signuptoLearnMore")}
          </Typography>
          <Spacer count={{ lg: 3, sm: 2, xs: 2 }} />
          <Grid container spacing={10} mb={-10}>
            <Grid item lg={6} alignItems={"center"}>
              <form onSubmit={handleSubmit}>
                <MyTextField
                  fullWidth
                  id="login"
                  label={t("login")}
                  variant="outlined"
                  value={formik.values.login}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.login && Boolean(formik.errors.login)}
                  helperText={formik.touched.login && formik.errors.login}
                />
                <Spacer count={1} />
                <MyTextFieldP
                  fullWidth
                  id="password"
                  label={t("password")}
                  type="password" // Add type property here
                  variant="outlined"
                  value={formik.values.password}
                  onChange={(event) => {
                    handlePasswordChange(event);
                    formik.handleChange(event);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <Spacer count={1} />
                <MyTextFieldP
                  fullWidth
                  id="confirmPassword"
                  label={t("confirmPassword")}
                  type="password" // Add type property here
                  variant="outlined"
                  value={confirmPassword}
                  onChange={(event) => {
                    handleConfirmPasswordChange(event);
                    formik.handleChange(event);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                />
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
                    //   onClick={handleClick}
                  >
                    {t("signup")}
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
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
            <Grid item lg={6}>
              <img src={vector} style={{ width: "100%" }} alt="vector" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default SignUp;
