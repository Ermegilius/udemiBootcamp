"use strict";
import React from "react";
import Input from "./Input";

const Login = ({ onClick }) => {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <button type="button" onClick={onClick}>
        Login
      </button>
    </form>
  );
};

export default Login;
