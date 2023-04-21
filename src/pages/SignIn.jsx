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

const SignIn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sign-up");
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
            Sign in to Continue
          </Typography>
          <Spacer count={3} />
          <Grid container spacing={3} mb={-10}>
            <Grid item lg={6} alignItems={"center"}>
              <Stack spacing={2}>
                <MyTextField
                  id="outlined-basic"
                  label="Login"
                  variant="outlined"
                />
                <MyTextFieldP
                  id="outlined-basic"
                  label="Password"
                  type="password" // Add type property here
                  variant="outlined"
                />
              </Stack>
              <Stack direction="row" justifyContent="flex-end" mt={1}>
                <Typography
                  sx={{
                    color: "#1D4CF2",
                    fontSize: "14px",
                    fontFamily: "AppReguular",
                    cursor: "pointer",
                  }}
                >
                  Forget password
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
                  onClick={handleClick}
                >
                  Sign up
                </Button>
                <Button
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
                  Continue
                </Button>
              </Stack>
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

export default SignIn;
