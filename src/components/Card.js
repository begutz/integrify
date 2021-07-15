export function Card({ name, userName, website }) {
  return (
    <div style={{ color: "red", font: "Helvetica" }}>
      <h1>{name}</h1>
      <h2>@{userName}</h2>
      <a href={website}>{website}</a>
      <button>MORE DETAILS</button>
    </div>
  );
}
