import React from "react";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import {
  coursesButton,
  enrollButton,
  homeFirstButton,
  homeTitleFirst,
  homeTitleSecond,
} from "../style/homeStyle.mjs";
import womens from "../images/womens.png";
import HomeMap from "../layout/home/HomeMap.jsx";
import CoursesHome from "../layout/home/CoursesHome.jsx";
import FullStack from "../layout/home/FullStack.jsx";
import ProductDesign from "../layout/home/ProductDesign.jsx";
// import DataAnalytics from "../layout/home/DataAnalytics.jsx";
import Slider from "../components/Slider.jsx";
import BootcampUnique from "../layout/home/BootcampUnique.jsx";
import StudentProcess from "../layout/home/StudentProcess.jsx";
import StudentsSaysCarousel from "../layout/home/StudentsSaysCarousel.jsx";
import Spacer from "../components/Spacer.jsx";
import OUrCarousel from "../layout/home/OUrCarousel.jsx";
import LearningEngaging from "../layout/home/LearningEngaging.jsx";

const Home = () => {
  return (
    <>
      <Container>
        <Grid container alignItems={"center"} sx={{ zIndex: 2 }}>
          <Grid item sm={12} lg={6} xs={12} zIndex={10}>
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
          <Grid item sm={12} lg={6} xs={12} zIndex={10}>
            <img
              src={womens}
              style={{ width: "100%", zIndex: 10 }}
              alt="womens"
            />
          </Grid>
        </Grid>
      </Container>
      <HomeMap />
      <CoursesHome />
      <FullStack />
      <ProductDesign />
      {/* <DataAnalytics /> */}
      <Slider />
      <BootcampUnique />
      <StudentProcess />
      <Spacer count={5} />
      <StudentsSaysCarousel />
      <Spacer count={5} />
      <OUrCarousel />
      <Spacer count={5} />
      <LearningEngaging />
    </>
  );
};

export default Home;
