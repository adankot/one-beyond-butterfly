import React from "react";
import "./Service.css";

export const Service = (props) => {
  console.log(props);
  return (
    <div className="container">
      <img alt="" src={props.src} width="50px" height="50px" />
    </div>
  );
};
