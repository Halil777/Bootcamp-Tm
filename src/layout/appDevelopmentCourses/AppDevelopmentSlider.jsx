import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Spacer from "../../components/Spacer";
import { Link } from "react-scroll";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import dartLogo from "../../style/coursesImage/dart-logo-for-shares.svg";
import flutterLogo from "../../style/coursesImage/Google-flutter-logo.svg";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import certificate from "../../style/coursesImage/61c36d569c399f1b1fd84928_sdet_certificate 1.png";
import journeyLine from "../../style/coursesImage/Line 3.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const steps = [
  {
    label: "Get started",
  },
  {
    label: "Dart language",
  },
  {
    label: "Introduction    Flutter",
  },
  {
    label: "Flutter Advanced",
  },
  {
    label: "Finish Course (Get Certificate)",
  },
];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#CA0088",
  },
}));

const AppDevelopmentSlider = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Container>
        <Box sx={{ display: { lg: "block", sm: "none", xs: "none" } }}>
          <Grid container>
            <Grid item lg={8}>
              <Typography
                sx={{
                  color: "#f4f4f4",
                  fontSize: "30px",
                  fontFamily: "AppRegular",
                  fontWeight: "600",
                }}
              >
                App Development
              </Typography>
              <Spacer count={1} />
              <Typography
                sx={{
                  color: "#d8d8d8",
                  fontSize: "14px",
                  fontFamily: "AppRegular",
                  fontWeight: "400",
                }}
              >
                Learn how to create <b> IOS </b> and <b> Android </b> <br />
                mobile applications in Bootcamp <br /> with qualified teachers.
              </Typography>
              <Spacer count={2} />
              <Typography
                sx={{
                  color: "#d8d8d8",
                  fontSize: "14px",
                  fontFamily: "AppRegular",
                  fontWeight: "400",
                }}
              >
                This Automation Testing course is designed to train people with
                no IT background to become <br /> software engineers that
                combine software testing and development to automate the testing
                of <br /> software, using tools based on Java and Selenium.
              </Typography>
              <Spacer count={2} />
              <Typography
                sx={{
                  color: "#d8d8d8",
                  fontSize: "14px",
                  fontFamily: "AppRegular",
                  fontWeight: "400",
                }}
              >
                SDET course duration is six months. During this time period,
                students will learn the basis of <br /> software non-technical
                as well as technical skills required to be a successful Software
                Developer <br />
                Engineer in Testing (SDET). As part of the non-technical SDET
                training course, student will learn <br /> basis of software
                testing and software development models. Technical part of the
                SDET <br /> Automation Testing training is made of three parts:
                first students learn Java programming <br /> language. Next,
                they learn testing tools/frameworks such as Selenium WebDriver,
                TestNG, <br /> Cucumber, Junit, GIT, REST Assured, AWS and
                Jenkins. In this phase they will also learn SQL <br />
                (database) for backend testing. In the final phase of software
                testing training students will build <br /> different types of
                testing automation frameworks.
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <Box
                sx={{
                  borderRadius: "24px",
                  background: "#1C104F",
                }}
              >
                <Stack>
                  <Box
                    sx={{
                      background: "#261860",
                      p: 3,
                      borderRadius: "24px 24px 0px 0px",
                      width: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#f4f4f4",
                        fontSize: "30px",
                        fontFamily: "AppRegular",
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      Course details
                    </Typography>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Stack spacing={3} direction={"row"} alignItems="center">
                      <Stack ml={-3}>
                        <Box
                          sx={{
                            width: "3px",
                            height: "50px",
                            background: "#CA0088",
                          }}
                        />
                      </Stack>

                      <Link to="curriculum" smooth={true} duration={700}>
                        <Typography
                          sx={{
                            color: "#1D4CF2",
                            fontSize: "16px",
                            fontFamily: "AppRegular",
                            fontWeight: "400",
                            cursor: "pointer",
                          }}
                        >
                          About this course
                        </Typography>
                      </Link>
                    </Stack>
                    <Link to="programming" smooth={true} duration={700}>
                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "16px",
                          fontFamily: "AppRegular",
                          fontWeight: "400",
                          cursor: "pointer",
                        }}
                      >
                        Curriculum
                      </Typography>
                    </Link>
                    <Spacer count={1} />
                    <Link to="programming" smooth={true} duration={700}>
                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "16px",
                          fontFamily: "AppRegular",
                          fontWeight: "400",
                          cursor: "pointer",
                        }}
                      >
                        Programming languages and <br /> tools
                      </Typography>
                    </Link>
                    <Spacer count={1} />
                    <Link to="programming" smooth={true} duration={700}>
                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "16px",
                          fontFamily: "AppRegular",
                          fontWeight: "400",
                          cursor: "pointer",
                        }}
                      >
                        Course journey map
                      </Typography>
                    </Link>
                    <Spacer count={1} />
                    <Link to="programming" smooth={true} duration={700}>
                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "16px",
                          fontFamily: "AppRegular",
                          fontWeight: "400",
                          cursor: "pointer",
                        }}
                      >
                        Certification
                      </Typography>
                    </Link>
                    <Spacer count={1} />
                    <Link to="programming" smooth={true} duration={700}>
                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "16px",
                          fontFamily: "AppRegular",
                          fontWeight: "400",
                          cursor: "pointer",
                        }}
                      >
                        Pricing
                      </Typography>
                    </Link>
                    <Spacer count={1} />
                    <Link to="FAQ" smooth={true} duration={700}>
                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "16px",
                          fontFamily: "AppRegular",
                          fontWeight: "400",
                          cursor: "pointer",
                        }}
                      >
                        F.A.Q
                      </Typography>
                    </Link>
                    <Spacer count={1} />
                    <Link to="programming" smooth={true} duration={700}>
                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "16px",
                          fontFamily: "AppRegular",
                          fontWeight: "400",
                          cursor: "pointer",
                        }}
                      >
                        Reviews
                      </Typography>
                    </Link>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
          {/* {{{{{{{{{{{{{{{{{{{{{{{{{{{{Circulium section starts here ...}}}}}}}}}}}}}}}}}}}}}}}}}}}} */}
          <Spacer count={3} />
          <Grid container>
            <Grid item lg={8}>
              <Box id="curriculum">
                <Typography
                  sx={{
                    color: "#f4f4f4",
                    fontSize: "30px",
                    fontFamily: "AppRegular",
                    fontWeight: "600",
                  }}
                >
                  App development course Curriculum
                </Typography>
                <Spacer count={2} />
                <BorderLinearProgress variant="determinate" value={50} />
                <Spacer count={1} />
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#f4f4f4",
                      fontFamily: "AppRegular",
                      borderRadius: "10px",
                      border: "1px solid #1d4cf2",
                      backdropFilter: "blur(15px)",
                    }}
                  >
                    Dart
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#f4f4f4",
                      fontFamily: "AppRegular",
                      borderRadius: "10px",
                      backdropFilter: "blur(15px)",
                      background: "rgba(19, 11, 52, 0.5)",

                      "&:hover": {
                        background: "rgba(19, 11, 52, 0.5)",
                      },
                    }}
                  >
                    Flutter
                  </Button>
                </Stack>
                <Spacer count={2} />
                <Typography
                  sx={{
                    color: "#d8d8d8",
                    fontSize: "14px",
                    fontFamily: "AppRegular",
                    fontWeight: "400",
                  }}
                >
                  This Automation Testing course is designed to train people
                  with no IT background to become <br /> software engineers that
                  combine software testing and development to automate the
                  testing of <br />
                  software, using tools based on Java and Selenium.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          {/* {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{Cirsulium section ends here ....}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} */}

          {/* {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{Programming languages and Tools covered}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} */}

          <Spacer count={5} />

          <Grid container>
            <Grid item lg={8}>
              <Box id="programming">
                <Typography
                  sx={{
                    color: "#f4f4f4",
                    fontSize: "30px",
                    fontFamily: "AppRegular",
                    fontWeight: "600",
                  }}
                >
                  Programming languages and Tools covered
                </Typography>
                <Spacer count={2} />
                <Stack direction="row" justifyContentent="center" spacing={2}>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#f4f4f4",
                      fontFamily: "AppRegular",
                      borderRadius: "10px",
                      border: "1px solid #1d4cf2",
                      backdropFilter: "blur(15px)",
                      width: "120px",
                    }}
                  >
                    <img
                      src={dartLogo}
                      style={{
                        width: "20px",
                        height: "30px",
                        marginRight: "10px",
                      }}
                      alt="dart logo"
                    />
                    Dart
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#f4f4f4",
                      fontFamily: "AppRegular",
                      borderRadius: "10px",
                      border: "1px solid #1d4cf2",
                      backdropFilter: "blur(15px)",
                      width: "140px",
                    }}
                  >
                    <img
                      src={flutterLogo}
                      style={{
                        width: "20px",
                        height: "30px",
                        marginRight: "10px",
                      }}
                      alt="dart logo"
                    />
                    Flutter
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
          {/* {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{Course journey map section starts here ......}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} */}
          <Spacer count={5} />
          <Grid container>
            <Grid item lg={8}>
              <Box id="journey-map">
                <Typography
                  sx={{
                    color: "#f4f4f4",
                    fontSize: "30px",
                    fontFamily: "AppRegular",
                    fontWeight: "600",
                  }}
                >
                  Course journey map
                </Typography>
                <Spacer count={2} />
                <Box sx={{ maxWidth: 400 }}>
                  <Stepper
                    activeStep={activeStep}
                    orientation="vertical"
                    sx={{
                      "& .MuiStepIcon-root.MuiStepIcon-active": {
                        backgroundColor: "green",
                      },
                    }}
                  >
                    {steps.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel
                          sx={{
                            "& .MuiStepLabel-label": {
                              color: "blue",
                            },
                          }}
                          optional={
                            index === 4 ? (
                              <Stack direction="row" ml={"60%"}>
                                <img
                                  src={journeyLine}
                                  style={{ width: "200px", height: "2px" }}
                                  alt="journey line"
                                />
                              </Stack>
                            ) : null
                          }
                        >
                          {step.label}
                        </StepLabel>
                        <StepContent>
                          <Box sx={{ mb: 2 }}>
                            <div>
                              <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                {index === steps.length - 1
                                  ? "Finish"
                                  : "Continue"}
                              </Button>
                              <Button
                                disabled={index === 0}
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                Back
                              </Button>
                            </div>
                          </Box>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                  {activeStep === steps.length && (
                    <Stack
                      direction="row"
                      width="100%"
                      mt={-1}
                      ml={"80%"}
                      justifyContent="center"
                    >
                      <img
                        src={certificate}
                        alt="certificate"
                        style={{ width: "100%" }}
                      />
                    </Stack>
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
          {/* {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{F.A.Q section starts here ........}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} */}
          <Spacer count={6} />
          <Grid container>
            <Grid item lg={8}>
              <Box id="FAQ">
                <Typography
                  sx={{
                    color: "#f4f4f4",
                    fontSize: "30px",
                    fontFamily: "AppRegular",
                    fontWeight: "600",
                  }}
                >
                  F.A.Q
                </Typography>
                <Spacer count={1} />
                <Accordion>
                  <AccordionSummary
                    sx={{
                      background: "#130b34",
                    }}
                    expandIcon={<ArrowDropDownIcon sx={{ color: "#d8d8d8" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      sx={{
                        fontFamily: "AppRegular",
                        fontWeight: "400",
                        color: "#d8d8d8",
                        fontSize: "16px",
                      }}
                    >
                      This Automation Testing course?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      background: "#130b34",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "AppRegular",
                        fontWeight: "400",
                        color: "#d8d8d8",
                        fontSize: "13px",
                      }}
                    >
                      This Automation Testing course is designed to train people
                      with no IT background to become software engineers that
                      combine software testing and development to automate the
                      testing of software, using tools based on Java and
                      Selenium.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Spacer count={1} />
                <Accordion>
                  <AccordionSummary
                    sx={{
                      background: "#130b34",
                    }}
                    expandIcon={<ArrowDropDownIcon sx={{ color: "#d8d8d8" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      sx={{
                        fontFamily: "AppRegular",
                        fontWeight: "400",
                        color: "#d8d8d8",
                        fontSize: "16px",
                      }}
                    >
                      This Automation Testing course?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      background: "#130b34",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "AppRegular",
                        fontWeight: "400",
                        color: "#d8d8d8",
                        fontSize: "13px",
                      }}
                    >
                      This Automation Testing course is designed to train people
                      with no IT background to become software engineers that
                      combine software testing and development to automate the
                      testing of software, using tools based on Java and
                      Selenium.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Spacer count={1} />
                <Accordion>
                  <AccordionSummary
                    sx={{
                      background: "#130b34",
                    }}
                    expandIcon={<ArrowDropDownIcon sx={{ color: "#d8d8d8" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      sx={{
                        fontFamily: "AppRegular",
                        fontWeight: "400",
                        color: "#d8d8d8",
                        fontSize: "16px",
                      }}
                    >
                      This Automation Testing course?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      background: "#130b34",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "AppRegular",
                        fontWeight: "400",
                        color: "#d8d8d8",
                        fontSize: "13px",
                      }}
                    >
                      This Automation Testing course is designed to train people
                      with no IT background to become software engineers that
                      combine software testing and development to automate the
                      testing of software, using tools based on Java and
                      Selenium.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AppDevelopmentSlider;
