import "./ProfilePic.css";

export function ProfilePic({ children }) {
  return <div className="ProfilePic">{children.charAt(0)}</div>;
}
