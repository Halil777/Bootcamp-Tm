import {
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

const BootcampUnique = () => {
  return (
    <>
      <Container>
        <Typography sx={uniqueText}>
          What makes our <br /> bootcampm unique?
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
                        <Typography sx={bottcampTitle}>Affordable</Typography>
                        <Typography sx={bottcampText}>
                          BootcampTm is all about people having another chance
                          in an IT career, that’s why we offer everyone
                          affordable payment plans.
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
                          Professional support
                        </Typography>
                        <Typography sx={bottcampText}>
                          Every batch has a limited number of students, so the
                          instructors, mentors, and support team know every
                          student by name and support them in whatever they
                          need.
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
                          Dynamic curriculum
                        </Typography>
                        <Typography sx={bottcampText}>
                          Every session is different. We believe in providing
                          up-to-date knowledge that matches current technology
                          and trend.
                        </Typography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Stack>
            </Stack>
          </Grid>
          <Grid lg={6} sm={12} xs={12}>
            <img style={{ width: "100%" }} src={btImage} alt={"bootcamp img"} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BootcampUnique;
