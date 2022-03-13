import { Link } from "react-router-dom";
import "./index.css";

export default function App() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
        }}
      >

        <div>
          <h1>Bienvenue sur mon projet de React</h1>
        </div>

        <div>
          <p>Pour rechercher un anime, cliquez sur la page suivante : <Link to="/search">Rechercher un anime</Link></p>

          Sur cette page, vous pouvez cliquer sur un anime afin d'ouvrir la page complète détaillée de l'anime.
        </div>

        <div>
          <p>Thibault BAZIN, Isitech B3 RPI</p>
        </div>
      </nav>
    </div>
  );
}