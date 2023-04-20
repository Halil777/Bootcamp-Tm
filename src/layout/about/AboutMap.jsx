import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Spacer from "../../components/Spacer";

const AboutMap = () => {
  return (
    <Container>
      <Box
        sx={{
          background: "url(/image/aboutMap.png)",
          width: "100%",
          height: "100vh",
          backgroundSize: "100% 100%",
          mt: 5,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: "32px", sm: "28px", xs: "22px" },
            color: "#1d4cf2",
            fontWeight: "700",
            fontFamily: "AppRegular",
            textAlign: "center",
            pt: 20,
          }}
        >
          BootcampTm
        </Typography>
        <Typography
          sx={{
            fontSize: { lg: "32px", sm: "28px", xs: "22px" },
            color: "#f4f4f4",
            fontWeight: "700",
            fontFamily: "AppRegular",
            textAlign: "center",
          }}
        >
          is Turkmenistan's leading learning provider
        </Typography>
        <Typography
          sx={{
            fontSize: { lg: "32px", sm: "28px", xs: "22px" },
            color: "#f4f4f4",
            fontWeight: "700",
            fontFamily: "AppRegular",
            textAlign: "center",
          }}
        >
          located in Ashgabat
        </Typography>
        <Spacer count={5} />
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item lg={4} sm={12} xs={12}>
            <Stack
              direction="row"
              justifyContent="center"
              spacing={3}
              alignItems="center"
            >
              <Box
                sx={{
                  border: "1px solid #231C41",
                  borderRadius: "16px",
                  p: 1,
                  width: "130px",
                  height: "130px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#f4f4f4",
                    fontFamily: "AppRegular",
                    fontWeight: "700",
                    fontSize: { lg: "40px", sm: "36px", xs: "30px" },
                  }}
                >
                  + 4
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { lg: "25px", sm: "23px", xs: "20px" },
                  color: "#f4f4f4",
                  fontFamily: "AppRegular",
                  fontWeight: "700",
                }}
              >
                year <br /> experience
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={4} sm={12} xs={12}>
            <Stack
              direction="row"
              justifyContent="center"
              spacing={3}
              alignItems="center"
            >
              <Box
                sx={{
                  border: "1px solid #231C41",
                  borderRadius: "16px",
                  p: 1,
                  width: "130px",
                  height: "130px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#f4f4f4",
                    fontFamily: "AppRegular",
                    fontWeight: "700",
                    fontSize: { lg: "40px", sm: "36px", xs: "30px" },
                  }}
                >
                  + 100
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { lg: "25px", sm: "23px", xs: "20px" },
                  color: "#f4f4f4",
                  fontFamily: "AppRegular",
                  fontWeight: "700",
                }}
              >
                students every <br /> season
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={4} sm={12} xs={12}>
            <Stack
              direction="row"
              justifyContent="center"
              spacing={3}
              alignItems="center"
            >
              <Box
                sx={{
                  border: "1px solid #231C41",
                  borderRadius: "16px",
                  p: 1,
                  width: "130px",
                  height: "130px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#f4f4f4",
                    fontFamily: "AppRegular",
                    fontWeight: "700",
                    fontSize: { lg: "40px", sm: "36px", xs: "30px" },
                  }}
                >
                  + 10
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { lg: "25px", sm: "23px", xs: "20px" },
                  color: "#f4f4f4",
                  fontFamily: "AppRegular",
                  fontWeight: "700",
                }}
              >
                qualified <br /> teachers
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutMap;
