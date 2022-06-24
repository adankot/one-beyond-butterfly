import React, { useCallback, useContext } from "react";
import { NavigagtionContext } from "../contexts/NavigationContext";
import "./Menu.css";

const Menu = () => {
  const { navigate } = useContext(NavigagtionContext);

  const handlePLayClick = useCallback(() => navigate("game"), [navigate]);

  return (
    <div className="center-page">
      <div className="app-title">Build your cloud!</div>
      <div>
        <img alt="beauty" src="/butterfly_gif.gif"></img>
        <div className="description">
          Fly your app, into the cloud with the help of the <b>Butterfly</b>{" "}
          team!
        </div>
      </div>
      <button className="button-22" onClick={handlePLayClick}>
        Play
      </button>
    </div>
  );
};

export default Menu;
