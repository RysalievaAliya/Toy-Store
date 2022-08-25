import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../contexts/AuthContextProvider";
import { List } from "@mui/material";

function Copyright(props) {
  return (
    <Typography color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function RegisterPage() {
  const { register, error, setError } = useAuth();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  const handleSave = (event) => {
    event.preventDefault();
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Заполните поля!");
      return;
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirm", passwordConfirm);
    register(formData);
  };

  console.log(email, password, passwordConfirm);
  React.useEffect(() => {
    setError(false);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url("https://liter.kz/cache/imagine/1200/uploads/news/2022/07/20/62d7c527620b4421130545.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          sx={{ bgcolor: "#ebf95f" }}
          // #f0a3d5
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#41f25a" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography sx={{ color: "#41f25a" }} component="h1" variant="h5">
              Sing Up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1, color: "black" }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#41f25a", color: "black" }}
                onClick={handleSave}
              >
                {/* "#c848ce" */}
                Sing Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link sx={{ color: "black" }} href="#">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#">
                    <List sx={{ color: "black" }} to="/login">
                      {"Don't have an account? Sign Up"}
                    </List>
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
