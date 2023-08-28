import React from "react";
import Header from "./Header";
// import Cards from "./Cards.jsx";
import Infobar from "./Infobar";
import Corousal from "./Corousal";
import DayHeading from "./DayHeading";
// import AttendenceBar from "./AttendenceBar";

function App() {
  return (
    <div>
      <Header />
      {/* <AttendenceBar /> */}
      <Infobar />
      <DayHeading />
      <Corousal />
    </div>
  );
}

export default App;
