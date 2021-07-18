import { ProfilePic } from "./ProfilePic";
import { Button } from "./Button";
import "./Card.css";

export function Card({ name, userName, website, userId }) {
  return (
    <div className="Card">
      <ProfilePic>{name}</ProfilePic>
      <h3 className="Card-name">{name}</h3>
      <h4 className="Card-username">@{userName}</h4>
      <a className="Card-website" href={website}>
        {website}
      </a>
      <Button className="Card-button" to={`/user/${userId}`}>
        More Details
      </Button>
    </div>
  );
}
