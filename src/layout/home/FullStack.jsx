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

const FullStack = () => {
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
                    Full-stack web <br /> development
                  </Typography>
                  <Typography sx={fullstackText}>
                    Web developer is highly needed <br /> profession in nowadays
                    . Become Full stack <br /> developer in BootcampTm.
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
                    View details
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
