import React from "react";
import CoursesSlider from "../layout/courses/CoursesSlider";
import Spacer from "../components/Spacer";
import CoursesHome from "../layout/home/CoursesHome";
import CoursesHomeMini from "../layout/homeMini/CoursesHomeMini";
import FullStack from "../layout/home/FullStack";
import FullStackMini from "../layout/homeMini/FullStackMini";
import ProductDesign from "../layout/home/ProductDesign";
import DataAnAlitcsPage from "../layout/home/DataAnAlitcsPage";
import LearningEngaging from "../layout/home/LearningEngaging";

const Courses = () => {
  return (
    <>
      <CoursesSlider />
      <Spacer count={3} />
      <CoursesHome />
      <CoursesHomeMini />
      <Spacer count={3} />
      <FullStack />
      <FullStackMini />
      <Spacer count={3} />
      <ProductDesign />
      <Spacer count={3} />
      <DataAnAlitcsPage />
      <Spacer count={3} />
      <LearningEngaging />
    </>
  );
};

export default Courses;
