import React from "react";
import { Box, Typography } from "@mui/material";
import { coureseStyle, dugaStyle, vectorStyle } from "../style/homeStyle.mjs";
import group from "../images/group.png";

const CoursesHome = () => {
  return (
    <>
      <Box sx={dugaStyle}>
        <Typography sx={coureseStyle}> Courses we offer</Typography>
        <Box>
          <img
            src={group}
            style={{ width: "100%", marginTop: "-100px" }}
            alt="group"
          />
        </Box>
      </Box>
    </>
  );
};

export default CoursesHome;
