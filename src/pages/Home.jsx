import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
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
import Slider from "../components/Slider.jsx";
import BootcampUnique from "../layout/home/BootcampUnique.jsx";
import StudentProcess from "../layout/home/StudentProcess.jsx";
import StudentsSaysCarousel from "../layout/home/StudentsSaysCarousel.jsx";
import Spacer from "../components/Spacer.jsx";
import OUrCarousel from "../layout/home/OUrCarousel.jsx";
import LearningEngaging from "../layout/home/LearningEngaging.jsx";
import DataAnAlitcsPage from "../layout/home/DataAnAlitcsPage.jsx";
import Start from "../layout/homeMini/Start.jsx";
import SecondMiniHome from "../layout/homeMini/SecondMiniHome.jsx";
import CoursesHomeMini from "../layout/homeMini/CoursesHomeMini.jsx";
import FullStackMini from "../layout/homeMini/FullStackMini.jsx";

const Home = () => {
  return (
    <>
      <Container>
        <Box sx={{ display: { xs: "none", sm: "block", lg: "block" } }}>
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
        </Box>
        <Start />
      </Container>
      <HomeMap />
      <Spacer count={2} />
      <SecondMiniHome />
      <CoursesHome />
      <Spacer count={2} />
      <CoursesHomeMini />
      <Spacer count={2} />
      <FullStack />
      <Spacer count={2} />
      <FullStackMini />
      <Spacer count={2} />
      <ProductDesign />
      <DataAnAlitcsPage />
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
