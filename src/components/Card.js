import { ProfilePic } from "./ProfilePic";

export function Card({ name, userName, website }) {
  return (
    <div>
      <ProfilePic>{name}</ProfilePic>
      <h1>{name}</h1>
      <h2>@{userName}</h2>
      <a href={website}>{website}</a>
      <button>MORE DETAILS</button>
    </div>
  );
}
