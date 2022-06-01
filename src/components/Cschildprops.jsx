import React from "react";
import "./Cschildprops.css";
import CommentIcon from "@mui/icons-material/Comment";
const Cschildprops = ({ sorc, comment, ikon, pname, position }) => {
  const imgsource = sorc;
  const cmnt = comment;
  const icn = ikon;
  const prsn = pname;
  const posi = position;

  return (
    <div>
      <div className="customer">
        <div className="circle">
          <p>''</p>
        </div>
        <p>{cmnt}</p>
        <div className="custchild">
          <img src={imgsource} alt="" />
          <h1>{prsn}</h1>
          <p>{posi}</p>
        </div>
      </div>
    </div>
  );
};
export default Cschildprops;
