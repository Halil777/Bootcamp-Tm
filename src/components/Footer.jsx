import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  footerAccountButton,
  footerAdress,
  footerLinkStyle,
  footerSanly,
  footerStyle,
  iconButtonStyleFooter,
} from "../style/footerStyle.mjs";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import footerIcon from "../images/footerIcon.svg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import Spacer from "./Spacer.jsx";

const link = [
  {
    title: "home",
    link: "/home",
  },

  {
    title: "courses",
    link: "/courses",
  },

  {
    title: "enroll",
    link: "/enroll",
  },
];

const listItem = [
  {
    title: "Webinars",
    link: "/webinars",
  },

  {
    title: "About us",
    link: "/aboutUs",
  },

  {
    title: "Contact us",
    link: "/contactUs",
  },
];

const iconButton = [<LocalPhoneIcon />, <MailIcon />, <InstagramIcon />];

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box
        zIndex={100}
        sx={{
          ...footerStyle,
          display: { lg: "block", sm: "none", xs: "none" },
        }}
      >
        <Container>
          <Grid container pt={"55.1px"} zIndex={100}>
            <Grid item sm={4} xs={12} lg={2}>
              <Stack>
                <img src={logo} alt="logo" />
                <Typography sx={footerAdress}>
                  Ashgabat, Turkmenistan <br /> Parahat str, Buisness center
                  <br /> Arzuw
                </Typography>
              </Stack>
            </Grid>
            <Grid item sm={4} xs={12} lg={2}>
              <Stack alignItems="center" spacing={2}>
                {link.map((item, i) => {
                  return (
                    <Link
                      style={footerLinkStyle}
                      key={`link_key${i}`}
                      to={item.link}
                    >
                      {t(item.title)}
                    </Link>
                  );
                })}
              </Stack>
            </Grid>
            <Grid item sm={4} xs={12} lg={2}>
              <Stack alignItems="center" spacing={2}>
                {listItem.map((item, i) => {
                  return (
                    <Link
                      to={item.link}
                      key={`link_item_key${i}`}
                      style={footerLinkStyle}
                    >
                      {t(item.title)}
                    </Link>
                  );
                })}
              </Stack>
            </Grid>
            <Grid item sm={4} xs={12} lg={2}>
              <Stack alignItems={"center"}>
                <Button variant="outlined" sx={footerAccountButton}>
                  Account
                </Button>
              </Stack>
            </Grid>
            <Grid item sm={4} xs={12} lg={3}>
              <Stack justifyContent={"center"} alignItems={"center"}>
                <Stack spacing={4}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <img src={footerIcon} alt="footer icon" />
                    <Typography sx={footerSanly}>Sanly Bilim</Typography>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    {iconButton.map((item, i) => {
                      return (
                        <IconButton
                          sx={iconButtonStyleFooter}
                          key={`iconButton_key${i}`}
                        >
                          {item}
                        </IconButton>
                      );
                    })}
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Stack>
            <Spacer count={3} />
            <Divider color="#2F206A" />
            <Spacer count={2} />
            <Stack direction="row" justifyContent={"center"}>
              <Typography
                sx={{
                  color: "#4a3992",
                  fontSize: "12px",
                  fontFamily: "AppRegular",
                  fontWeight: "600",
                }}
              >
                Copyrights © 2023 All right reserved
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
      {/* SM Footer section starts here {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} */}
      <Box
        sx={{
          display: { sm: "block", xs: "none", lg: "none" },
          background: "#1c104f",
        }}
      >
        <Container>
          <Stack
            pt={3}
            direction="row"
            justifyContent={"space-between"}
            alignItems="flex-start"
          >
            <Stack direction="column">
              <img src={logo} style={{ width: "170px" }} alt="logo" />
              <Typography sx={{ ...footerAdress, paddingTop: "10px" }}>
                Ashgabat, Turkmenistan <br /> Parahat str, Buisness center
                <br /> Arzuw
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <img
                src={footerIcon}
                style={{ width: "50px", height: "50px" }}
                alt="footer icon"
              />
              <Typography sx={{ ...footerSanly, fontSize: "28px" }}>
                Sanly Bilim
              </Typography>
            </Stack>
          </Stack>
          <Spacer count={3} />
          <Stack direction="row" spacing={2} justifyContent="center">
            {iconButton.map((item, i) => {
              return (
                <IconButton
                  sx={iconButtonStyleFooter}
                  key={`iconButton_key${i}`}
                >
                  {item}
                </IconButton>
              );
            })}
          </Stack>
          <Spacer count={2} />
          <Divider color="#2F206A" />
          <Spacer count={2} />
          <Stack direction="row" justifyContent="center">
            <Typography
              sx={{
                color: "#4a3992",
                fontSize: "12px",
                fontFamily: "AppRegular",
                fontWeight: "600",
              }}
            >
              Copyrights © 2023 All right reserved
            </Typography>
          </Stack>
          <Spacer count={1} />
        </Container>
      </Box>
      {/* {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{XS Footer section starts here .......}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} */}
      <Box
        sx={{
          display: { sm: "none", xs: "block", lg: "none" },
          background: "#1c104f",
        }}
      >
        <Spacer count={2} />
        <Stack spacing={2} alignItems="center">
          <Stack direction="row" spacing={1} alignItems="center">
            <img
              src={footerIcon}
              style={{ width: "50px", height: "50px" }}
              alt="footer icon"
            />
            <Typography sx={{ ...footerSanly, fontSize: "28px" }}>
              Sanly Bilim
            </Typography>
          </Stack>
          <Typography
            sx={{ ...footerAdress, textAlign: "center", paddingTop: "10px" }}
          >
            Ashgabat, Turkmenistan <br /> Parahat str, Buisness center
            <br /> Arzuw
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            {iconButton.map((item, i) => {
              return (
                <IconButton
                  sx={iconButtonStyleFooter}
                  key={`iconButton_key${i}`}
                >
                  {item}
                </IconButton>
              );
            })}
          </Stack>
          <Typography
            sx={{
              color: "#4a3992",
              fontSize: "12px",
              fontFamily: "AppRegular",
              fontWeight: "600",
            }}
          >
            Copyrights © 2023 All right reserved
          </Typography>
        </Stack>
        <Spacer count={2} />
      </Box>
    </>
  );
};

export default Footer;
