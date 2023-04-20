import React from "react";
import AboutMap from "../layout/about/AboutMap";
import Slider from "../components/Slider";
import { Stack } from "@mui/material";
import AboutBootcamp from "../layout/about/AboutBootcamp";

const About = () => {
  return (
    <>
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
