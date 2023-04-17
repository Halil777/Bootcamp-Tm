import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  coureseStyle,
  dartButton,
  homeViewButton,
  homeappDevelopment,
} from "../../style/homeStyle.mjs";
import flutterLogo from "../../images/flutterLogo.svg";
import dartLogo from "../../images/dartLogo.svg";

const CoursesHomeMini = () => {
  return (
    <Box sx={{ display: { sm: "block", xs: "block", lg: "none" } }}>
      <Container>
        <Typography sx={{ ...coureseStyle, textAlign: "center" }}>
          Courses we offer
        </Typography>
        <Grid container alignItems="center">
          <Grid
            item
            sm={6}
            xs={12}
            sx={{ marginBottom: { xs: "30px", sm: "0" } }}
          >
            <Stack spacing={2}>
              <Typography
                sx={{
                  ...homeappDevelopment,
                  textAlign: { sm: "start", xs: "center" },
                }}
              >
                App development
              </Typography>
              <Typography
                sx={{
                  color: "#d8d8d8",
                  fontFamily: "AppRegular",
                  fontWeight: "400",
                  fontSize: "14px",
                  textAlign: { sm: "start", xs: "center" },
                }}
              >
                Learn how to create IOS and Android <br /> mobile applications
                in Bootcamp <br /> with qualified teachers.
              </Typography>
            </Stack>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Stack
              spacing={2}
              sx={{
                display: "flex",
                alignItems: { sm: "flex-start", xs: "center" },
              }}
            >
              <Stack direction="row" spacing={2}>
                <Button sx={dartButton} variant="contained">
                  <img
                    src={dartLogo}
                    style={{ width: "15px", marginRight: "10px" }}
                    alt="dart logo"
                  />
                  Dart
                </Button>
                <Button sx={dartButton} variant="contained">
                  <img
                    src={flutterLogo}
                    style={{ width: "15px", marginRight: "10px" }}
                    alt="flutter logo"
                  />
                  Flutter
                </Button>
              </Stack>
              <Button sx={homeViewButton} variant="contained">
                View details
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CoursesHomeMini;
