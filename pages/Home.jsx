// import { Link } from "react-router-dom";
// import { useState } from "react";
import currentSeason from '../assets/The Butler Did It Postcard 1.png';

export default function Home() {
  //   const [active, setLink] = useState("/home");

  return (
    <>
      <div>
        <h2> Shows </h2>
        <section>
          <p> Current Season </p>
          <div>
            <img src={currentSeason} alt="text description"></img>
            <div>
              <p>TITLE</p>
              <p>DATE RANGE</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button>
                {/* <Link 
                  to="/tickets"
                  className={`${active === "tickets" ? "active" : ""} nav-link`}
                  aria-current="page"
                >
                  Tickets
                </Link> */}
              </button>
            </div>
          </div>
        </section>
        <section>
          <p> Upcoming Season </p>
          <div>
            <img src={currentSeason} alt="text description"></img>
            <div>
              <p>TITLE</p>
              <p>DATE RANGE</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button>
                {/* <Link
                  to="/tickets"
                  className={`${active === "tickets" ? "active" : ""} nav-link`}
                  aria-current="page"
                >
                  Tickets
                </Link> */}
              </button>
            </div>
          </div>
        </section>
      </div>
      <aside>
        <h3> Special Updates </h3>
        <section>
          <p> Auditions </p>
          <p>
            {" "}
            Interested in be a part of one of our upcoming shows? Fill out the
            audition form. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.{" "}
          </p>
          <button>
            {/* <Link
                  to="/tickets"
                  className={`${active === "tickets" ? "active" : ""} nav-link`}
                  aria-current="page"
                >
                  Tickets
                </Link> */}
          </button>
        </section>
        <section>
          <p> Breaking News </p>
          <p>
            {" "}
            Some Content Goes Here. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.{" "}
          </p>
        </section>
      </aside>
    </>
  );
}
