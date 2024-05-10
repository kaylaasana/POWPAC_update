// import powPAC logo for header image
import logo from "../assets/PowPac_General_Logo_Cropped.jpg";


// export Header component
function Header() {
  // return header div
  return (
    <header id="header" className="d-flex justify-content-center">
      <h1>
          <img src={logo} alt="wide logo banner that states 'PowPAC " />
      </h1>
    </header>
  );
}

export default Header;
