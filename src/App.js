import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Animes</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/anime">anime</Link> |{" "}
        <Link to="/search">Rechercher un anime</Link>
      </nav>
    </div>
  );
}
