import "./Button.css";
import { Link } from "react-router-dom";

export function Button({ children, to }) {
  return (
    <Link to={to} className="Button">
      {children}
    </Link>
  );
}
