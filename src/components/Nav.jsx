import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [active, setLink] = useState("home");

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul id="navbar" className="navbar-nav w-100 d-lg-flex justify-content-lg-around">
            <li className="nav-item" onClick={() => setLink("home")}>
              <Link to="/" className={`nav-link ${active === "home" ? "active" : ""}`} aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={() => setLink("tickets")}>
              <Link to="https://app.arts-people.com/index.php?ticketing=powpa" className={`nav-link ${active === "tickets" ? "active" : ""}`} aria-current="page">
                Tickets
              </Link>
            </li>
            <li className="nav-item" onClick={() => setLink("auditions")}>
              <Link to="/auditions" className={`nav-link ${active === "auditions" ? "active" : ""}`} aria-current="page">
                Auditions
              </Link>
            </li>
            <li className="nav-item" onClick={() => setLink("archives")}>
              <Link to="/archives" className={`nav-link ${active === "archives" ? "active" : ""}`} aria-current="page">
                Archives
              </Link>
            </li>
            <li className="nav-item" onClick={() => setLink("about-us")}>
              <Link to="/about-us" className={`nav-link ${active === "about-us" ? "active" : ""}`} aria-current="page">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
