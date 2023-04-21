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
import Spacer from "./Spacer.jsx";
import { useTranslation } from "react-i18next";

const Slider = ({ slides }) => {
  const { t } = useTranslation();

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
                  <Typography sx={whiteText}>{t("whenCome")}</Typography>
                  <Stack direction="row" spacing={1}>
                    <Typography sx={whiteText}>{t("bootcampIt")}</Typography>
                    <Typography sx={shapeText}>{t("never")} </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Typography sx={shapeText}>{t("late")} </Typography>
                    <Typography sx={whiteText}>{t("to")} </Typography>
                    <Typography sx={shapeText}> {t("learN")}</Typography>
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

  function createMiniSlider() {
    return (
      <SwiperSlide>
        <Stack>
          <img
            src={slider1}
            style={{
              height: "100%",
              width: "100%",
              listStyle: "none",
              borderTopRightRadius: "15px",
              borderTopLeftRadius: "15px",
            }}
            alt="slider"
          />
          <Box
            sx={{
              background: "#CA0088",
              p: 3,
              borderRadius: "0px 0px 15px 15px",
            }}
          >
            <Stack>
              <Typography sx={{ ...whiteText, fontSize: "22px" }}>
                {t("whenCome")}
              </Typography>
              <Stack direction="row" spacing={1}>
                <Typography sx={{ ...whiteText, fontSize: "22px" }}>
                  {t("bootcampIt")}
                </Typography>
                <Typography sx={{ ...shapeText, fontSize: "22px" }}>
                  {t("never")}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Typography sx={{ ...shapeText, fontSize: "22px" }}>
                  {t("late")}
                </Typography>
                <Typography sx={{ ...whiteText, fontSize: "22px" }}>
                  {t("to")}
                </Typography>
                <Typography sx={{ ...shapeText, fontSize: "22px" }}>
                  {t("learN")}
                </Typography>
                <Typography sx={{ ...whiteText, fontSize: "22px" }}>
                  !
                </Typography>
              </Stack>
            </Stack>
            <Spacer count={2} />
          </Box>
        </Stack>
      </SwiperSlide>
    );
  }
  return (
    <>
      <Container>
        <Box sx={{ display: { sm: "block", lg: "block", xs: "none" } }}>
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
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none", lg: "none" } }}>
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {createMiniSlider()}
          </Swiper>
        </Box>
      </Container>
    </>
  );
};

export default Slider;
