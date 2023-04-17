import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import {
  coursesButton,
  enrollButton,
  homeFirstButton,
  homeTitleFirst,
  homeTitleSecond,
} from "../../style/homeStyle.mjs";
import womens from "../../images/womens.png";

const Start = () => {
  return (
    <Box sx={{ display: { xs: "block", lg: "none", sm: "none" } }}>
      <Stack spacing={2}>
        <Button sx={homeFirstButton} variant="contained">
          First bootcamp in Turkmenistan
        </Button>
        <Stack>
          <Typography sx={homeTitleFirst}>
            Start your new <br /> career journey with
          </Typography>
          <Typography sx={homeTitleSecond}>BootcampTm</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="flex-end" width="100%">
        <img src={womens} alt="womens" style={{ width: "70%" }} />
      </Stack>
      <Stack spacing={2}>
        <Button variant="outlined" sx={coursesButton}>
          Courses
        </Button>
        <Button variant="contained" sx={enrollButton}>
          Enroll right now
        </Button>
      </Stack>
    </Box>
  );
};

export default Start;
