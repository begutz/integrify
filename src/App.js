import React from "react";
import "./App.css";
import { Card } from "./components/Card";

function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);

  return (
    <div>
      <Card name={users[0]?.name} userName={users[0]?.username}></Card>
      <Card name={users[1]?.name}></Card>
      <Card name={users[2]?.name}></Card>
    </div>
  );
}

export default App;
