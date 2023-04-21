import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import {
  homeExperienceBoxStyle,
  homeExperienceStyle,
  homeTextStyle,
} from "../../style/homeStyle.mjs";
import { useTranslation } from "react-i18next";

const SecondMiniHome = () => {
  const { t } = useTranslation();

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
                {t("year")}
              </Typography>
              <Typography sx={{ ...homeTextStyle, fontSize: "20px" }}>
                {t("experience")}
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
                {t("students")}
              </Typography>
              <Typography sx={{ ...homeTextStyle, fontSize: "20px" }}>
                {t("everySeason")}
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
                {t("qualified")}
              </Typography>
              <Typography sx={{ ...homeTextStyle, fontSize: "20px" }}>
                {t("teachers")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default SecondMiniHome;
