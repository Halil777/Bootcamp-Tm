import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { slider } from "../style/slider.mjs";
import slider1 from "../images/slider1.png";
import sliderLogo from "../images/sliderLogo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { shapeText, whiteText } from "../style/homeStyle.mjs";

const Slider = ({ slides }) => {
  function createSlide() {
    return (
      <SwiperSlide>
        <Box sx={slider}>
          <Grid container mb={10}>
            <Grid item lg={8}>
              <Stack
                direction="column"
                sx={{ height: "100%" }}
                justifyContent={"space-between"}
                p={5}
              >
                <Stack>
                  <Typography sx={whiteText}>When it comes to </Typography>
                  <Stack direction="row" spacing={1}>
                    <Typography sx={whiteText}>Bootcamp, it's</Typography>
                    <Typography sx={shapeText}>never </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Typography sx={shapeText}>late </Typography>
                    <Typography sx={whiteText}>to </Typography>
                    <Typography sx={shapeText}> learn</Typography>
                  </Stack>
                </Stack>
                <Stack>
                  <img
                    style={{ width: "150px" }}
                    src={sliderLogo}
                    alt={"slider-logo"}
                  />
                </Stack>
              </Stack>
            </Grid>
            <Grid item lg={4}>
              <Box>
                <img
                  src={slider1}
                  style={{
                    height: "100%",
                    width: "100%",
                    listStyle: "none",
                    borderTopRightRadius: "15px",
                    borderBottomRightRadius: "15px",
                  }}
                  alt="slider"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </SwiperSlide>
    );
  }
  return (
    <>
      <Container>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {createSlide()}
          {createSlide()}
          {createSlide()}
          {createSlide()}
        </Swiper>
      </Container>
    </>
  );
};

export default Slider;
