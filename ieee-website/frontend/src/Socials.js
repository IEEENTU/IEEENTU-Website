import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithubSquare,
    faLinkedin,
    faInstagram,
    faFacebook
  } from "@fortawesome/free-brands-svg-icons";
  import {
    faEnvelope
  } from "@fortawesome/free-regular-svg-icons";

const footerStyle = {
    // zIndex:2,
    backgroundColor: "#066e94",
    fontSize: "20px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
  };

const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
  };


const Socials = () => {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>
      {/* <a href="https://www.youtube.com/"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a> */}
      <a href="https://www.linkedin.com/company/ieee-ntu-student-branch"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/IEEENTU"
        className="github social">
        <FontAwesomeIcon icon={faGithubSquare} size="2x" />
      </a>
      <a href="https://instagram.com/ieee_ntu?igshid=d6bh97cj9opv "
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
<a href="https://m.facebook.com/IEEENTU/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
<a href="mailto:ieeentuchapter@gmail.com?subject=Mail to IEEE NTU Student Branhc&body=" className="mail social">
    <FontAwesomeIcon icon={faEnvelope} style={{color:"white"}} size="2x"></FontAwesomeIcon>
</a>
      </div>
    </div>
  );
}

export default Socials;
