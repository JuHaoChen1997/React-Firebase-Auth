import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function DisplayDB() {
  const { currentUser, logout } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/users`)
      .then((res) => {
        setUsers(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const allUsers = users.map((user, index) => {
    return (
      <div key={index}>
        <ul>
          <li> {user.user_name}</li>
          <li> {user.user_date_of_birth}</li>
          <li> {user.user_location}</li>
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h2>email is:</h2>
      {currentUser.email}
      <h3>user info from db:</h3>
      <div>{allUsers}</div>
    </div>
  );
}

export default DisplayDB;
