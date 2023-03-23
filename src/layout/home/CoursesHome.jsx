import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import group from "../../images/group.png";
import flutterLogo from "../../images/flutterLogo.svg";
import dartLogo from "../../images/dartLogo.svg";
import vector from "../../images/Vector.svg";
import {
  coureseStyle,
  dartButton,
  dugaStyle,
  homeappDevelopment,
  homeViewButton,
} from "../../style/homeStyle.mjs";

const CoursesHome = () => {
  return (
    <>
      <Container>
        <Box sx={dugaStyle} mt={7}>
          <Typography sx={coureseStyle}> Courses we offer</Typography>
          <Box sx={{ paddingTop: { xs: "50px", sm: "50px", lg: "0px" } }}>
            <img
              src={group}
              style={{
                width: "100%",
                marginTop: { xs: "100px", sm: "100px", lg: "-3000px" },
              }}
              alt="group"
            />
          </Box>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={12} lg={7}></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={5}
            sx={{ marginTop: { xs: "-50px", sm: "50px", lg: "-200px" } }}
            alignItems="center"
          >
            <Stack spacing={2}>
              <Typography sx={homeappDevelopment}>App Development</Typography>
              <Typography sx={{ width: "50%", color: "#f4f4f4" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                error alias quasi libero unde officiis.
              </Typography>
              <Stack direction={"row"} spacing={2}>
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
      <Stack direction="row" justifyContent={"flex-end"}>
        <img src={vector} alt="vector" style={{ width: "100px" }} />
      </Stack>
    </>
  );
};

export default CoursesHome;
