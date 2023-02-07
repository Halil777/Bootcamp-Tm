import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  coursesButton,
  enrollButton,
  homeFirstButton,
  homeTitleFirst,
  homeTitleSecond,
} from "../style/homeStyle.mjs";
import womens from "../images/womens.svg";
import p1 from "../images/p1.svg";
import p2 from "../images/p2.svg";
import p3 from "../images/p3.svg";

const Home = () => {
  return (
    <>
      <Grid container alignItems={"center"}>
        <Grid item sm={12} lg={6} xs={12}>
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
            <Stack direction="row" spacing={2}>
              <Button variant="contained" sx={enrollButton}>
                Enroll right now
              </Button>
              <Button variant="outlined" sx={coursesButton}>
                Courses
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item sm={12} lg={6} xs={12}>
          <Stack direction={"row"} sx={{ width: "100%" }}>
            <Stack direction={"row"} spacing={-10}>
              <img src={p1} style={{ zIndex: 10 }} alt="p1" />
              <img src={womens} alt="womens" />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
