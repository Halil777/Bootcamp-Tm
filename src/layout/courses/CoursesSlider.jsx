import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Spacer from "../../components/Spacer";
import courseImage from "../../style/coursesImage/51364.jpg";

const CoursesSlider = () => {
  function createSlider() {
    return (
      <SwiperSlide>
        <Box sx={{ background: "#1C104F", borderRadius: "24px" }}>
          <Grid container>
            <Grid item lg={6} sm={6}>
              <Stack p={6} spacing={2}>
                <Typography
                  sx={{
                    fontFamily: "AppRegular",
                    fontWeight: "700",
                    fontSize: { lg: "33px", sm: "24px" },
                    color: "#FFFFFF",
                  }}
                >
                  Special discount in <br /> Web development <br /> courses
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "AppRegular",
                    fontWeight: "600",
                    fontSize: { lg: "18px", sm: "16px" },
                    color: "#FFFFFF",
                  }}
                >
                  Choose your desired courses or <br /> webinars
                </Typography>
                <Button
                  sx={{
                    fontFamily: "AppRegular",
                    fontWeight: "600",
                    fontSize: { lg: "16px", sm: "16px" },
                    color: "#1d4cf2",
                    textTransform: "none",
                    backgroundColor: "#F4F4F4",
                    boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.3)",
                    borderRadius: "10px",
                    width: "180px",

                    "&:hover": {
                      backgroundColor: "#F4F4F4",
                    },
                  }}
                >
                  Go to course
                </Button>
              </Stack>
            </Grid>
            <Grid item lg={6} sm={6}>
              <img
                src={courseImage}
                alt="coursesImage"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "0px 24px 24px 0px",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </SwiperSlide>
    );
  }

  function createSliderMini() {
    return (
      <SwiperSlide>
        <Box sx={{ background: "#1C104F", borderRadius: "24px" }}>
          <Stack p={4} spacing={2}>
            <Typography
              sx={{
                fontFamily: "AppRegular",
                fontWeight: "700",
                fontSize: "26px",
                color: "#FFFFFF",
              }}
            >
              Special discount in <br /> Web development <br /> courses
            </Typography>
            <Button
              sx={{
                fontFamily: "AppRegular",
                fontWeight: "600",
                fontSize: { lg: "16px", sm: "16px" },
                color: "#1d4cf2",
                textTransform: "none",
                backgroundColor: "#F4F4F4",
                boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.3)",
                borderRadius: "10px",
                width: "180px",

                "&:hover": {
                  backgroundColor: "#F4F4F4",
                },
              }}
            >
              Go to course
            </Button>
          </Stack>
        </Box>
      </SwiperSlide>
    );
  }
  return (
    <>
      <Container>
        <Spacer count={3} />
        <Box sx={{ display: { lg: "block ", sm: "block", xs: "none" } }}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {createSlider()}
            {createSlider()}
            {createSlider()}
            {createSlider()}
          </Swiper>
        </Box>
        <Box sx={{ display: { xs: "block", lg: "none", sm: "none" } }}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {createSliderMini()}
            {createSliderMini()}
            {createSliderMini()}
          </Swiper>
        </Box>
      </Container>
    </>
  );
};

export default CoursesSlider;
