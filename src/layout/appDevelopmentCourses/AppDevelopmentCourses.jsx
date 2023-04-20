import React from "react";
import AppDevelopmentFirst from "./AppDevelopmentFirst";
import AppDevelopmentSlider from "./AppDevelopmentSlider";
import LearningEngaging from "../home/LearningEngaging";
import Spacer from "../../components/Spacer";
import StudentsSaysCarousel from "../home/StudentsSaysCarousel";
import AppDevSM from "./AppDevSM";

const AppDevelopmentCourses = () => {
  return (
    <>
      <AppDevelopmentFirst />
      <AppDevelopmentSlider />
      <AppDevSM />
      <Spacer count={8} />
      <StudentsSaysCarousel />
      <Spacer count={8} />
      <LearningEngaging />
    </>
  );
};

export default AppDevelopmentCourses;
