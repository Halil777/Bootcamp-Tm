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
    title: "webinars",
    link: "/webinars",
  },

  {
    title: "about us",
    link: "/aboutUs",
  },

  {
    title: "contact us",
    link: "/contactUs",
  },
];

const iconButton = [<LocalPhoneIcon />, <MailIcon />, <InstagramIcon />];

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box sx={footerStyle}>
        <Container>
          <Grid container pt={"55.1px"}>
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
              <Stack alignItems="center">
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
              <Stack alignItems="center">
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
            <Divider color="#2F206A" sx={{ marginTop: "98px" }} />
            <Typography sx={{ textAlign: "center" }}>
              Copyrights 2022 All right reserved
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
