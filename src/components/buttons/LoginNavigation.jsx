import React from "react";
import { NavLink } from "react-router-dom";

const LoginNavigation = () => {
  return (
    <div>
      <ul>
        <small>
          Already have an account ?<NavLink to="/login"> Sign In</NavLink>
        </small>
      </ul>
    </div>
  );
};

export default LoginNavigation;
