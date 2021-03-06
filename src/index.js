import { render } from "react-dom";
import "./index.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Search from "./routes/search";
import Anime from "./routes/anime";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="search" element={<Search />} />
      <Route path="anime/:mal_id" element={<Anime />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);