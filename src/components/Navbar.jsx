import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Button, Link } from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import toyL from "../assets/icons/toyL.jpeg"
import StarBorderIcon from '@mui/icons-material/StarBorder';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function showSettings(event) {
  event.preventDefault();
}

export default function Navbar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{ backgroundColor: "rgb(25, 155, 255)", width: "100vw" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link href='/' style={{ textDecoration: 'none' }}>
              <IconButton>
                <img
                  src={toyL}
                  alt="logo"
                  style={{ width: "20vmin", minWidth: "40px", maxWidth: "90%" }}
                />
              </IconButton>
            </Link>
          </Typography>
          <Link
            href="/favorite" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                my: 1,
                color: "rgb(26, 18, 181)",
                width: "100%",
                textTransform: "capitalize",
              }}
            >
              <StarBorderIcon />
            </Button>
          </Link>
          <Link
            href="/cart" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                my: 1,
                color: "rgb(26, 18, 181)",
                width: "100%",
                textTransform: "capitalize",
              }}
            >
              <ShoppingCartIcon/>
            </Button>
          </Link>
          <Link href="/register" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                my: 1,
                color: "rgb(26, 18, 181)",
                width: "100%",
                textTransform: "capitalize",
              }}
            >
              Register
            </Button>
          </Link>
          <Link href="/login" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                my: 1,
                color: "rgb(26, 18, 181)",
                width: "100%",
                textTransform: "capitalize",
              }}
            >
              Login
            </Button>
          </Link>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <ContactSupportIcon sx={{ color:"rgb(26, 18, 181)"}}/>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
