import React from "react";
import { useState } from "react";

import "./Cards.css";
function Cards() {
  const [buttonText, setButtonText] = useState("Present");

  const handleClick = () => {
    setButtonText("Recorded");
  };
  return (
    <div>
      <div className="card-container">
        <div className="image-container">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>Computer Networks</h3>
          </div>
          <div className="card-body">
            <p>Dr.Rajalakshmi M</p>
          </div>
        </div>

        <div className="btn">
          <button onClick={handleClick}>
            <a>{buttonText}</a>
          </button>
        </div>
      </div>
    </div>
  );
}
function Cards1() {
  const [buttonText, setButtonText] = useState("Present");

  const handleClick = () => {
    setButtonText("Recorded");
  };
  return (
    <div>
      <div className="card-container">
        <div className="image-container">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>Operating Systems</h3>
          </div>
          <div className="card-body">
            <p>Dr.Saumya R</p>
          </div>
        </div>
        <div className="btn">
          <button onClick={handleClick}>
            <a>{buttonText}</a>
          </button>
        </div>
      </div>
    </div>
  );
}
function Cards2() {
  const [buttonText, setButtonText] = useState("Present");

  const handleClick = () => {
    setButtonText("Recorded");
  };
  return (
    <div>
      <div className="card-container">
        <div className="image-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlo3l8RjYyJRmmi6MWYbiJPGAGNrHSG4IvQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>Artificial Intelligence</h3>
          </div>
          <div className="card-body">
            <p>Dr.M Aruna</p>
          </div>
        </div>

        <div className="btn">
          <button onClick={handleClick}>
            <a>{buttonText}</a>
          </button>
        </div>
      </div>
    </div>
  );
}
function Cards3() {
  const [buttonText, setButtonText] = useState("Present");

  const handleClick = () => {
    setButtonText("Recorded");
  };
  return (
    <div>
      <div className="card-container">
        <div className="image-container">
          <img
            src="https://repository-images.githubusercontent.com/403817624/3d10f761-1027-4d0a-9906-48361e466d87"
            alt=""
          />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>DSA</h3>
          </div>
          <div className="card-body">
            <p>Dr.Bhaskhar</p>
          </div>
        </div>
        <div className="btn">
          <button onClick={handleClick}>
            <a>{buttonText}</a>
          </button>
        </div>
      </div>
    </div>
  );
}
function Cards4() {
  const [buttonText, setButtonText] = useState("Present");

  const handleClick = () => {
    setButtonText("Recorded");
  };
  return (
    <div>
      <div className="card-container">
        <div className="image-container">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>Comipler Design</h3>
          </div>
          <div className="card-body">
            <p>Dr.Bharti Pragya</p>
          </div>
        </div>
        <div className="btn">
          <button onClick={handleClick}>
            <a>{buttonText}</a>
          </button>
        </div>
      </div>
    </div>
  );
}
function Cards5() {
  const [buttonText, setButtonText] = useState("Present");

  const handleClick = () => {
    setButtonText("Recorded");
  };

  return (
    <div>
      <div className="card-container">
        <div className="image-container">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>DBMS</h3>
          </div>
          <div className="card-body">
            <p>Dr.Bharti Pragya</p>
          </div>
        </div>
        <div className="btn">
          <button onClick={handleClick}>
            <a>{buttonText}</a>
          </button>
        </div>
      </div>
    </div>
  );
}
export { Cards, Cards1, Cards2, Cards3, Cards4, Cards5 };
