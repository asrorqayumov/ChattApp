import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });
  const inputHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setError(" ");
  };

  const formHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((data) => {
        updateProfile(auth.currentUser, {
          displayName: user.name,
        })
          .then((res) => {
            navigate("/dashboard");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        let res = err.message.includes("already")
          ? "Sorry, this email is taken, please use another one"
          : "Password should be at least 6 characters";
        setError(res);
        console.log(err);
      });
  };
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
            Sign up
          </Typography>
          <Typography gutterBottom variant="body1">
            Get your Chat app account now.
          </Typography>
        </div>
        <div className="auth_body mt-20">
          <Card className="card-bg auth_card">
            <form onSubmit={formHandler}>
              <CardContent>
                <TextField
                  style={{ width: "100%" }}
                  type={"email"}
                  label="Email"
                  variant="outlined"
                  name="email"
                  autoComplete="off"
                  required
                  onChange={inputHandler}
                />
                <br />
                <TextField
                  style={{ width: "100%" }}
                  type={"text"}
                  label="Username"
                  className="mt-20"
                  variant="outlined"
                  name="name"
                  autoComplete="off"
                  required
                  onChange={inputHandler}
                />
                <br />
                <TextField
                  style={{ width: "100%" }}
                  className="mt-20"
                  type={"password"}
                  label="Password"
                  variant="outlined"
                  autoComplete="off"
                  name="password"
                  required
                  onChange={inputHandler}
                />
              </CardContent>
              <Typography align="center" variant="body1" color="red">
                {error}
              </Typography>
              <CardActions className="mt-10">
                <Button
                  type="submit"
                  style={{ width: "100%" }}
                  className="btn-primary"
                >
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
