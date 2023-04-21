import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import Spacer from "../components/Spacer";
import TextField from "@mui/material/TextField";
import vector from "../style/coursesImage/Vector.png";
import { useTranslation } from "react-i18next";

const MyTextField = styled(TextField)({
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

const MyTextFieldP = styled(TextField)({
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
      alert("Passwords do not match!");
    } else {
      alert("Passwords match!");
    }
  };
  return (
    <>
      <Spacer count={3} />
      <Container>
        <Box>
          <Typography
            sx={{
              color: "#CA0088",
              fontFamily: "AppRegular",
              fontWeight: "600",
              fontSize: "30px",
              textAlign: "center",
            }}
          >
            {t("signuptoLearnMore")}
          </Typography>
          <Spacer count={3} />
          <Grid container spacing={3} mb={-10}>
            <Grid item lg={6} alignItems={"center"}>
              <form onSubmit={handleSubmit}>
                <MyTextField
                  fullWidth
                  id="outlined-basic"
                  label={t("login")}
                  variant="outlined"
                />
                <Spacer count={1} />
                <MyTextFieldP
                  fullWidth
                  id="password"
                  label={t("password")}
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <Spacer count={1} />
                <MyTextFieldP
                  fullWidth
                  id="confirm-password"
                  label={t("confirmPassword")}
                  type="password"
                  variant="outlined"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />

                <Stack direction="row" justifyContent="flex-end" mt={1}>
                  <Typography
                    sx={{
                      color: "#1D4CF2",
                      fontSize: "14px",
                      fontFamily: "AppReguular",
                      cursor: "pointer",
                    }}
                  >
                    {t("forgetPassword")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2} mt={1}>
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
