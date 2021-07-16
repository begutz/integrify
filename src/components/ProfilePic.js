import "./ProfilePic.css";

export function ProfilePic({ children }) {
  return (
    <div className="ProfilePic">
      <span className="ProfilePic-letter">{children.charAt(0)}</span>
    </div>
  );
}
