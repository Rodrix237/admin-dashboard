import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Table } from "antd";

const User = () => {
  const url = "http://localhost:3000/api/user/all";
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let email = sessionStorage.getItem("email");
    if (email === "" || email === null) {
      navigate("/login");
    }
    getUsers();
  }, []);

  const columns = [
    {
      title: "Prénom",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Nom",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Profile",
      dataIndex: "profil",
      key: "profil",
    },
  ];

  const getUsers = () => {
    setLoading(true);
    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data);
        setUsers(resp.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2 style={{ marginLeft: "20px" }}>Utilisateurs</h2>
      <div style={{ marginLeft: "20px", width: "80vw", marginTop: "20px" }}>
        <Table loading={loading} dataSource={users} columns={columns} />
      </div>
    </div>
  );
};

export default User;
