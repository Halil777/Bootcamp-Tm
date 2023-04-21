import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import group from "../../images/group.png";
import flutterLogo from "../../images/flutterLogo.svg";
import dartLogo from "../../images/dartLogo.svg";
import vector from "../../images/Vector.svg";
import {
  coureseStyle,
  dartButton,
  dugaStyle,
  homeappDevelopment,
  homeViewButton,
} from "../../style/homeStyle.mjs";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CoursesHome = () => {
  const location = useNavigate();

  const handleClick = () => {
    location("/appDevelopmentCourses");
  };

  const { t } = useTranslation();

  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "none", lg: "block" } }}>
        <Container>
          <Box sx={dugaStyle} mt={7}>
            <Typography sx={coureseStyle}> {t("CoursesOffer")}</Typography>
            <Box sx={{ paddingTop: { xs: "50px", sm: "50px", lg: "0px" } }}>
              <img
                src={group}
                style={{
                  width: "100%",
                  marginTop: { xs: "100px", sm: "100px", lg: "-3000px" },
                }}
                alt="group"
              />
            </Box>
          </Box>
          <Grid container>
            <Grid item xs={12} sm={12} lg={7}></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              lg={5}
              sx={{ marginTop: { xs: "-50px", sm: "50px", lg: "-200px" } }}
              alignItems="center"
            >
              <Stack spacing={2}>
                <Typography sx={homeappDevelopment}>
                  {t("appDevelopment")}
                </Typography>
                <Typography sx={{ width: "60%", color: "#f4f4f4" }}>
                  {t("learn")} <br /> {t("mobilApp")} <br />
                  {t("qualifiedTeacher")}
                </Typography>
                <Stack direction={"row"} spacing={2}>
                  <Button sx={dartButton} variant="contained">
                    <img
                      src={dartLogo}
                      style={{ width: "15px", marginRight: "10px" }}
                      alt="dart logo"
                    />
                    Dart
                  </Button>
                  <Button sx={dartButton} variant="contained">
                    <img
                      src={flutterLogo}
                      style={{ width: "15px", marginRight: "10px" }}
                      alt="flutter logo"
                    />
                    Flutter
                  </Button>
                </Stack>
                <Button
                  onClick={handleClick}
                  sx={homeViewButton}
                  variant="contained"
                >
                  {t("viewDetails")}
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Stack direction="row" justifyContent={"flex-end"}>
          <img src={vector} alt="vector" style={{ width: "100px" }} />
        </Stack>
      </Box>
    </>
  );
};

export default CoursesHome;
