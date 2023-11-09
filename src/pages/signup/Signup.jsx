import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import logo from "../../assets/logo.png";
import { message, Form, Input, Button, Select, Space } from "antd";
import { useNavigate } from "react-router-dom";
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import LoginNavigation from "../../components/buttons/LoginNavigation";

const { Option } = Select;

const Signup = () => {
  const url = "http://localhost:3000/api/user/add";
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const payload = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      phone: phone,
    };
    registerUser(payload);
  };

  const registerUser = (payload) => {
    axios
      .post(url, payload)
      .then((resp) => {
        console.log(resp.data.message);
        if (resp.status === 200) {
          message.success("Utilisateur enregistré avec succès");
          navigate("/login");
        } else if (resp.status === 400) {
          message.warning("Cet email est déjà utilisé");
        } else {
          message.warning("Erreur lors l'opération");
        }
      })
      .catch((err) => console.log(err));
    axios.interceptors.resp.use(
      (resp) => {
        return resp;
      },
      (err) => {
        if (err.resp.status === 400) {
          message.warning("Utilisateur déjà présent");
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
              Create your <br /> account{" "}
            </h1>
            <Form onSubmit={handleSubmit}>
              <div style={{ display: "flex" }}>
                <Form.Item
                  name={"firstname"}
                  rules={[
                    {
                      required: true,
                      message: "Please, enter your firstname",
                    },
                    {
                      type: "text",
                      message: "firstname is not valid",
                      warningOnly: true,
                    },
                  ]}
                >
                  <Input
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="Firstname"
                    id="firstname"
                    style={{ width: "250px", marginRight: "10px" }}
                    prefix={<UserOutlined />}
                  />
                </Form.Item>
                <Form.Item
                  name={"lastname"}
                  rules={[
                    {
                      required: true,
                      message: "Please, enter your lastname",
                    },
                    {
                      type: "text",
                      message: "lastname is not valid",
                      warningOnly: true,
                    },
                  ]}
                >
                  <Input
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="Lastname"
                    id="lastname"
                    style={{ width: "250px", marginRight: "10px" }}
                    prefix={<UserOutlined />}
                  />
                </Form.Item>
              </div>
              <div style={{ display: "flex" }}>
                <Form.Item
                  name={"email"}
                  rules={[
                    {
                      required: true,
                      message: "Please, enter your email",
                    },
                    {
                      type: "email",
                      message: "email is not valid",
                      warningOnly: true,
                    },
                  ]}
                >
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    id="email"
                    style={{ width: "250px", marginRight: "10px" }}
                    prefix={<MailOutlined />}
                  />
                </Form.Item>
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
                    placeholder="Password"
                    id="password"
                    style={{ width: "250px", marginRight: "10px" }}
                    prefix={<LockOutlined />}
                  />
                </Form.Item>
              </div>
              <div style={{ display: "flex" }}>
                <Form.Item
                  name={"phone"}
                  rules={[
                    {
                      required: true,
                      message: "Please, enter your phone number",
                    },
                    {
                      type: "text",
                      message: "phone number is not valid",
                      warningOnly: true,
                    },
                  ]}
                >
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                    id="phone"
                    style={{ width: "250px", marginRight: "10px" }}
                    prefix={<PhoneOutlined />}
                  />
                </Form.Item>
              </div>
              <Form.Item>
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ width: "150px" }}
                  onClick={handleSubmit}
                >
                  Register
                </Button>
              </Form.Item>
              <div className="navigation">
                <LoginNavigation />
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

export default Signup;
