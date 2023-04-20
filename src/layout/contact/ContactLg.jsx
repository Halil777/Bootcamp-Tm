import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";
import Spacer from "../../components/Spacer";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  surname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string().matches(/^\+993[0-9]{8}$/, "Invalid phone number"),
  message: Yup.string().required("Required"),
});

const ContactLg = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      phoneNumber: "+993",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  const handlePhoneChange = (event) => {
    const input = event.target.value;
    const phoneRegex = /^\+993[0-9]{0,8}$/;
    if (phoneRegex.test(input)) {
      formik.setFieldValue("phone", input);
    }
  };

  return (
    <>
      <Spacer count={2} />
      <Box sx={{ display: { lg: "block", sm: "none", xs: "none" } }}>
        <Container>
          <Box
            sx={{
              backgroundSize: "100%",
              width: "100%",
              height: "100%",
              background: "url(/image/Rectangle 160 (3).svg)",
              backgroundPosition: "100% 100%",
              bakgroundRepeat: "no-repeat",
            }}
          >
            <Spacer count={2} />
            <Typography
              sx={{
                color: "#CA0088",
                fontFamily: "AppRegular",
                fontSize: "30px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Reach us out!
            </Typography>
            <Spacer count={2} />
            <Grid container>
              <Grid item lg={6}>
                <form onSubmit={formik.handleSubmit}>
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "rgba(255, 255, 255, 0.2)",
                        },
                        "&:hover fieldset": {
                          borderColor: "rgba(255, 255, 255, 0.2)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "rgba(255, 255, 255, 0.2)",
                        },
                      },
                      "& .MuiOutlinedInput-input": {
                        color: "rgba(255, 255, 255, 0.15)",
                      },
                      "&::placeholder": {
                        color: "#fff",
                      },
                    }}
                  />
                  <Spacer count={1} />

                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "rgba(255, 255, 255, 0.2)",
                        },
                        "&:hover fieldset": {
                          borderColor: "rgba(255, 255, 255, 0.2)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "rgba(255, 255, 255, 0.2)",
                        },
                      },
                      "& .MuiOutlinedInput-input": {
                        color: "rgba(255, 255, 255, 0.15)",
                      },
                    }}
                  />
                  <Spacer count={1} />
                  <TextField
                    fullWidth
                    id="phone"
                    name="phone"
                    label="Phone"
                    value={formik.values.phone}
                    onChange={handlePhoneChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                  <Spacer count={1} />
                  <TextField
                    fullWidth
                    id="message"
                    name="message"
                    label="Your message"
                    multiline
                    rows={4}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.message && Boolean(formik.errors.message)
                    }
                    helperText={formik.touched.message && formik.errors.message}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "rgba(255, 255, 255, 0.2)",
                        },
                        "&:hover fieldset": {
                          borderColor: "rgba(255, 255, 255, 0.2)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "rgba(255, 255, 255, 0.2)",
                        },
                      },
                      "& .MuiOutlinedInput-input": {
                        color: "rgba(255, 255, 255, 0.15)",
                      },
                    }}
                  />
                  <Spacer count={2} />
                  <Stack direction="row" justifyContent="flex-end">
                    <Button color="primary" variant="contained" type="submit">
                      Confirm
                    </Button>
                  </Stack>
                </form>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ContactLg;
