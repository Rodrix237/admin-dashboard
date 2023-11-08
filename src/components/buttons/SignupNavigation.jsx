import React from "react";
import { NavLink } from "react-router-dom";

const SignupNavigation = () => {
  return (
    <div className="navigation">
      <ul>
        <small>
          Don't have an account ?<NavLink to="/signup"> Register Here</NavLink>
        </small>
      </ul>
    </div>
  );
};

export default SignupNavigation;
