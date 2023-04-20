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
import Spacer from "../../components/Spacer.jsx";
import {
  studenItemText,
  studentLineBg,
  studentPItemTitle,
  studentPTitle,
} from "../../style/studentProcess.mjs";
import stItemOne from "../../images/stPItem.svg";
import seconsSTProcess from "../../images/seconsSTProcess.svg";
import thirdSItem from "../../images/thirdSItem.svg";
import fourthItem from "../../images/fourthItem.svg";
import marketSupport from "../../images/marketSupport.svg";
import careerSupport from "../../images/careerSupport.svg";
import graduateStudent from "../../images/graduateStudent.svg";
import startNewCareer from "../../images/startNewCareer.svg";
import studentProcessBottomImage from "../../images/studentProcessBottomImage.svg";

const StudentProcess = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "none", lg: "block" } }}>
        <Container>
          <Spacer count={13} />
          <Box
            sx={{
              display: { xs: "none", sm: "none", lg: "block" },
              position: "relative",
            }}
          >
            <Typography sx={studentPTitle}>Student Process</Typography>
            <Box mt={7} pl={5}>
              <img src="/image/studentProcess/Arrow 1.svg" alt="Arrow" />
            </Box>
            <Spacer count={1} />
            <Box sx={studentLineBg}></Box>
            <Box>
              <Grid
                container
                pl={5}
                sx={{ position: "absolute", marginTop: "-153vh" }}
              >
                <Grid item lg={4}>
                  <Stack zIndex={10} sx={{ position: "absolute" }}>
                    <img
                      src={stItemOne}
                      style={{ width: "55px" }}
                      alt="sdfsd"
                    />
                  </Stack>
                  <Stack pl={2} pt={2} mt={3}>
                    <Card
                      sx={{
                        maxWidth: 250,
                        background: "#1C104F",
                        borderRadius: "10px",
                        padding: "8px",
                        minHeight: "210px",
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Stack>
                            <Typography sx={studentPItemTitle}>
                              Apply
                            </Typography>
                            <Typography sx={studenItemText}>
                              Read the details of the domain you are interested
                              in. Enroll yourself by registering for the
                              specific course.
                            </Typography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                </Grid>
                <Grid item lg={4}>
                  <Stack zIndex={10} sx={{ position: "absolute" }}>
                    <img
                      src={seconsSTProcess}
                      style={{ width: "55px" }}
                      alt="sdfsd"
                    />
                  </Stack>
                  <Stack pl={2} pt={2} mt={3}>
                    <Card
                      sx={{
                        maxWidth: 250,
                        background: "#1C104F",
                        borderRadius: "10px",
                        padding: "8px",
                        minHeight: "210px",
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Stack>
                            <Typography sx={studentPItemTitle}>
                              Register
                            </Typography>
                            <Typography sx={studenItemText}>
                              Sign the contract. Get ready for the course.
                            </Typography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                </Grid>
                <Grid item lg={4} pt={2}>
                  <Stack zIndex={10} sx={{ position: "absolute" }}>
                    <img
                      src={thirdSItem}
                      style={{ width: "55px" }}
                      alt="sdfsd"
                    />
                  </Stack>
                  <Stack pl={2} pt={2} mt={3}>
                    <Card
                      sx={{
                        maxWidth: 250,
                        background: "#1C104F",
                        borderRadius: "10px",
                        padding: "8px",
                        minHeight: "210px",
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Stack>
                            <Typography sx={studentPItemTitle}>
                              Orientation
                            </Typography>
                            <Typography sx={studenItemText}>
                              Come to the orientation. Start the class. Know the
                              rules and regulations. Installation of necessary
                              tools and get access to learning materials.
                            </Typography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                </Grid>
                <Grid item lg={4} pl={15} pt={19}>
                  <Stack zIndex={10} sx={{ position: "absolute" }}>
                    <img
                      src={careerSupport}
                      style={{ width: "55px" }}
                      alt="sdfsd"
                    />
                  </Stack>
                  <Stack pl={2} pt={2} mt={3}>
                    <Card
                      sx={{
                        maxWidth: 250,
                        background: "#1C104F",
                        borderRadius: "10px",
                        padding: "8px",
                        minHeight: "210px",
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Stack>
                            <Typography sx={studentPItemTitle}>
                              Career preparation support
                            </Typography>
                            <Typography sx={studenItemText}>
                              Prepare your professional resume. Prepare the
                              project descriptions.
                            </Typography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                </Grid>
                <Grid item lg={4} pt={11} pl={14}>
                  <Stack zIndex={10} sx={{ position: "absolute" }}>
                    <img
                      src={marketSupport}
                      style={{ width: "55px" }}
                      alt="sdfsd"
                    />
                  </Stack>
                  <Stack pl={2} pt={2} mt={3}>
                    <Card
                      sx={{
                        maxWidth: 250,
                        background: "#1C104F",
                        borderRadius: "10px",
                        padding: "8px",
                        minHeight: "210px",
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Stack>
                            <Typography sx={studentPItemTitle}>
                              Market support
                            </Typography>
                            <Typography sx={studenItemText}>
                              Follow up. Review sessions. Alumni sessions.
                              1-on-1 support. References and support from our
                              recruiting partners. Sharing job posts. Other job
                              support as needed.
                            </Typography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                </Grid>
                <Grid item lg={4} pl={15} pt={7}>
                  <Stack zIndex={10} sx={{ position: "absolute" }}>
                    <img
                      src={fourthItem}
                      style={{ width: "55px" }}
                      alt="sdfsd"
                    />
                  </Stack>
                  <Stack pl={2} pt={2} mt={3}>
                    <Card
                      sx={{
                        maxWidth: 250,
                        background: "#1C104F",
                        borderRadius: "10px",
                        padding: "8px",
                        minHeight: "210px",
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Stack>
                            <Typography sx={studentPItemTitle}>
                              Final interview
                            </Typography>
                            <Typography sx={studenItemText}>
                              Final project. MOC interviews. Mentoring.
                            </Typography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                </Grid>
                <Grid item lg={4} pl={12} pt={7}>
                  <Stack zIndex={10} sx={{ position: "absolute" }}>
                    <img
                      src={graduateStudent}
                      style={{ width: "55px" }}
                      alt="sdfsd"
                    />
                  </Stack>
                  <Stack pl={2} pt={2} mt={3}>
                    <Card
                      sx={{
                        maxWidth: 250,
                        background: "#1C104F",
                        borderRadius: "10px",
                        padding: "8px",
                        minHeight: "210px",
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Stack>
                            <Typography sx={studentPItemTitle}>
                              Graduate
                            </Typography>
                            <Typography sx={studenItemText}>
                              Acquire certification in the chosen domain.
                              Prepare for a new career.
                            </Typography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                </Grid>
                <Grid item lg={4} pt={22} pl={17}>
                  <Stack zIndex={10} sx={{ position: "absolute" }}>
                    <img
                      src={startNewCareer}
                      style={{ width: "55px" }}
                      alt="sdfsd"
                    />
                  </Stack>
                  <Stack pl={2} pt={2} mt={3}>
                    <Card
                      sx={{
                        maxWidth: 250,
                        background: "#1C104F",
                        borderRadius: "10px",
                        padding: "8px",
                        minHeight: "210px",
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Stack>
                            <Typography sx={studentPItemTitle}>
                              Start new career
                            </Typography>
                            <Typography sx={studenItemText}>
                              Encounter manifold career opportunities in your
                              domain.
                            </Typography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                </Grid>
                <Grid item lg={4} pl={20} pt={7}>
                  <img src={studentProcessBottomImage} alt="bottom nagysh" />
                </Grid>
              </Grid>
              <Spacer count={5} />
            </Box>
          </Box>
          <Box
            sx={{
              display: { lg: "none", xs: "block", sm: "block" },
            }}
          >
            <Typography sx={studentPTitle}>Student Process</Typography>
            <Spacer count={3} />
            <Grid container>
              <Grid item sm={6} xs={12}>
                <Stack zIndex={10} sx={{ position: "absolute" }}>
                  <img src={stItemOne} style={{ width: "55px" }} alt="sdfsd" />
                </Stack>
                <Stack pl={2} pt={2} mt={3}>
                  <Card
                    sx={{
                      maxWidth: 250,
                      background: "#1C104F",
                      borderRadius: "10px",
                      padding: "8px",
                      minHeight: "210px",
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Stack>
                          <Typography sx={studentPItemTitle}>Apply</Typography>
                          <Typography sx={studenItemText}>
                            Read the details of the domain you are interested
                            in. Enroll yourself by registering for the specific
                            course.
                          </Typography>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Stack>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Stack zIndex={10} sx={{ position: "absolute" }}>
                  <img
                    src={seconsSTProcess}
                    style={{ width: "55px" }}
                    alt="sdfsd"
                  />
                </Stack>
                <Stack pl={2} pt={2} mt={3}>
                  <Card
                    sx={{
                      maxWidth: 250,
                      background: "#1C104F",
                      borderRadius: "10px",
                      padding: "8px",
                      minHeight: "210px",
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Stack>
                          <Typography sx={studentPItemTitle}>
                            Register
                          </Typography>
                          <Typography sx={studenItemText}>
                            Sign the contract. Get ready for the course.
                          </Typography>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Stack>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Stack zIndex={10} sx={{ position: "absolute" }}>
                  <img src={thirdSItem} style={{ width: "55px" }} alt="sdfsd" />
                </Stack>
                <Stack pl={2} pt={2} mt={3}>
                  <Card
                    sx={{
                      maxWidth: 250,
                      background: "#1C104F",
                      borderRadius: "10px",
                      padding: "8px",
                      minHeight: "210px",
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Stack>
                          <Typography sx={studentPItemTitle}>
                            Orientation
                          </Typography>
                          <Typography sx={studenItemText}>
                            Come to the orientation. Start the class. Know the
                            rules and regulations. Installation of necessary
                            tools and get access to learning materials.
                          </Typography>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Stack>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Stack zIndex={10} sx={{ position: "absolute" }}>
                  <img
                    src={careerSupport}
                    style={{ width: "55px" }}
                    alt="sdfsd"
                  />
                </Stack>
                <Stack pl={2} pt={2} mt={3}>
                  <Card
                    sx={{
                      maxWidth: 250,
                      background: "#1C104F",
                      borderRadius: "10px",
                      padding: "8px",
                      minHeight: "210px",
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Stack>
                          <Typography sx={studentPItemTitle}>
                            Career preparation support
                          </Typography>
                          <Typography sx={studenItemText}>
                            Prepare your professional resume. Prepare the
                            project descriptions.
                          </Typography>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Stack>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Stack zIndex={10} sx={{ position: "absolute" }}>
                  <img
                    src={marketSupport}
                    style={{ width: "55px" }}
                    alt="sdfsd"
                  />
                </Stack>
                <Stack pl={2} pt={2} mt={3}>
                  <Card
                    sx={{
                      maxWidth: 250,
                      background: "#1C104F",
                      borderRadius: "10px",
                      padding: "8px",
                      minHeight: "210px",
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Stack>
                          <Typography sx={studentPItemTitle}>
                            Market support
                          </Typography>
                          <Typography sx={studenItemText}>
                            Follow up. Review sessions. Alumni sessions. 1-on-1
                            support. References and support from our recruiting
                            partners. Sharing job posts. Other job support as
                            needed.
                          </Typography>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Stack>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Stack zIndex={10} sx={{ position: "absolute" }}>
                  <img src={fourthItem} style={{ width: "55px" }} alt="sdfsd" />
                </Stack>
                <Stack pl={2} pt={2} mt={3}>
                  <Card
                    sx={{
                      maxWidth: 250,
                      background: "#1C104F",
                      borderRadius: "10px",
                      padding: "8px",
                      minHeight: "210px",
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Stack>
                          <Typography sx={studentPItemTitle}>
                            Final interview
                          </Typography>
                          <Typography sx={studenItemText}>
                            Final project. MOC interviews. Mentoring.
                          </Typography>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Stack>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Stack zIndex={10} sx={{ position: "absolute" }}>
                  <img
                    src={graduateStudent}
                    style={{ width: "55px" }}
                    alt="sdfsd"
                  />
                </Stack>
                <Stack pl={2} pt={2} mt={3}>
                  <Card
                    sx={{
                      maxWidth: 250,
                      background: "#1C104F",
                      borderRadius: "10px",
                      padding: "8px",
                      minHeight: "210px",
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Stack>
                          <Typography sx={studentPItemTitle}>
                            Graduate
                          </Typography>
                          <Typography sx={studenItemText}>
                            Acquire certification in the chosen domain. Prepare
                            for a new career.
                          </Typography>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Spacer count={2} />
          </Box>
        </Container>
      </Box>
      <Container>
        <Box
          sx={{
            display: { sm: "block", xs: "block", lg: "none" },
            marginTop: 10,
          }}
        >
          <Typography
            sx={{ ...studentPTitle, fontSize: "24px", marginBottom: "20px" }}
          >
            Student Process
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Stack
                width="100%"
                direction="row"
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                <Box>
                  <Stack zIndex={10} sx={{ position: "absolute" }}>
                    <img
                      src={stItemOne}
                      style={{ width: "55px" }}
                      alt="sdfsd"
                    />
                  </Stack>
                  <Stack pl={2} pt={2} mt={3}>
                    <Card
                      sx={{
                        maxWidth: 250,
                        background: "#1C104F",
                        borderRadius: "10px",
                        padding: "8px",
                        minHeight: "210px",
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Stack>
                            <Typography sx={studentPItemTitle}>
                              Apply
                            </Typography>
                            <Typography sx={studenItemText}>
                              Read the details of the domain you are interested
                              in. Enroll yourself by registering for the
                              specific course.
                            </Typography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack
                width="100%"
                direction="row"
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                <Box>
                  <Stack zIndex={10} sx={{ position: "absolute" }}>
                    <img
                      src={seconsSTProcess}
                      style={{ width: "55px" }}
                      alt="sdfsd"
                    />
                  </Stack>
                  <Stack pl={2} pt={2} mt={3}>
                    <Card
                      sx={{
                        maxWidth: 250,
                        background: "#1C104F",
                        borderRadius: "10px",
                        padding: "8px",
                        minHeight: "210px",
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Stack>
                            <Typography sx={studentPItemTitle}>
                              Register
                            </Typography>
                            <Typography sx={studenItemText}>
                              Sign the contract. Get ready for the course.
                            </Typography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack
                width="100%"
                direction="row"
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                <Box>
                  <Stack zIndex={10} sx={{ position: "absolute" }}>
                    <img
                      src={thirdSItem}
                      style={{ width: "55px" }}
                      alt="sdfsd"
                    />
                  </Stack>
                  <Stack pl={2} pt={2} mt={3}>
                    <Card
                      sx={{
                        maxWidth: 250,
                        background: "#1C104F",
                        borderRadius: "10px",
                        padding: "8px",
                        minHeight: "210px",
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Stack>
                            <Typography sx={studentPItemTitle}>
                              Orientation
                            </Typography>
                            <Typography sx={studenItemText}>
                              Come to the orientation. Start the class. Know the
                              rules and regulations. Installation of necessary
                              tools and get access to learning materials.
                            </Typography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack
                width="100%"
                direction="row"
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                <Box>
                  <Stack zIndex={10} sx={{ position: "absolute" }}>
                    <img
                      src={fourthItem}
                      style={{ width: "55px" }}
                      alt="sdfsd"
                    />
                  </Stack>
                  <Stack pl={2} pt={2} mt={3}>
                    <Card
                      sx={{
                        maxWidth: 250,
                        background: "#1C104F",
                        borderRadius: "10px",
                        padding: "8px",
                        minHeight: "210px",
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Stack>
                            <Typography sx={studentPItemTitle}>
                              Final interview
                            </Typography>
                            <Typography sx={studenItemText}>
                              Final project. MOC interviews. Mentoring.
                            </Typography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack
                width="100%"
                direction="row"
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                <Box>
                  <Stack zIndex={10} sx={{ position: "absolute" }}>
                    <img
                      src={marketSupport}
                      style={{ width: "55px" }}
                      alt="sdfsd"
                    />
                  </Stack>
                  <Stack pl={2} pt={2} mt={3}>
                    <Card
                      sx={{
                        maxWidth: 250,
                        background: "#1C104F",
                        borderRadius: "10px",
                        padding: "8px",
                        minHeight: "210px",
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Stack>
                            <Typography sx={studentPItemTitle}>
                              Market support
                            </Typography>
                            <Typography sx={studenItemText}>
                              Follow up. Review sessions. Alumni sessions.
                              1-on-1 support. References and support from our
                              recruiting partners. Sharing job posts. Other job
                              support as needed.
                            </Typography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack
                width="100%"
                direction="row"
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                <Box>
                  <Stack zIndex={10} sx={{ position: "absolute" }}>
                    <img
                      src={careerSupport}
                      style={{ width: "55px" }}
                      alt="sdfsd"
                    />
                  </Stack>
                  <Stack pl={2} pt={2} mt={3}>
                    <Card
                      sx={{
                        maxWidth: 250,
                        background: "#1C104F",
                        borderRadius: "10px",
                        padding: "8px",
                        minHeight: "210px",
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Stack>
                            <Typography sx={studentPItemTitle}>
                              Career preparation support
                            </Typography>
                            <Typography sx={studenItemText}>
                              Prepare your professional resume. Prepare the
                              project descriptions.
                            </Typography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack
                width="100%"
                direction="row"
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                <Box>
                  <Stack zIndex={10} sx={{ position: "absolute" }}>
                    <img
                      src={graduateStudent}
                      style={{ width: "55px" }}
                      alt="sdfsd"
                    />
                  </Stack>
                  <Stack pl={2} pt={2} mt={3}>
                    <Card
                      sx={{
                        maxWidth: 250,
                        background: "#1C104F",
                        borderRadius: "10px",
                        padding: "8px",
                        minHeight: "210px",
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Stack>
                            <Typography sx={studentPItemTitle}>
                              Graduate
                            </Typography>
                            <Typography sx={studenItemText}>
                              Acquire certification in the chosen domain.
                              Prepare for a new career.
                            </Typography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack
                width="100%"
                direction="row"
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                <Box>
                  <Stack zIndex={10} sx={{ position: "absolute" }}>
                    <img
                      src={startNewCareer}
                      style={{ width: "55px" }}
                      alt="sdfsd"
                    />
                  </Stack>
                  <Stack pl={2} pt={2} mt={3}>
                    <Card
                      sx={{
                        maxWidth: 250,
                        background: "#1C104F",
                        borderRadius: "10px",
                        padding: "8px",
                        minHeight: "210px",
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Stack>
                            <Typography sx={studentPItemTitle}>
                              Start new career
                            </Typography>
                            <Typography sx={studenItemText}>
                              Encounter manifold career opportunities in your
                              domain.
                            </Typography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default StudentProcess;
