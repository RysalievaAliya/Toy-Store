import * as React from "react";
import { Paper, Container, Box, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <Paper
      sx={{
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        color: "black",
        backgroundColor: "rgb(25, 155, 255)",
        mt: "1rem",
        p: "1rem",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg" id="foot">
        <Box
          sx={{
            display: "fixed",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            m: 2,
          }}
        >
          <Link
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://github.com/RysalievaAliya/Toy-Store"
          >
            <InstagramIcon sx={{ mr: 7, color: "rgb(26, 18, 181)" }} />
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://github.com/RysalievaAliya/Toy-Store"
          >
            <TelegramIcon sx={{ mr: 7, color: "rgb(26, 18, 181)" }} />
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://github.com/RysalievaAliya/Toy-Store"
          >
            <WhatsAppIcon sx={{ mr: 7, color: "rgb(26, 18, 181)" }} />
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://github.com/RysalievaAliya/Toy-Store"
          >
            <TwitterIcon sx={{ mr: 7, color: "rgb(26, 18, 181)" }} />
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://github.com/RysalievaAliya/Toy-Store"
          >
            <MailOutlineIcon sx={{ mr: 7, color: "rgb(26, 18, 181)" }} />
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://github.com/RysalievaAliya/Toy-Store"
          >
            <GitHubIcon sx={{ mr: 7, color: "rgb(26, 18, 181)" }} />
          </Link>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        ></Box>
      </Container>
    </Paper>
  );
}
