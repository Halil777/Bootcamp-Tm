import { Box, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <>
      <Box
        sx={{
          background: "#0F0730",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ color: "#fff" }}>Loading ...</Typography>
      </Box>
    </>
  );
};

export default Loading;
