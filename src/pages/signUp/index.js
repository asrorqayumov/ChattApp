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
const SignUp = () => {
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
                <br />
                <TextField
                  style={{ width: "100%" }}
                  type={"text"}
                  label="Username"
                  className="mt-20"
                  variant="outlined"
                  name="name"
                  required
                />
                <br />
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
                  Sign up
                </Button>
              </CardActions>
            </form>
          </Card>
        </div>
        <div className="auth_footer mt-30">
          <div className="d-flex-row">
            <Typography>Already have an account ?</Typography>
            <Link to="/" className="auth_link">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
