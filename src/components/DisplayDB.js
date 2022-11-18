import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL; //localhost:3333

function DisplayDB() {
  const { currentUser, logout } = useAuth();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/users/${currentUser.email}`)
      .then((res) => {
        setUser(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const allUsers = users.map((user, index) => {
  //   return (
  //     <div key={index}>
  //       <ul>
  //         <li> {user.user_name}</li>
  //         <li> {user.user_date_of_birth}</li>
  //         <li> {user.user_location}</li>
  //       </ul>
  //     </div>
  //   );
  // });

  console.log(user);
  return (
    <div>
      <h2>email is:</h2>
      {/* current user is the object contains login user's personal email */}
      {currentUser.email}
      <h3>user info from db:</h3>
      <div>{user.user_location}</div>
      <div>{user.user_trade_score}</div>
    </div>
  );
}

export default DisplayDB;
