import { ProfilePic } from "./ProfilePic";
import { Button } from "./Button";

export function Card({ name, userName, website }) {
  return (
    <div>
      <ProfilePic>{name}</ProfilePic>
      <h1>{name}</h1>
      <h2>@{userName}</h2>
      <a href={website}>{website}</a>
      <Button>More Details</Button>
    </div>
  );
}
