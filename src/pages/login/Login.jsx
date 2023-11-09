import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Login.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { message, Form, Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import SignupNavigation from "../../components/buttons/SignupNavigation.jsx";

const Login = () => {
  const url = "http://localhost:3000/api/user/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const payload = {
      email: email,
      password: password,
    };
    authenticateUser(payload);
  };

  const authenticateUser = (payload) => {
    axios
      .post(url, payload)
      .then((resp) => {
        console.log(resp.data.message);
        if (resp.data.message === "Authorised") {
          sessionStorage.setItem("email", email);
          message.success("Connexion réussie");
          navigate("/");
        } else {
          message.warning("Le mot de passe  est incorrect.");
        }
      })
      .catch((err) => console.log(err));
    axios.interceptors.resp.use(
      (resp) => {
        return resp;
      },
      (err) => {
        if (err.resp.status === 401) {
          message.warning("Accès refusée. Vérifier les informations saisies.");
        }
      }
    );
  };

  return (
    <div className="bgLogin">
      <div className="container">
        <div className="container-form">
          <div className="imageform">
            {" "}
            <img src={logo} alt="logo" />
          </div>

          <div className="form-login">
            <h1>
              Welcome back to <br />
              <font color="blue">ROD'App</font>
            </h1>
            <small>Sign in to your account below</small>
            <Form onSubmit={handleSubmit}>
              <div className="field-input">
                <Form.Item
                  name={"email"}
                  rules={[
                    {
                      required: true,
                      message: "Please, enter your email",
                    },
                    {
                      type: "email",
                      message: "Email is not valid",
                      warningOnly: true,
                    },
                  ]}
                >
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    id="email"
                    style={{ width: "400px" }}
                    prefix={<MailOutlined />}
                  />
                </Form.Item>
              </div>
              <div className="field-input">
                <Form.Item
                  name={"password"}
                  rules={[
                    {
                      required: true,
                      message: "Please, enter your password",
                    },
                    {
                      type: "password",
                      message: "password is not valid",
                      warningOnly: true,
                    },
                  ]}
                >
                  <Input.Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="input"
                    id="password"
                    style={{ width: "400px" }}
                    prefix={<LockOutlined />}
                  />
                </Form.Item>
              </div>
              <Button
                htmlType="submit"
                type="primary"
                style={{ width: "150px" }}
                onClick={handleSubmit}
              >
                Log In
              </Button>
              <div className="navigation">
                <SignupNavigation />
              </div>
            </Form>
          </div>
        </div>
        <div className="container-image">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
