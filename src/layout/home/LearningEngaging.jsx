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
        <Box sx={engagingBox}>
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
      </Container>
    </>
  );
};

export default LearningEngaging;
