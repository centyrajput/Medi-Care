import React from "react";
import "./bestprops.css";

const Bestprops = ({ sorc, dname, title1 }) => {
  const imagesource = sorc;
  const drname = dname;
  const title = title1;

  return (
    <div>
      <div className="doctor">
        <div className="imagediv">
          <img src={imagesource} alt="" />
        </div>
        <h4>{drname}</h4>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Bestprops;
