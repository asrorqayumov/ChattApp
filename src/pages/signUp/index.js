import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/config";

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { email, name, password } = user;

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError("");
  };

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
     
      await setDoc(doc(db, "users",result.user.uid), {
        uid: result.user.uid,
        name,
        email,
        createdAt: Timestamp.fromDate(new Date()),
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
          <Typography
            variant="h4"
            fontWeight={500}
            gutterBottom
            className="gray-700"
          >
            Sign up
          </Typography>
          <Typography gutterBottom variant="body1">
            Get your Chat app account now.
          </Typography>
        </div>
        <div className="auth_body mt-30">
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
                  onChange={inputHandler}
                  required
                  sx={{input:{color:'#a6b0cf'},label:{color:'#a6b0cf'},fieldset:{borderColor:'#a6b0cf'}}}
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
                  onChange={inputHandler}
                  required
                  sx={{input:{color:'#a6b0cf'},label:{color:'#a6b0cf'},fieldset:{borderColor:'#a6b0cf'}}}
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
                  onChange={inputHandler}
                  required
                  sx={{input:{color:'#a6b0cf'},label:{color:'#a6b0cf'},fieldset:{borderColor:'#a6b0cf'}}}
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
            <Link to="/login" className="auth_link">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
