import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest"
// import { useContext , useRef } from "react"
// import { AuthContext } from "../../contexts/AuthContext"
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from "react";


const theme = createTheme();

const Login = () => {
  const navigate = useNavigate();
  const sendRequest = useRequest()
  const auth = useContext(AuthContext)
  const handleSubmit = (event) => {
    event.preventDefault();
    sendRequest(process.env.REACT_APP_API_URL + "/users/login", {}, {
      userNameOrEmail: event.target.querySelector('input[name=userNameOrEmail]').value,
      password: event.target.querySelector('input[name=password]').value
    }, { type: 'json' }, 'POST')
      .then((response) => {
        if (response.success) {
          auth.login(response) 
          navigate('/')
        } else {
          window.alert(response.messages)
        }
      });
  };

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
            backgroundImage: "url(https://expatguideturkey.com/wp-content/uploads/2020/10/which-ways-may-be-followed-in-making-long-distance-travel.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: t =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              login
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                // ref={userNameOrEmailRef}
                id="userNameOrEmail"
                label="Username or Email"
                name="userNameOrEmail"
                autoComplete="current-userNameOrEmail"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                // ref={passwordRef}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                logIn
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item className="btn btn-ouline-dark  container-fluid mt-3 mb-2">
                  Don't have an account ?  
                  <Link
                    to="/signup"
                    className=""
                    style={{ color: "blue",  textDecoration: 'none'}}
                  >
                       Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default Login