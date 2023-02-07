import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import { navbarStyle } from "../style/navbarStyle.mjs";

function Navbar() {
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
      salam
    </Box>
  );
  return (
    <AppBar position="static" sx={navbarStyle}>
      <Container maxWidth="xl">
        <Box sx={{ display: { xs: "none", md: "flex" } }}>waleykimessalam</Box>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
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
