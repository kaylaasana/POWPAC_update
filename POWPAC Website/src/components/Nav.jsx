import { Link } from 'react-router-dom';
import { useState } from "react";

// export Nav component
function Nav() {
    // sets the active link/landing page as the home page
  const [active, setLink] = useState("home")
  // returning links to different components/pages
  return (
    <nav id='navbar' className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <ul className="navbar-nav nav nav-tabs me-auto mb-2 mb-lg-0 ">
        <li className="nav-item" onClick={() => {setLink("home")}}>
          <Link to="/" className={`${active === 'home' ? 'active' : ''} nav-link`} aria-current="page">Home</Link>
        </li>
        <li className="nav-item" onClick={() => {setLink("tickets")}}>
          <Link to="/tickets" className={`${active === 'tickets' ? 'active' : ''} nav-link`} aria-current="page">Tickets</Link>
        </li>
        <li className="nav-item" onClick={() => {setLink("auditions")}}>
          <Link to="/auditions" className={`${active === 'auditions' ? 'active' : ''} nav-link`} aria-current="page">Auditions</Link>
        </li>
        <li className="nav-item" onClick={() => {setLink("archives")}}>
          <Link to="/archives" className={`${active === 'archives' ? 'active' : ''} nav-link`} aria-current="page">Archives</Link>
        </li>
        <li className="nav-item" onClick={() => {setLink("about-us")}}>
          <Link to="/about-us" className={`${active === 'about-us' ? 'active' : ''} nav-link`} aria-current="page">About Us</Link>
        </li>        
      </ul>
      </div>
    </nav>
  );
}

export default Nav;