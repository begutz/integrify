export function Card({ name, username }) {
  return (
    <div style={{ color: "red", font: "Helvetica" }}>
      {name} @{username}
    </div>
  );
}
