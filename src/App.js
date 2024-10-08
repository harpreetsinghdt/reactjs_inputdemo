import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App(props) {
  const [users, setUsers] = useState([]);
  const addUserHanlde = (user) => {
    setUsers((prev) => {
      return [user, ...prev];
    });
  };

  return (
    <div className="App">
      <AddUser iAddUser={addUserHanlde} />
      <UserList users={users} />
    </div>
  );
}

export default App;
