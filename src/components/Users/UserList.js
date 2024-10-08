import React from "react";
import Card from "../UI/Card";
import cls from "./UsersList.module.css";

const UserList = (props) => {
  return (
    <Card className={cls.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
