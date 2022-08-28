import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/config";

const Navbar = () => {
  const navigate = useNavigate("");
  const handleSignout = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    await auth.signOut();
    navigate("/");
  };
  return (
    <nav>
      <h3>
        <Link to="/dashboard" className="d-flex-row">
          <img className="navbar_brand" src="./logo.svg" alt="" />
          Chat App
        </Link>
      </h3>
      <div>
        <Link to={"/profile"}>Profile</Link>
        <Button variant="outlined" color="error" onClick={handleSignout}>
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
