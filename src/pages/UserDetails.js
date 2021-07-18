import "./UserDetails.css";
import { useUser } from "../hooks/useUser";

export function UserDetails() {
  const user = useUser(1);
  console.log(user);
  return <div className="UserDetails">Begum Utz</div>;
}

export default UserDetails;
