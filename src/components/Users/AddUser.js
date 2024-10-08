import React, { useState } from "react";
import Card from "../UI/Card";
import cls from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isError, setIsError] = useState();

  const submitHandle = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setIsError({
        title: "Invalid input!",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+age < 1) {
      setIsError({
        title: "Invalid age!",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    const user = { username, age, id: Math.random() };
    props.iAddUser(user);
    setUsername("");
    setAge("");
  };

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    }
    if (e.target.name === "age") {
      setAge(e.target.value);
    }
  };

  const errorHanlde = () => {
    setIsError(null);
  };

  return (
    <>
      {isError && (
        <ErrorModal
          title={isError.title}
          message={isError.message}
          iHandleClose={errorHanlde}
        />
      )}
      <Card className={cls.input}>
        <form onSubmit={submitHandle}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            value={age}
            onChange={handleChange}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
