import React from "react";
import AboutMap from "../layout/about/AboutMap";
import Slider from "../components/Slider";
import { Stack } from "@mui/material";
import AboutBootcamp from "../layout/about/AboutBootcamp";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("about")} | BootcampTm</title>
      </Helmet>
      <AboutMap />
      <Stack mt={-5}>
        <Slider />
      </Stack>
      <Stack mt={-20}>
        <AboutBootcamp />
      </Stack>
    </>
  );
};

export default About;
