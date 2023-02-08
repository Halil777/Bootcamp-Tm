import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { footerAdress, footerStyle } from "../style/footerStyle.mjs";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <>
      <Box sx={footerStyle}>
        <Container>
          <Grid container pt={"55.1px"}>
            <Grid item sm={4} xs={12} lg={2}>
              <Stack>
                <img src={logo} alt="logo" />
                <Typography sx={footerAdress}>
                  Ashgabat, Turkmenistan <br /> Parahat str, Buisness center{" "}
                  <br /> Arzuw
                </Typography>
              </Stack>
            </Grid>
            <Grid item sm={4} xs={12} lg={2}></Grid>
            <Grid item sm={4} xs={12} lg={2}></Grid>
            <Grid item sm={4} xs={12} lg={2}></Grid>
            <Grid item sm={4} xs={12} lg={2}></Grid>
          </Grid>
          <Stack>
            <Divider color="#2F206A" sx={{ marginTop: "98px" }} />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
