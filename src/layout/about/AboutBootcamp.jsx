import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Spacer from "../../components/Spacer";

const AboutBootcamp = () => {
  return (
    <Box
      sx={{ width: "100%", minHeight: "100vh", background: "#1C104F", pt: 23 }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "#1D4CF2",
          fontSize: { lg: "32px", sm: "30px", xs: "26px" },
          fontWeight: "600",
          fontFamily: "AppRegular",
        }}
      >
        About BootcampTm
      </Typography>
      <Stack direction="row" width="80%" pl={"15%"} justifyContent={"center"}>
        <Typography
          sx={{
            textAlign: "center",
            color: "#D8D8D8",
            fontSize: { lg: "16px", sm: "14px", xs: "13px" },
            fontWeight: "600",
            fontFamily: "AppRegular",
          }}
        >
          Syntax Technologies is world’s leading online training provider
          established in Virginia in 2017. Syntax provides training and
          solutions for the IT industry. Through its school, Syntax offers
          in-demand training for people who want to delve into the IT industry
          with no IT experience and IT veterans who wish to add new skills
          instep with the latest technologies in the market. Through its
          geographically disperse extended teams, Syntax provides IT solutions
          to clients and highly skilled talent. ‍
          <Spacer count={2} /> Today Syntax School became synonymous with
          inspiring and preparing people to <br /> take their second chances in
          the IT industry with confidence.
        </Typography>
      </Stack>
      <Stack mt={-51}>
        <img src="/about/Vector 4 (1).svg" alt="Vector 4 (1).svg" />
      </Stack>
    </Box>
  );
};

export default AboutBootcamp;
