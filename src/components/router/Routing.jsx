import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home.jsx";
import User from "../../pages/user/User.jsx";
import Error from "../../pages/error/Error.jsx";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Routing;
