import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import {
  homeExperienceStyle,
  homeTextStyle,
  mapBg,
} from "../../style/homeStyle.mjs";
import { homeExperienceBoxStyle } from "../../style/homeStyle.mjs";

const HomeMap = () => {
  return (
    <Box sx={{ display: { xs: "none", sm: "block", lg: "block" } }}>
      <Grid container alignItems="center">
        <Grid item lg={2.5} zIndex={12} md={2.5} sm={2.5} xs={2.5}>
          <Stack
            spacing={2}
            pl={{ xs: 1, sm: 1, lg: 15 }}
            width="100%"
            sx={{
              position: { xs: "relative", sm: "relative", lg: "absolute" },
              marginTop: { xs: "0px", sm: "0px", lg: "-100px" },
            }}
          >
            <Stack direction="row" alignItems="center" spacing={3}>
              <Box sx={homeExperienceBoxStyle}>
                <Typography sx={homeExperienceStyle}>+4</Typography>
              </Box>
              <Typography sx={homeTextStyle}>
                year <br /> experience
              </Typography>
            </Stack>
            <Stack
              pl={{ xs: 1, sm: 1, lg: 3 }}
              direction="row"
              alignItems="center"
              spacing={3}
            >
              <Box sx={homeExperienceBoxStyle}>
                <Typography sx={homeExperienceStyle}>+100</Typography>
              </Box>
              <Typography sx={homeTextStyle}>
                students <br /> every season
              </Typography>
            </Stack>
            <Stack
              pl={{ xs: 1, sm: 1, lg: 6 }}
              direction="row"
              alignItems="center"
              spacing={3}
            >
              <Box sx={homeExperienceBoxStyle}>
                <Typography sx={homeExperienceStyle}>+10</Typography>
              </Box>
              <Typography sx={homeTextStyle}>
                qualified <br /> teachers
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item sm={9.5} md={9.5} lg={9.5} xs={9.5}>
          <Box sx={{ display: { xs: "none", sm: "none", lg: "flex" } }}>
            <div style={mapBg}></div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeMap;
