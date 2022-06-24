import React from "react";
import "./service.css";

export const Service = (props) => {
  const {service, onClick} = props;
  return (
   <div className="container" onClick={() => onClick(service)}>
      <span className="service-name">{service.name}</span>
      <img title={service.text}src={service.icon} width="50px" height="50px" />
    </div>
  );
};
