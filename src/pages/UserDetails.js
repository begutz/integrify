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
  return (
    <div className="UserDetails">
      <ul>
        <li>Name: {user.name}</li>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
        <li>Phone: {user.phone}</li>
        <li>Company: {user.company.name}</li>
        <li>Website: {user.website}</li>
        <li>
          Address:
          <ul>
            <li>{user.address.street}</li>
            <li>{user.address.suite}</li>
            <li>{user.address.city}</li>
            <li>{user.address.zipcode}</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default UserDetails;
