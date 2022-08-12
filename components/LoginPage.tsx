import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Registration from "../components/modal/Registration";
import { gql, useMutation } from "@apollo/client";

const LOGIN_USER = gql`
  mutation authenticateUserWithPassword($email: String, $password: String) {
    authenticateUserWithPassword(email: $email, password: $password) {
      token
    }
  }
`;

export default function LoginPage() {
  //TODO: Example: mutation authenticateUserWithPassword
  const [loginUser] = useMutation(LOGIN_USER);

  //TODO: Add form validations

  return (
    <Container maxWidth="xs">
      <Box mt={8}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography
              variant="h2"
              gutterBottom
              component="div"
              color="primary.dark"
            >
              PLAY 2048
            </Typography>
          </Grid>
          <Grid item pt={2}>
            <Avatar alt="Firstname lastname" sx={{ width: 64, height: 64 }} />
          </Grid>
          <Grid item pt={2}>
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              color="primary.dark"
            >
              Sign In
            </Typography>
          </Grid>
          <Box component="form" autoComplete="off" width={"100%"} pt={2}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField label="E-mail" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField type="password" label="Password" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  onClick={() => {
                    console.log("Log in");
                    //TODO: EXAMPLE call mutation loginUser
                    loginUser({
                      variables: {
                        email: "filip@gmail.com",
                        password: "filipgmail",
                      },
                    }).then(({ data }) => {
                      console.log("data", data);
                    });
                  }}
                >
                  Sign in
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Grid container justifyContent="space-between" mt={2}>
            <Grid item>
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("Forgot password?");
                }}
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("Don't have an account? Sign Up");
                }}
              >
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Registration />
    </Container>
  );
}
