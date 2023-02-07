import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <Box pt={7} pb={5} sx={{ background: "#0F0730" }}>
        <Container mt={3} pb={3}>
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Index;
