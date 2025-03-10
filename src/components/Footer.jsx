import facebook from "../assets/black_fb_logo.png";
import instagram from "../assets/black_ig_logo.png";

// export Footer component
function Footer() {
    // return footer element with links to facebook and instagram accounts, address and contact information
    return (
      <footer id="footer" className="main-page d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex justify-content-center mb-2">
        <a className="p-1" href="https://www.facebook.com/PowPACTheatre">
          <img src={facebook} className="social img-fluid" width={35} alt="black and white version of the facebook logo"></img>
        </a>
        <a className="p-1" href="https://www.instagram.com/poway_performing_arts_company/">
          <img src={instagram} className="social img-fluid" width={35} alt='black and white version of the instagram logo'></img>
        </a>
        </div>
        <div className="d-flex flex-column align-items-center">
        <a className="p-1" href="https://www.google.com/maps/place/13250+Poway+Rd,+Poway,+CA+92064/@32.957317,-117.0456369,17z/data=!3m1!4b1!4m6!3m5!1s0x80dbfa51eeb34167:0x1a91797667194436!8m2!3d32.957317!4d-117.043062!16s%2Fg%2F11g8dh6yzx?hl=en&entry=ttu">
          <address id="footer-address">13250 Poway Road<br></br>
          Poway, CA 92064</address>
        </a>
        <p id="footer-email">boxoffice@powpac.org</p>
        <p id="footer-phone">858-679-8085</p>
        </div>
      </footer>
    );
  }
  
export default Footer;