import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, Link } from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import toyL from "../assets/icons/toyL.jpeg"
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function ButtonAppBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "rgb(25, 155, 255)", width: "100vw" }}
      >
        <Toolbar>
          <Typography variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
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
