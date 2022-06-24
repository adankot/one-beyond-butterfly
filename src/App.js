import "./App.css";
import React, { useContext } from "react";
import { NavigagtionContext } from "./contexts/NavigationContext";
import Menu from "./pages/Menu";
import Game from "./pages/Game";
import Haha from "./pages/Haha";

const App = () => {
  const { page } = useContext(NavigagtionContext);

  if (page === "menu") return <Menu />;
  if (page === "game") return <Game />;
  return <Haha />;
};

export default App;
