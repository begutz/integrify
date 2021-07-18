import "./UserDetails.css";
import { useUser } from "../hooks/useUser";
import { useParams } from "react-router";

export function UserDetails() {
  const { id } = useParams();
  const user = useUser(id);
  if (!user) {
    return null;
  }
  console.log(user);
  return <div className="UserDetails">{user.name}</div>;
}

export default UserDetails;
