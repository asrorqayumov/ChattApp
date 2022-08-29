import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import AuthProvider from "./context/auth";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/Profile";
import SignUp from "./pages/signUp";

function App() {
  return (
    <AuthProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />         
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </AuthProvider>
  );
}

export default App; 
