import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import imgg from "../../images/dataAnalytics/Ellipse 9 (1).svg";
import imgh from "../../images/dataAnalytics/Ellipse 10.svg";
import imgp from "../../images/dataAnalytics/Group 1 (1).png";
import imgSQL from "../../images/dataAnalytics/Sql_database_shortcut_icon 1 (1).svg";
import Python from "../../images/dataAnalytics/Python-logo-notext 1 (1).svg";
import PowerBI from "../../images/dataAnalytics/Power_bi_logo_black 1 (1).svg";
import Tableau from "../../images/dataAnalytics/Group (2).svg";
import ETL from "../../images/dataAnalytics/database 1 (1).svg";

import { dartButton, homeViewButton } from "../../style/homeStyle.mjs";
import { useTranslation } from "react-i18next";

const DataAnAlitcsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box sx={{ display: { lg: "block", sm: "none", xs: "none" } }}>
        <Grid container mb={7} sx={{ position: "absolute" }} zIndex={2}>
          <Grid item lg={6} justifyContent="flex-start" display="flex">
            <img
              style={{ width: "50%", marginTop: "150px" }}
              src={imgh}
              alt="data"
            />
          </Grid>
          <Grid item lg={6} justifyContent="flex-end" display="flex">
            <img
              style={{ width: "80%", marginRight: "50px" }}
              src={imgg}
              alt="data"
            />
          </Grid>
        </Grid>
        <Container>
          <Grid container pt={10} mb={20} zIndex={5} position={"relative"}>
            <Grid item lg={6}>
              <Stack spacing={1}>
                <Typography
                  sx={{
                    fontFamily: "AppRegular",
                    fontSize: "30px",
                    fontWeight: "600",
                    color: "#f4f4f4",
                  }}
                >
                  {t("dataAnalytics")}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Typography
                    width="63%"
                    sx={{
                      color: "#d8d8d8",
                      fontFamily: "AppRegular",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  >
                    {t("inThisCourse")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Button
                    variant="contained"
                    sx={{
                      ...dartButton,
                    }}
                  >
                    <img
                      src={imgSQL}
                      style={{ width: "20px", marginRight: "10px" }}
                      alt="python"
                    />
                    SQL
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      ...dartButton,
                    }}
                  >
                    <img
                      src={Python}
                      style={{ width: "20px", marginRight: "10px" }}
                      alt="python"
                    />
                    Python
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      ...dartButton,
                    }}
                  >
                    <img
                      src={PowerBI}
                      style={{ width: "20px", marginRight: "10px" }}
                      alt="python"
                    />
                    Power BI
                  </Button>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Button
                    variant="contained"
                    sx={{
                      ...dartButton,
                    }}
                  >
                    <img
                      src={Tableau}
                      style={{ width: "20px", marginRight: "10px" }}
                      alt="python"
                    />
                    Tableau
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      ...dartButton,
                    }}
                  >
                    <img
                      src={ETL}
                      style={{ width: "20px", marginRight: "10px" }}
                      alt="python"
                    />
                    ETL
                  </Button>
                </Stack>
                <Button sx={homeViewButton} variant="contained">
                  {t("viewDetails")}
                </Button>
              </Stack>
            </Grid>
            <Grid item lg={6}>
              <img
                style={{
                  width: "450px",
                  height: "450px",
                  marginLeft: "120px",
                  marginTop: "-30px",
                }}
                src={imgp}
                alt="sasassa"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Data Analytics Section start here .............................................. */}
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <Container>
        <Box sx={{ display: { xs: "block", sm: "block", lg: "none " } }}>
          <Grid container sx={{ marginBottom: { xs: "30px", sm: "0" } }}>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ marginBottom: { xs: "30px", sm: "0" } }}
            >
              <Stack
                spacing={2}
                sx={{
                  display: "flex",
                  alignItems: { xs: "center", sm: "flex-start" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "AppRegular",
                    fontSize: "30px",
                    fontWeight: "600",
                    color: "#f4f4f4",
                    textAlign: { xs: "center", sm: "start" },
                  }}
                >
                  {t("dataAnalytics")}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Typography
                    sx={{
                      color: "#d8d8d8",
                      fontFamily: "AppRegular",
                      fontSize: "16px",
                      fontWeight: "400",
                      textAlign: "center",
                    }}
                  >
                    {t("inThisCourse")}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack
                spacing={1}
                sx={{
                  display: "flex",
                  alignItems: { xs: "center", sm: "flex-start" },
                }}
              >
                <Stack direction="row" spacing={1}>
                  <Button
                    variant="contained"
                    sx={{
                      ...dartButton,
                    }}
                  >
                    <img
                      src={imgSQL}
                      style={{ width: "20px", marginRight: "10px" }}
                      alt="python"
                    />
                    SQL
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      ...dartButton,
                    }}
                  >
                    <img
                      src={Python}
                      style={{ width: "20px", marginRight: "10px" }}
                      alt="python"
                    />
                    Python
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      ...dartButton,
                    }}
                  >
                    <img
                      src={PowerBI}
                      style={{ width: "20px", marginRight: "10px" }}
                      alt="python"
                    />
                    Power BI
                  </Button>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Button
                    variant="contained"
                    sx={{
                      ...dartButton,
                    }}
                  >
                    <img
                      src={Tableau}
                      style={{ width: "20px", marginRight: "10px" }}
                      alt="python"
                    />
                    Tableau
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      ...dartButton,
                    }}
                  >
                    <img
                      src={ETL}
                      style={{ width: "20px", marginRight: "10px" }}
                      alt="python"
                    />
                    ETL
                  </Button>
                </Stack>
                <Button sx={homeViewButton} variant="contained">
                  {t("viewDetails")}
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default DataAnAlitcsPage;
