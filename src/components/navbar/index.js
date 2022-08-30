import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/config";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

const Navbar = () => {
  const navigate = useNavigate("");
  const { user } = useContext(AuthContext);
  const handleSignout = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    await auth.signOut();
    navigate("/login");
  };
  return (
    <nav>
      <h3>
        <Link to={user?'/':'login'} className="d-flex-row">
          <img className="navbar_brand" src="./logo.svg" alt="" />
          Chat App
        </Link>
      </h3>
      <div>
        {user ? (
          <>
            {/* <Link to={"/profile"}>Profile</Link> */}
            <Button variant="outlined" color="error" onClick={handleSignout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/sign-up">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
