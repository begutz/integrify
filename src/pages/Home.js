import React from "react";

import "./Home.css";
import { Card } from "../components/Card";
import { useUsers } from "../hooks/useUsers";

function Home() {
  const users = useUsers();

  return (
    <div className="Home">
      {users.map((user) => (
        <Card
          key={user.id}
          name={user.name}
          userName={user.username}
          website={user.website}
          userId={user.id}
        ></Card>
      ))}
    </div>
  );
}

export default Home;
