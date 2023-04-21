import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  circleFullStack,
  dartButton,
  fullstackText,
  homeappDevelopment,
  homeViewButton,
  lineFullStack,
} from "../../style/homeStyle.mjs";
import fullStackHome from "../../images/fullStackHome.svg";
import { useTranslation } from "react-i18next";

const FullStack = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          ...circleFullStack,
          zIndex: 10,
          display: { xs: "none", sm: "none", lg: "flex" },
        }}
        zIndex={10}
      >
        <Box sx={{ ...lineFullStack, zIndex: 1 }} zIndex={1}>
          <Container>
            <Grid container alignItems={"center"} mt={-10}>
              <Grid item lg={6}>
                <Stack spacing={2}>
                  <Typography sx={homeappDevelopment}>
                    {t("fullStack")}
                    <br /> {t("development")}
                  </Typography>
                  <Typography width="60%" sx={fullstackText}>
                    {t("webDeveloper")}
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Button sx={dartButton} variant="contained">
                      HTML
                    </Button>
                    <Button sx={dartButton} variant="contained">
                      CSS
                    </Button>
                    <Button sx={dartButton} variant="contained">
                      SASS
                    </Button>
                    <Button sx={dartButton} variant="contained">
                      JS
                    </Button>
                    <Button sx={dartButton} variant="contained">
                      React JS
                    </Button>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Button sx={dartButton} variant="contained">
                      Node JS
                    </Button>
                    <Button sx={dartButton} variant="contained">
                      Database
                    </Button>
                    <Button sx={dartButton} variant="contained">
                      PostgreSQL
                    </Button>
                    <Button sx={dartButton} variant="contained">
                      RestfulAPI
                    </Button>
                  </Stack>
                  <Button sx={homeViewButton} variant="contained">
                    {t("viewDetails")}
                  </Button>
                </Stack>
              </Grid>
              <Grid item lg={6}>
                <img
                  style={{ width: "60%" }}
                  src={fullStackHome}
                  alt="fullStackHome"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default FullStack;
