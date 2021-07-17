import { ProfilePic } from "./ProfilePic";
import { Button } from "./Button";
import "./Card.css";

export function Card({ name, userName, website }) {
  return (
    <div className="Card">
      <ProfilePic>{name}</ProfilePic>
      <h3>{name}</h3>
      <h4>@{userName}</h4>
      <a href={website}>{website}</a>
      <Button>More Details</Button>
    </div>
  );
}
