export function Card({ name, userName }) {
  return (
    <div style={{ color: "red", font: "Helvetica" }}>
      {name} @{userName}
    </div>
  );
}
