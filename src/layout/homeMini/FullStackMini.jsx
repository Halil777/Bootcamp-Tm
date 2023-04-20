import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  dartButton,
  fullstackText,
  homeViewButton,
  homeappDevelopment,
} from "../../style/homeStyle.mjs";

const FullStackMini = () => {
  return (
    <Box sx={{ display: { xs: "block", sm: "block", lg: "none" } }}>
      <Container>
        <Grid container>
          <Grid
            item
            sm={6}
            xs={12}
            sx={{ marginBottom: { xs: "30px", sm: "0" } }}
          >
            <Typography
              sx={{
                ...homeappDevelopment,
                textAlign: { xs: "center", sm: "start" },
                fontSize: "30px",
              }}
            >
              Full-stack web <br /> development
            </Typography>
            <Typography
              sx={{
                ...fullstackText,
                textAlign: { xs: "center", sm: "start" },
              }}
            >
              <b> Web developer</b> is highly needed <br /> profession in
              nowadays . Become <b> Full stack </b> <br /> developer in
              BootcampTm.
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Stack
              spacing={1}
              sx={{
                display: "flex",
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
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
              </Stack>
              <Stack direction="row" spacing={1}>
                <Button sx={dartButton} variant="contained">
                  React JS
                </Button>
                <Button sx={dartButton} variant="contained">
                  Node JS
                </Button>
                <Button sx={dartButton} variant="contained">
                  Database
                </Button>
              </Stack>
              <Stack direction="row" spacing={1}>
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
        </Grid>
      </Container>
    </Box>
  );
};

export default FullStackMini;
