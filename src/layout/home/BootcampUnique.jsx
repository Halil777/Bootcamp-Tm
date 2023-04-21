import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  bottcampText,
  bottcampTitle,
  uniqueText,
} from "../../style/homeStyle.mjs";
import btImage from "../../images/bootcampImg.png";
import { useTranslation } from "react-i18next";

const BootcampUnique = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "none", lg: "block" } }}>
        <Container>
          <Typography width="40%" sx={uniqueText}>
            {t("bootcampUnique")}
          </Typography>
          <Grid container>
            <Grid lg={6} sm={12} xs={12}>
              <Stack spacing={3} mt={9}>
                <Stack>
                  <Card
                    sx={{
                      maxWidth: 370,
                      background: "rgba(15, 7, 48, 0.3)",
                      borderRadius: "20px",
                      backdropFilter: "blur(15px)",
                      border: "1px solid #3F3859",
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Stack spacing={2}>
                          <Typography sx={bottcampTitle}>
                            {t("affordable")}
                          </Typography>
                          <Typography sx={bottcampText}>
                            {t("bootcampPayment")}
                          </Typography>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Stack>
                <Stack sx={{ paddingLeft: { lg: 13, xs: 0, sm: 0 } }}>
                  <Card
                    sx={{
                      maxWidth: 370,
                      background: "rgba(15, 7, 48, 0.3)",
                      borderRadius: "20px",
                      backdropFilter: "blur(15px)",
                      border: "1px solid #3F3859",
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Stack spacing={2}>
                          <Typography sx={bottcampTitle}>
                            {t("professionalSupport")}
                          </Typography>
                          <Typography sx={bottcampText}>
                            {t("everyBatch")}
                          </Typography>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Stack>
                <Stack sx={{ paddingLeft: { lg: 26, xs: 0, sm: 0 } }}>
                  <Card
                    sx={{
                      maxWidth: 370,
                      background: "rgba(15, 7, 48, 0.3)",
                      borderRadius: "20px",
                      backdropFilter: "blur(15px)",
                      border: "1px solid #3F3859",
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Stack spacing={2}>
                          <Typography sx={bottcampTitle}>
                            {t("dynamicCurriculum")}
                          </Typography>
                          <Typography sx={bottcampText}>
                            {t("everySession")}
                          </Typography>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Stack>
              </Stack>
            </Grid>
            <Grid lg={6} sm={12} xs={12}>
              <img
                style={{ width: "100%" }}
                src={btImage}
                alt={"bootcamp img"}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Bootcamp Unique mini section starts here ............................... */}
      {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
      <Box sx={{ display: { xs: "block", sm: "block", lg: "none" } }}>
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={12} sm={6}>
            <Container>
              <Stack
                spacing={2}
                // sx={{
                //   display: "flex",
                //   alignItems: { xs: "center", sm: "flex-start" },
                // }}
              >
                <Typography sx={{ ...uniqueText, fontSize: "24px" }}>
                  {t("bootcampUnique")}
                </Typography>
                <Card
                  sx={{
                    maxWidth: 370,
                    background: "rgba(15, 7, 48, 0.3)",
                    borderRadius: "20px",
                    backdropFilter: "blur(15px)",
                    border: "1px solid #3F3859",
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Stack spacing={2}>
                        <Typography sx={bottcampTitle}>
                          {t("affordable")}
                        </Typography>
                        <Typography sx={bottcampText}>
                          {t("bootcampPayment")}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card
                  sx={{
                    maxWidth: 370,
                    background: "rgba(15, 7, 48, 0.3)",
                    borderRadius: "20px",
                    backdropFilter: "blur(15px)",
                    border: "1px solid #3F3859",
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Stack spacing={2}>
                        <Typography sx={bottcampTitle}>
                          {t("professionalSupport")}
                        </Typography>
                        <Typography sx={bottcampText}>
                          {t("everyBatch")}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card
                  sx={{
                    maxWidth: 370,
                    background: "rgba(15, 7, 48, 0.3)",
                    borderRadius: "20px",
                    backdropFilter: "blur(15px)",
                    border: "1px solid #3F3859",
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Stack spacing={2}>
                        <Typography sx={bottcampTitle}>
                          {t("dynamicCurriculum")}
                        </Typography>
                        <Typography sx={bottcampText}>
                          {t("everySession")}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Stack>
            </Container>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", alignItems: "flex-end", mt: -18 }}
          >
            <div
              style={{
                width: "100%",
                height: "300px",
                background: "url(/image/bootcampImg.png)",
                backgroundPosition: "170px 0px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BootcampUnique;
