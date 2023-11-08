import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home.jsx";
import User from "../../pages/user/User.jsx";
import Error from "../../pages/error/Error.jsx";
import Login from "../../pages/login/Login.jsx";
import Signup from "../../pages/signup/Signup.jsx";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Routing;
