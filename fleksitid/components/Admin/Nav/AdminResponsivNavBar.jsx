"use client";
"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";

const hoverColor = "#CCCCCC";
const selectedColor = "#CCCCCC";

const titler = ["Dashboard", "Ny bruker", "Oppdater bruker", "Slett bruker"];
const pages = [
  "/admin",
  "/admin/nyBruker",
  "/admin/oppdaterBruker",
  "/admin/slettBruker",
];
function erValidURL(url) {
  return pages.includes(url);
}
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [selectedButton, setSelectedButton] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleButtonClick = (index) => {
    const url = pages[index];
    if (erValidURL(url)) {
      setSelectedButton(index);
      handleCloseNavMenu();
    }
  };

  const handleLogout = () => {
    window.location.href = "/";
  };

  React.useEffect(() => {
    const currentPath = window.location.pathname;
    const selectedIndex = pages.findIndex((page) => page === currentPath);
    setSelectedButton(selectedIndex);
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#800080" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/admin"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FLEXITID
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={() => handleButtonClick(index)}>
                  <Typography
                    textAlign="center"
                    component="a"
                    href={page}
                    sx={{ color: "#0000FF" }}
                  >
                    {titler[index]}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/admin"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FLEXITID
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {titler.map((tittel, index) => (
              <Button
                key={tittel}
                component="a"
                href={pages[index]}
                onClick={() => handleButtonClick(index)}
                sx={{
                  my: 2,
                  color: selectedButton === index ? "#000000" : "white",
                  display: "block",
                  backgroundColor:
                    selectedButton === index ? selectedColor : "#800080",
                  "&:hover": {
                    backgroundColor: hoverColor,
                    color: "#000000",
                  },
                }}
              >
                {tittel}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              onClick={handleLogout}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                backgroundColor: "#800080",
                "&:hover": {
                  backgroundColor: hoverColor,
                  color: "#000000",
                },
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
