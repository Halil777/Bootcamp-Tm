import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import {
  Avatar,
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

const StudentsSaysCarousel = () => {
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
                <Typography sx={titleStudentSayCarousel}>
                  Merjen Saparmyradova
                </Typography>
                <Typography sx={sub_titleStudentSayCarousel}>
                  Launch Life
                </Typography>
              </Stack>
            </Stack>
            <Stack mt={5}>
              <Typography sx={textStudentSayCarousel}>
                I am Lyudmila. I am Quality Control Engineer in Industrial
                Construction. When I was younger, I heard many stories from
                grandfather who was a civil engineer. The stories inspired me to
                eventually become an engineer. My advice for woman..I am
                Lyudmila. I am Quality Control Engineer in Industrial
                Construction. When I was younger, I heard many stories from
                grandfather who was a civil engineer.
              </Typography>
            </Stack>
          </CardActionArea>
        </Card>
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
          What our students say
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
              Leave feedback
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
    </>
  );
};

export default StudentsSaysCarousel;
