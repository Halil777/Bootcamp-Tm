import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import carouselAvatar from "../../images/carouselAvatar.svg";
import Spacer from "../../components/Spacer";
import {
  carouselArrowIcon,
  leaveFeedbackBtn,
  sub_titleStudentSayCarousel,
  textStudentSayCarousel,
  titleStudentSayCarousel,
} from "../../style/homeStyle.mjs";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import { useTranslation } from "react-i18next";

const StudentsSaysCarousel = () => {
  const { t } = useTranslation();

  const swiper = useSwiper();

  function createSlide() {
    return (
      <SwiperSlide>
        <Card
          sx={{
            maxWidth: 480,
            padding: "20px",
            background: "#1c104f",
            borderRadius: "24px",
          }}
        >
          <CardActionArea>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                sx={{ width: 70, height: 70 }}
                alt="Remy Sharp"
                src={carouselAvatar}
              />
              <Stack>
                <Typography
                  sx={{
                    ...titleStudentSayCarousel,
                    fontSize: { lg: "20px", sm: "16px", xs: "12px" },
                  }}
                >
                  Merjen Saparmyradova
                </Typography>
                <Typography
                  sx={{
                    ...sub_titleStudentSayCarousel,
                    fontSize: { lg: "14px", sm: "14px", xs: "12px" },
                  }}
                >
                  {t("launchLife")}
                </Typography>
              </Stack>
            </Stack>
            <Stack mt={5}>
              <Typography sx={textStudentSayCarousel}>
                {t("sliderText")}
              </Typography>
            </Stack>
          </CardActionArea>
        </Card>
      </SwiperSlide>
    );
  }
  return (
    <>
      <Box sx={{ display: { lg: "block", sm: "block", xs: "none" } }}>
        <Container>
          <Typography
            sx={{
              color: "#1D4CF2",
              fontFamily: "AppRegular",
              fontSize: "34px",
              fontWeight: "700",
            }}
          >
            {t("whatOurStudentsSay")}
          </Typography>
          <Spacer count={3} />
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{ nextEl: ".next", prevEl: ".prev" }}
            spaceBetween={50}
            slidesPerView={2}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {createSlide()}
            {createSlide()}
            {createSlide()}
            {createSlide()}
          </Swiper>
          <Spacer count={2} />
          <Stack
            direction="row"
            justifyContent={{ lg: "flex-end", sm: "center", xs: "center" }}
          >
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" sx={leaveFeedbackBtn}>
                {t("leaveFeedback")}
              </Button>
              <Stack direction="row">
                <IconButton
                  sx={carouselArrowIcon}
                  onClick={() => swiper.slidePrev()}
                >
                  <ExpandCircleDownOutlinedIcon
                    sx={{ rotate: "90deg", fontSize: "32px" }}
                  />
                </IconButton>
                <IconButton
                  sx={carouselArrowIcon}
                  onClick={() => swiper.slideNext()}
                >
                  <ExpandCircleDownOutlinedIcon
                    sx={{ rotate: "-90deg", fontSize: "32px" }}
                  />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container>
        <Box sx={{ display: { lg: "none", sm: "none", xs: "block" } }}>
          <Typography
            sx={{
              color: "#1D4CF2",
              fontFamily: "AppRegular",
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            {t("whatOurStudentsSay")}
          </Typography>
          <Spacer count={2} />
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{ nextEl: ".next", prevEl: ".prev" }}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {createSlide()}
            {createSlide()}
            {createSlide()}
            {createSlide()}
          </Swiper>
          <Spacer count={1} />
          <Stack direction="row" justifyContent="center">
            <Button variant="outlined" sx={leaveFeedbackBtn}>
              {t("leaveFeedback")}
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default StudentsSaysCarousel;
