import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <Box pt={7} pb={5} sx={{ background: "#0F0730" }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Index;
