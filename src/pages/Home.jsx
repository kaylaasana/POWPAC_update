import { Link } from "react-router-dom";
import { useState } from "react";
import currentSeason from "../assets/The Butler Did It Postcard 1.png";

export default function Home() {
  const [active] = useState("tickets");

  return (
    <>
      <div className="main-page" id="home-container">
        <div className="content">
          <h2 className="shows"> Shows </h2>
          <section className="seasons">
            <p className="current"> Current Season </p>
            <div className="d-flex space-evenly">
              <img
                className="current-season"
                src={currentSeason}
                alt="text description"
              ></img>
              <div className="homepage-boxes">
                <p className="title">TITLE</p>
                <p className="date-range">DATE RANGE</p>
                <p className="current-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <button className="tickets-button">
                  <Link 
                  to="https://app.arts-people.com/index.php?ticketing=powpa"
                  className={`${active === "tickets" ? "active" : ""} nav-link`}
                  aria-current="page"
                >
                  Tickets
                </Link>
                </button>
              </div>
            </div>
          </section>
          <section className="seasons">
            <p className="upcoming"> Upcoming Season </p>
            <div className="d-flex space-evenly">
              <img
                className="upcoming-season"
                src={currentSeason}
                alt="text description"
              ></img>
              <div className="homepage-boxes">
                <p className="title">TITLE</p>
                <p className="date-range">DATE RANGE</p>
                <p className="upcoming-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <button className="tickets-button">
                  <Link
                  to="https://app.arts-people.com/index.php?ticketing=powpa"
                  className={`${active === "tickets" ? "active" : ""} nav-link`}
                  aria-current="page"
                >
                  Tickets
                </Link>
                </button>
              </div>
            </div>
          </section>
        </div>
        <aside className="sidebar">
          <h3 className="special-updates"> Special Updates </h3>
            <section className="auditions-sidebar">
              <p className="auditions-title"> Auditions </p>
              <p>
                {" "}
                Interested in be a part of one of our upcoming shows? Fill out
                the audition form. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.{" "}
              </p>
              <button>
                <Link
                  to="/auditions"
                  className={`${active === "auditions" ? "active" : ""} nav-link`}
                  aria-current="page"
                >
                  Auditions
                </Link>
              </button>
            </section>
            <section className="breaking-sidebar">
              <p className="breaking-news"> Breaking News </p>
              <p>
                {" "}
                Some Content Goes Here. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.{" "}
              </p>
            </section>
         </aside>
      </div>
    </>
  );
}
