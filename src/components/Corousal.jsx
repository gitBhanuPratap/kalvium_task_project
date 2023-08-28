import React from "react";
import "./Corousal.css";
import { Cards, Cards1, Cards2, Cards3, Cards4, Cards5 } from "./Cards";

function Corousal() {
  return (
    <div className="corousal">
      <Cards />
      <Cards1 />
      <Cards2 />
      <Cards3 />
      <Cards4 />
      <Cards5 />
    </div>
  );
}
export default Corousal;
