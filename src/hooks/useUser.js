import React from "react";

export function useUser(id) {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  return user;
}
