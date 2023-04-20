import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import {
  coursesButton,
  enrollButton,
  homeFirstButton,
  homeTitleFirst,
  homeTitleSecond,
} from "../../style/homeStyle.mjs";

const Start = () => {
  return (
    <Box
      sx={{
        display: { xs: "block", lg: "none", sm: "none" },
        overflowX: "hidden",
        pl: 2,
      }}
    >
      <Stack spacing={2} sx={{ pr: 2 }}>
        <Button
          sx={{ ...homeFirstButton, fontSize: "12px" }}
          variant="contained"
        >
          First bootcamp in Turkmenistan
        </Button>
        <Stack>
          <Typography sx={{ ...homeTitleFirst, fontSize: "33px" }}>
            Start your new <br /> career journey with
          </Typography>
          <Typography sx={{ ...homeTitleSecond, fontSize: "33px" }}>
            BootcampTm
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="flex-end" width="100%">
        <div
          style={{
            width: "70%",
            height: "300px",
            background: "url(/image/womens.png)",
            backgroundPosition: "90px 0px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>
      </Stack>
      <Stack spacing={2} sx={{ pr: 2, mt: -6 }}>
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
