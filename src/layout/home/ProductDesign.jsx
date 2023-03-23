import React from "react";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
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
        <Grid container alignItems={"center"}>
          <Grid item xs={12} sm={6} lg={6}>
            <img style={{ width: "60%" }} src={product} alt="product design" />
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
      </Container>
      <Spacer count={3} />
    </>
  );
};

export default ProductDesign;
