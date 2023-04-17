import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import {
  homeExperienceBoxStyle,
  homeExperienceStyle,
  homeTextStyle,
} from "../../style/homeStyle.mjs";

const SecondMiniHome = () => {
  return (
    <Container>
      <Box sx={{ display: { xs: "block", sm: "none", lg: "none" }, pl: "30%" }}>
        <Stack spacing={2}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box sx={homeExperienceBoxStyle}>
              <Typography sx={homeExperienceStyle}>+4</Typography>
            </Box>
            <Stack spacing={-1}>
              <Typography sx={{ ...homeTextStyle, fontSize: "15px" }}>
                year
              </Typography>
              <Typography sx={{ ...homeTextStyle, fontSize: "15px" }}>
                experience
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box sx={homeExperienceBoxStyle}>
              <Typography sx={homeExperienceStyle}>+100</Typography>
            </Box>
            <Stack spacing={-1}>
              <Typography sx={{ ...homeTextStyle, fontSize: "15px" }}>
                students
              </Typography>
              <Typography sx={{ ...homeTextStyle, fontSize: "15px" }}>
                every season
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box sx={homeExperienceBoxStyle}>
              <Typography sx={homeExperienceStyle}>+10</Typography>
            </Box>
            <Stack spacing={-1}>
              <Typography sx={{ ...homeTextStyle, fontSize: "15px" }}>
                qualified
              </Typography>
              <Typography sx={{ ...homeTextStyle, fontSize: "15px" }}>
                teachers
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default SecondMiniHome;
