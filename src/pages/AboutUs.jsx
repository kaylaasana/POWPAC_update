export default function AboutUs() {
  return (
    <div className="main-page" id="aboutUs-page">
      <div id="aboutUs-container">
        <h2 id="aboutUs-title">About Us</h2>
        <p id="aboutUs-text">
          This is a paragraph about PowPAC. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>
      <div id="boardMembers-container">
        <h3 id="board-members">Board Members</h3>
        <div id="figures">
        <figure>
          <img src="src\assets\David_Dartt.jpg" width={250} height={300}></img>
          <figcaption>
           <b id="board-title">President</b><br></br><p id="board-name">David Dartt</p>
          </figcaption>
        </figure>
        <figure>
          <img src="src\assets\SteveMurdock.png" width={250} height={300}></img>
          <figcaption>
          <b id="board-title">Vice President</b><br></br><p id="board-name">Steven Murdock</p>
          </figcaption>
        </figure>
        <figure>
          <img src="src\assets\Joye_Davisson.jpg" width={250} height={300}></img>
          <figcaption>
          <b id="board-title">Secretary</b><br></br><p id="board-name">Joye Davisson</p>
          </figcaption>
        </figure>
        <figure>
          <img src="src\assets\WalkenhorstED1.jpg" width={250} height={300}></img>
          <figcaption>
          <b id="board-title">Treasurer</b><br></br><p id="board-name">Kari Seagren Walkenborst</p>
          </figcaption>
        </figure>
        </div>
      </div>
    </div>
  );
}
