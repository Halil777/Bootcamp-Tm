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
      <Box sx={{ display: { xs: "block", sm: "none", lg: "none" }, pl: "25%" }}>
        <Stack spacing={2}>
          <Stack direction="row" alignItems="center" spacing={4}>
            <Box sx={homeExperienceBoxStyle}>
              <Typography sx={{ ...homeExperienceStyle, fontSize: "35px" }}>
                +4
              </Typography>
            </Box>
            <Stack spacing={-1}>
              <Typography sx={{ ...homeTextStyle, fontSize: "20px" }}>
                year
              </Typography>
              <Typography sx={{ ...homeTextStyle, fontSize: "20px" }}>
                experience
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={4}>
            <Box sx={homeExperienceBoxStyle}>
              <Typography sx={{ ...homeExperienceStyle, fontSize: "35px" }}>
                +100
              </Typography>
            </Box>
            <Stack spacing={-1}>
              <Typography sx={{ ...homeTextStyle, fontSize: "20px" }}>
                students
              </Typography>
              <Typography sx={{ ...homeTextStyle, fontSize: "20px" }}>
                every season
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={4}>
            <Box sx={homeExperienceBoxStyle}>
              <Typography sx={{ ...homeExperienceStyle, fontSize: "35px" }}>
                +10
              </Typography>
            </Box>
            <Stack spacing={-1}>
              <Typography sx={{ ...homeTextStyle, fontSize: "20px" }}>
                qualified
              </Typography>
              <Typography sx={{ ...homeTextStyle, fontSize: "20px" }}>
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
