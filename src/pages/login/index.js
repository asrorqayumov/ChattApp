import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { doc, updateDoc } from "firebase/firestore";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError(" ");
  };

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      await updateDoc(doc(db, "users", result.user.uid), {
        isOnline: true,
      });

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
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
            Sign in
          </Typography>
          <Typography gutterBottom variant="body1">
            Sign in to continue to Chat app.
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
                  required
                  autoComplete="off"
                  onChange={inputHandler}
                />
                <TextField
                  style={{ width: "100%" }}
                  className="mt-20"
                  type={"password"}
                  label="Password"
                  variant="outlined"
                  name="password"
                  required
                  onChange={inputHandler}
                />
              </CardContent>

              <Typography align="center" variant="body1" color="red">
                {error}
              </Typography>
              <CardActions>
                <Button
                  style={{ width: "100%" }}
                  type="submit"
                  className="btn-primary"
                >
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
