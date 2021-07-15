import React from "react";
import "./App.css";

function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}

export default App;
