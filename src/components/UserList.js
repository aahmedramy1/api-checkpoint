import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
const axios = require("axios");

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    function getUserList() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setListOfUsers(res.data))
        .catch((err) => console.log(err));
    }

    getUserList();
  }, []);

  console.log(listOfUsers);
  return (
    <div>
      {listOfUsers.map((user) => {
        return <UserCard person={user} />;
      })}
    </div>
  );
};

export default UserList;
