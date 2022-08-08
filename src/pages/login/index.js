import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="body-bg auth-page d-flex">
      <div>
        <div className="auth_header">
          <div className="d-flex-row mb-30">
            <img src="./logo.svg" alt="chat-logo" className="login-brand" />
            <Typography
              variant="h5"
              fontWeight={500}
              gutterBottom
              className="gray-700"
            >
              Chat App
            </Typography>
          </div>
          <Typography
            variant="h5"
            fontWeight={600}
            gutterBottom
            className="gray-700"
          >
            Sign in
          </Typography>
          <Typography gutterBottom variant="body1">
            Sign in to continue to Chatvia.
          </Typography>
        </div>
        <div className="auth_body mt-20">
          <Card className="card-bg auth_card">
            <form action="">
              <CardContent>
                <TextField
                  style={{ width: "100%" }}
                  type={"email"}
                  label="Email"
                  variant="outlined"
                  name="email"
                  required
                />
                <TextField
                  style={{ width: "100%" }}
                  className="mt-20"
                  type={"password"}
                  label="Password"
                  variant="outlined"
                  name="password"
                  required
                />
              </CardContent>

              <CardActions className="mt-10">
                <Button style={{ width: "100%" }} className="btn-primary">
                  Sign In
                </Button>
              </CardActions>
            </form>
          </Card>
        </div>
        <div className="auth_footer mt-30">
          <div className="d-flex-row">
            <Typography>Don't have an account ?</Typography>
            <Link to="/sign-up" className="auth_link">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
