import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  coursesButton,
  enrollButton,
  homeExperienceBoxStyle,
  homeExperienceStyle,
  homeFirstButton,
  homeTextStyle,
  homeTitleFirst,
  homeTitleSecond,
  mapSection,
} from "../style/homeStyle.mjs";
import map from "../images/map.svg";
import womens from "../images/womens.png";
import CoursesHome from "../layout/CoursesHome.jsx";

const Home = () => {
  return (
    <>
      <Grid container alignItems={"center"} sx={{ zIndex: 2 }}>
        <Grid item sm={12} lg={6} xs={12}>
          <Stack spacing={2}>
            <Button sx={homeFirstButton} variant="contained">
              First bootcamp in Turkmenistan
            </Button>
            <Stack>
              <Typography sx={homeTitleFirst}>
                Start your new <br /> career journey with
              </Typography>
              <Typography sx={homeTitleSecond}>BootcampTm</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" sx={enrollButton}>
                Enroll right now
              </Button>
              <Button variant="outlined" sx={coursesButton}>
                Courses
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item sm={12} lg={6} xs={12}>
          <Box sx={{ zIndex: "10" }}>
            <img
              src={womens}
              style={{ width: "100%", zIndex: "20" }}
              alt="womens"
            />
          </Box>
        </Grid>
      </Grid>
      <Box sx={mapSection}>
        <Grid container alignItems={"center"}>
          <Grid item sm={3} lg={3} pt={20}>
            <Stack direction="row" alignItems={"center"} spacing={3}>
              <Box sx={homeExperienceBoxStyle}>
                <Typography sx={homeExperienceStyle}>+4</Typography>
              </Box>
              <Typography sx={homeTextStyle}>
                year <br /> experience
              </Typography>
            </Stack>
            <Stack
              pl={4}
              pt={2}
              direction="row"
              alignItems={"center"}
              spacing={3}
            >
              <Box sx={homeExperienceBoxStyle}>
                <Typography sx={homeExperienceStyle}>+100</Typography>
              </Box>
              <Typography sx={homeTextStyle}>
                students <br /> every season
              </Typography>
            </Stack>
            <Stack
              pl={8}
              pt={2}
              direction="row"
              alignItems={"center"}
              spacing={3}
            >
              <Box sx={homeExperienceBoxStyle}>
                <Typography sx={homeExperienceStyle}>+10</Typography>
              </Box>
              <Typography sx={homeTextStyle}>
                qualifield <br /> teachers
              </Typography>
            </Stack>
          </Grid>
          <Grid item sm={9} lg={9}>
            <Box sx={{ display: { xs: "none", sm: "flex" }, zIndex: "1" }}>
              <img src={map} alt="map" style={{ width: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <CoursesHome />
    </>
  );
};

export default Home;
