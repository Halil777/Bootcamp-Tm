import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import Spacer from "../../components/Spacer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import ourPartnersSanlyBilim from "../../images/ourPartnersSanlyBilim.svg";
import ourPartnestCarouselSecond from "../../images/ourPartnestCarouselSecond.svg";
import { ourPartnersItemName } from "../../style/homeStyle.mjs";

const OUrCarousel = () => {
  function createSlide() {
    return (
      <SwiperSlide>
        <Stack direction="row" alignItems={"center"}>
          <img src={ourPartnersSanlyBilim} alt="ourPartnersSanlyBilim.svg" />
          <Typography sx={ourPartnersItemName}>Sanly Bilim</Typography>
        </Stack>
      </SwiperSlide>
    );
  }

  function createSlideSecond() {
    return (
      <SwiperSlide>
        <Stack spacing={2} direction="row" alignItems={"center"}>
          <img
            src={ourPartnestCarouselSecond}
            alt="ourPartnestCarouselSecond.svg"
          />
          <Typography sx={ourPartnersItemName}>
            Launch <br /> Life
          </Typography>
        </Stack>
      </SwiperSlide>
    );
  }

  return (
    <>
      <Container>
        <Typography
          sx={{
            color: "#1D4CF2",
            fontFamily: "AppRegular",
            fontSize: "34px",
            fontWeight: "700",
          }}
        >
          Our partners
        </Typography>
        <Spacer count={3} />
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {createSlide()}
          {createSlideSecond()}
          {createSlide()}
          {createSlide()}
          {createSlideSecond()}
        </Swiper>
      </Container>
    </>
  );
};

export default OUrCarousel;
