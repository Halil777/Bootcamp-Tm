import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import {
  iconStyle,
  languageStyle,
  linkAvtiveStyle,
  navbarStyle,
} from "../style/navbarStyle.mjs";
import { Stack, Typography } from "@mui/material";
import logo from "../images/logo.png";
import logo1 from "../images/logo1.png";
import { navbarData } from "../data/navbarData/navbar.mjs";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TranslateIcon from "@mui/icons-material/Translate";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { styled, alpha } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import i18n from "../utils/i18n.mjs";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 30,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function Navbar() {
  const location = useLocation();
  const [lng, setLng] = React.useState("en");

  useEffect(() => {
    if (lng === "tm" || lng === "" || lng === undefined) {
      i18n.changeLanguage("tm");
      localStorage.setItem("lng", "tm");
    } else if (lng === "en") {
      i18n.changeLanguage("en");
      localStorage.setItem("lng", "en");
    } else {
      i18n.changeLanguage("ru");
      localStorage.setItem("lng", "ru");
    }
  }, [lng]);

  const handleChange = (event) => {
    setLng(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { t } = useTranslation();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack pt={3} direction="column" pl={5} alignItems={"flex-start"}>
        {navbarData.map((item, i) => {
          return (
            <>
              <Stack direction="column" spacing={0.5} alignItems={"center"}>
                <Link style={linkAvtiveStyle} to={item.link}>
                  {t(item.title)}
                </Link>
                <Box
                  sx={{
                    display: item.link === location.pathname ? "flex" : "none",
                    backgroundColor: "#CA0088",
                    width: "5px",
                    height: "5px",
                  }}
                ></Box>
              </Stack>
            </>
          );
        })}
      </Stack>
    </Box>
  );
  return (
    <AppBar position="static" sx={navbarStyle}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
              height: "70px",
              alignItems: "center",
            },
          }}
        >
          <Container>
            <Stack
              direction={"row"}
              alignItems="center"
              justifyContent="space-between"
            >
              <img src={logo} alt="logo" />
              <Stack direction="row" spacing={3}>
                {navbarData.map((item, i) => {
                  return (
                    <>
                      <Stack
                        direction="column"
                        spacing={0.5}
                        alignItems={"center"}
                      >
                        <Link style={linkAvtiveStyle} to={item.link}>
                          {t(item.title)}
                        </Link>
                        <Box
                          sx={{
                            display:
                              item.link === location.pathname ? "flex" : "none",
                            backgroundColor: "#CA0088",
                            width: "5px",
                            height: "5px",
                          }}
                        ></Box>
                      </Stack>
                    </>
                  );
                })}
              </Stack>
              <Stack direction="row" spacing={2}>
                <img src={logo1} alt="logo 1" />
                {/* lagnuage section starts here ....... */}
                <div>
                  <IconButton sx={languageStyle} onClick={handleClick}>
                    <Stack direction="row" spacing={0} alignItems="center">
                      <TranslateIcon sx={{ fontSize: "17px" }} />
                      <ArrowDropDownIcon sx={{ fontSize: "17px" }} />
                    </Stack>
                  </IconButton>
                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      "aria-labelledby": "demo-customized-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem
                      onChange={(e) =>
                        setLng(
                          i18n.changeLanguage("tm"),
                          localStorage.setItem("lng", "tm")
                        )
                      }
                      value={"tm"}
                      // onChange={(e) => setLng(e.target.value)}
                    >
                      TM
                    </MenuItem>
                    <MenuItem
                      value={"en"}
                      onChange={(e) =>
                        setLng(
                          i18n.changeLanguage("en"),
                          localStorage.setItem("lng", "en")
                        )
                      }
                    >
                      ENG
                    </MenuItem>
                    <MenuItem
                      value={"ru"}
                      onChange={(e) =>
                        setLng(
                          i18n.changeLanguage("ru"),
                          localStorage.setItem("lng", "ru")
                        )
                      }
                    >
                      RU
                    </MenuItem>
                  </StyledMenu>
                </div>
                {/* language section ends here ......... */}
                <IconButton sx={iconStyle}>
                  <PersonOutlineOutlinedIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Container>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Stack direction="row" alignItems="center" spacing={3}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={toggleDrawer(anchor, true)}
                >
                  <MenuIcon />
                </IconButton>
                <img src={logo} alt="logo" />
              </Stack>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </Box>
      </Container>
    </AppBar>
  );
}
export default Navbar;
