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

  users.map((user) => console.log(user));

  return (
    <div className="App">
      {users.map((user) => (
        <Card
          name={user.name}
          userName={user.username}
          website={user.website}
        ></Card>
      ))}
    </div>
  );
}

export default App;
