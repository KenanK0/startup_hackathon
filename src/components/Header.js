import {
  AppBar,
  Box,
  Button,
  Slide,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/CleanIT_Logo-nobg.png";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
function Header({ props }) {
  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar sx={{ height: "10vh", background: "#246b4d" }}>
          <Box sx={{ flexGrow: 1 }}>
            <img src={Logo} alt="Logo" style={{ height: 100 }} />
          </Box>

          <Button variant="outlined" color="inherit" sx={{ margin: 1 }}>
            <NavLink style={{ color: "white" }} to="/home">
              Home
            </NavLink>
          </Button>
          <Button variant="outlined" color="inherit" sx={{ margin: 1 }}>
            <NavLink style={{ color: "white" }} to="/leaderboard">
              Leaderboard
            </NavLink>
          </Button>
          <Button variant="outlined" color="inherit" sx={{ margin: 1 }}>
            <NavLink style={{ color: "white" }} to="/">
              Logout
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default Header;
