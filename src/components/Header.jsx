import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="heading">
      <nav className="topnav">
        <div class="navbar-left">
          <div class="logo">Howgarts University</div>
        </div>

        <div class="navbar-right">
          <div class="nav-items">Attendence Form</div>
          <div class="nav-items">Contact</div>
          <div class="nav-items">About</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
