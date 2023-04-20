import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import {
  engagingBox,
  engagingBtn,
  engagingText,
  engagingTitle,
  engagingTitleShape,
} from "../../style/homeStyle.mjs";
import learningEngagingPhoto from "../../images/Frame 42.svg";
import Spacer from "../../components/Spacer.jsx";

const LearningEngaging = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            ...engagingBox,
            display: { xs: "none", sm: "block", lg: "block" },
          }}
        >
          <Grid container>
            <Grid item lg={6} sm={12} xs={12} p={5}>
              <Stack>
                <Stack direction="row" spacing={1}>
                  <Typography sx={engagingTitle}>We make</Typography>
                  <Typography sx={engagingTitleShape}>learning</Typography>
                </Stack>
                <Typography sx={engagingTitle}>engaging</Typography>
                <Spacer count={1} />
                <Typography sx={engagingText}>
                  Choose you desired courses or <br /> webinars
                </Typography>
                <Spacer count={2} />
                <Button variant="contained" sx={engagingBtn}>
                  Enroll today
                </Button>
              </Stack>
            </Grid>
            <Grid item lg={6} sm={12} xs={12}>
              <img
                style={{
                  width: "100%",
                  borderTopRightRadius: "24px",
                  height: "100%",
                }}
                src={learningEngagingPhoto}
                alt="learningEngagingPhoto.svg"
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{ display: { lg: "none", sm: "none", xs: "block" }, mb: "-40px" }}
        >
          <Grid container>
            <Grid xs={12}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "24px 24px 0px 0px",
                }}
                src={learningEngagingPhoto}
                alt="learningEngagingPhoto.svg"
              />
            </Grid>
            <Grid xs={12} mt={-1}>
              <Box sx={{ background: "#1D4CF2", p: 3 }}>
                <Stack>
                  <Stack direction="row" spacing={1}>
                    <Typography sx={{ ...engagingTitle, fontSize: "22px" }}>
                      We make
                    </Typography>
                    <Typography
                      sx={{ ...engagingTitleShape, fontSize: "22px" }}
                    >
                      learning
                    </Typography>
                  </Stack>
                  <Typography sx={{ ...engagingTitle, fontSize: "22px" }}>
                    engaging
                  </Typography>
                  <Spacer count={1} />
                  <Typography sx={{ ...engagingText, fontSize: "12px" }}>
                    Choose you desired courses or <br /> webinars
                  </Typography>
                  <Spacer count={2} />
                  <Button variant="contained" sx={engagingBtn}>
                    Enroll today
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default LearningEngaging;
