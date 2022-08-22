import * as React from "react";
import {
  Paper,
  Container,
  Typography,
  Box,
  Link,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <Paper
      sx={{ left: 0, bottom: 0, right: 0, width: "100%", color: "black", backgroundColor: "black", mt: "1rem", p : "1rem"
}}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg" sx={{ maxHeight: 120 }}>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            m: 2,
          }}
        >
          <Link
            target="_blank"
            href="https://github.com/RysalievaAliya/Cosmetics-store"
          >
            <InstagramIcon sx={{ mr: 7, color: "white" }} />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/RysalievaAliya/Cosmetics-store"
          >
            <TelegramIcon sx={{ mr: 7, color: "white" }} />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/RysalievaAliya/Cosmetics-store"
          >
            <WhatsAppIcon sx={{ mr: 7, color: "white" }} />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/RysalievaAliya/Cosmetics-store"
          >
            <TwitterIcon sx={{ mr: 7, color: "white" }} />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/RysalievaAliya/Cosmetics-store"
          >
            <MailOutlineIcon sx={{ mr: 7, color: "white" }} />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/RysalievaAliya/Cosmetics-store"
          >
            <GitHubIcon sx={{ mr: 7, color: "white" }} />
          </Link>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
        </Box>
      </Container>
    </Paper>
  );
}
