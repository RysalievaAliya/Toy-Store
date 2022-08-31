import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import "../styles/Contactus.css";

function ContactUs() {
  const { contact, error } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [changeColorProfile, setChangeColorProfile] = React.useState("#adadad");

  return (
    <div className="ContactUs">
      <Box>
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          variant="h4"
        >
          ContactUs
        </Typography>
        <Box
          sx={{
            m: "0 auto",
            width: "50",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            className="Name"
            id="standard-multiline-static"
            label="Name"
            multiline
            rows={2}
            variant="standard"
            sx={{ m: 2, width: "50vh" }}
            color="secondary"
          />
          <TextField
            id="standard-multiline-static"
            label="Email"
            multiline
            rows={2}
            variant="standard"
            sx={{ m: 2, width: "50vh" }}
            color="secondary"
          />

          <TextField
            id="standard-multiline-static"
            label="Message"
            multiline
            rows={2}
            variant="standard"
            sx={{ m: 2, width: "50vh" }}
            color="secondary"
          />
          <Button
            onClick={() => navigate("/")}
            className="contact"
            variant="contained"
            sx={{ backgroundColor: "#e91e63", mt: 2 }}
            color="secondary"
          >
            Success
          </Button>
          <Container maxWidth="sm"></Container>
        </Box>
      </Box>
    </div>
  );
}

export default ContactUs;
