import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import product from "../../images/productDesign.svg";
import {
  dartButton,
  fullstackText,
  homeappDevelopment,
  homeViewButton,
} from "../../style/homeStyle.mjs";
import btn1 from "../../images/Adobe_Photoshop_CC_icon.svg";
import btn2 from "../../images/Figma-logo.svg";
import btn3 from "../../images/Adobe_Illustrator_CC_icon.svg";
import Spacer from "../../components/Spacer";

const ProductDesign = () => {
  return (
    <>
      <Container>
        <Box sx={{ display: { xs: "none", sm: "none", lg: "block" } }}>
          <Grid container alignItems={"center"}>
            <Grid item xs={12} sm={6} lg={6}>
              <img
                style={{ width: "60%" }}
                src={product}
                alt="product design"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <Stack spacing={2}>
                <Typography sx={homeappDevelopment}>Product design</Typography>
                <Typography sx={fullstackText}>
                  Learn how to design unique brand identities, <br /> product
                  design and user interface
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button sx={dartButton} variant="contained">
                    <img
                      src={btn1}
                      style={{ width: "15px", marginRight: "10px" }}
                      alt="dart logo"
                    />
                    Adobe Photoshop
                  </Button>
                  <Button sx={dartButton} variant="contained">
                    <img
                      src={btn3}
                      style={{ width: "15px", marginRight: "10px" }}
                      alt="dart logo"
                    />
                    Adobe Illustrator
                  </Button>
                </Stack>
                <Button sx={{ ...dartButton, width: 100 }} variant="contained">
                  <img
                    src={btn2}
                    style={{ width: "15px", marginRight: "10px" }}
                    alt="dart logo"
                  />
                  Figma
                </Button>
                <Button sx={homeViewButton} variant="contained">
                  View details
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        {/* Product Design Mini Section starts here .......................................... */}
        {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
        <Box sx={{ display: { xs: "block", sm: "block", lg: "none" } }}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ marginBottom: { xs: "30px", sm: "0" } }}
            >
              <Stack spacing={1}>
                <Typography
                  sx={{
                    ...homeappDevelopment,
                    textAlign: { xs: "center", sm: "start" },
                    fontSize: "30px",
                  }}
                >
                  Product design
                </Typography>
                <Typography
                  sx={{
                    ...fullstackText,
                    textAlign: { xs: "center", sm: "start" },
                  }}
                >
                  Learn how to design unique
                  <b> brand </b> <br /> <b> identities, </b>
                  <b> product designs </b> and <b> user interface </b>
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={2}>
                <Grid item sm={6} xs={12}>
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: { xs: "center", sm: "flex-start" },
                    }}
                  >
                    <Button sx={dartButton} variant="contained">
                      <img
                        src={btn1}
                        style={{ width: "15px", marginRight: "10px" }}
                        alt="dart logo"
                      />
                      Adobe Photoshop
                    </Button>
                  </Stack>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: { xs: "center", sm: "flex-start" },
                    }}
                  >
                    <Button sx={dartButton} variant="contained">
                      <img
                        src={btn3}
                        style={{ width: "15px", marginRight: "10px" }}
                        alt="dart logo"
                      />
                      Adobe Illustrator
                    </Button>
                  </Stack>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: { xs: "center", sm: "flex-start" },
                    }}
                  >
                    <Button
                      sx={{ ...dartButton, width: 100 }}
                      variant="contained"
                    >
                      <img
                        src={btn2}
                        style={{ width: "15px", marginRight: "10px" }}
                        alt="dart logo"
                      />
                      Figma
                    </Button>
                  </Stack>
                </Grid>
                <Grid item sm={12} xs={12}>
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: { xs: "center", sm: "center" },
                    }}
                  >
                    <Button sx={homeViewButton} variant="contained">
                      View details
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Spacer count={3} />
    </>
  );
};

export default ProductDesign;
