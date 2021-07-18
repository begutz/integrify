import React from "react";

import "./Home.css";
import { Card } from "../components/Card";

function Home() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  users.map((user) => console.log(user));

  return (
    <div className="Home">
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

export default Home;
