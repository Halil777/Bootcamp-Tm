import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import {
  dartButton,
  dataAnalyticBg,
  firstCircle,
  fullstackText,
  homeappDevelopment,
  homeViewButton,
  line,
  secondCircle,
} from "../../style/homeStyle.mjs";
import product from "../../images/dataAnalytics.svg";
import btn3 from "../../images/Python-logo-notext 1.svg";
import btn4 from "../../images/Power_bi_logo_black 1.svg";
import btn5 from "../../images/Group.svg";
import btn6 from "../../images/Sql_database_shortcut_icon 1.svg";
import btn7 from "../../images/database 1.svg";

const DataAnalytics = () => {
  return (
    <>
      <Box
        sx={{
          ...dataAnalyticBg,
          display: { xs: "none", sm: "none", lg: "block" },
        }}
        pt={15}
      >
        <Container>
          <Grid
            container
            alignItems="center"
            mt={-7}
            sx={{ position: "absolute" }}
          >
            <Grid item lg={5} zIndex={100}>
              <Stack spacing={2}>
                <Typography sx={homeappDevelopment}>
                  Data analytics and <br /> business intelligence
                </Typography>
                <Typography sx={fullstackText}>
                  In this course learn how work with large <br /> data and how
                  to control the large amount <br /> of information
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button sx={dartButton} variant="contained">
                    <img
                      src={btn6}
                      style={{ width: "15px", marginRight: "10px" }}
                      alt="dart logo"
                    />
                    SQL
                  </Button>
                  <Button sx={dartButton} variant="contained">
                    <img
                      src={btn3}
                      style={{ width: "15px", marginRight: "10px" }}
                      alt="dart logo"
                    />
                    Python
                  </Button>
                  <Button sx={dartButton} variant="contained">
                    <img
                      src={btn4}
                      style={{ width: "15px", marginRight: "10px" }}
                      alt="dart logo"
                    />
                    Power BI
                  </Button>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Button sx={dartButton} variant="contained">
                    <img
                      src={btn5}
                      style={{ width: "15px", marginRight: "10px" }}
                      alt="dart logo"
                    />
                    Tableau
                  </Button>
                  <Button sx={dartButton} variant="contained">
                    <img
                      src={btn7}
                      style={{ width: "15px", marginRight: "10px" }}
                      alt="dart logo"
                    />
                    ETL
                  </Button>
                </Stack>
                <Button sx={homeViewButton} variant="contained">
                  View details
                </Button>
              </Stack>
            </Grid>
            <Grid item lg={7} pl={5} zIndex={100}>
              <img
                style={{ width: "50%" }}
                src={product}
                alt="product design"
              />
            </Grid>
          </Grid>
        </Container>
        <Box sx={line} pt={50}></Box>
        <Grid container mt={-65}>
          <Grid item lg={5.5} mt={25}>
            <Box sx={firstCircle}></Box>
          </Grid>
          <Grid item lg={6.5} pl={3} mt={-3}>
            <Box sx={secondCircle}></Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DataAnalytics;
