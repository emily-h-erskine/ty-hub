import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaLinks() {
  return (
    <div class="social-container">
      <a href="https://www.facebook.com/tyhub.ie%20" className="facebook social" style={{ padding: '2%' }}>
        <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'white' }} />
      </a>
      <a href="https://www.instagram.com/tyhub_ie" className="instagram social" style={{ padding: '2%' }}>
        <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'white' }} />
      </a>
      <a href="https://www.tiktok.com/@tyhub_ie?lang=en" className="tictok social" style={{ padding: '2%' }}>
        <FontAwesomeIcon icon={faTiktok} size="2x" style={{ color: 'white' }} />
      </a>
      <a href="https://www.linkedin.com/in/tyhub/%20" className="LinkedIn social" style={{ padding: '2%' }}>
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'white' }} />
      </a>
      <a href="https://www.youtube.com/channel/UCb0vd0ADDHabYb3pFUzmRFQ" className="Youtube social" style={{ padding: '2%' }}>
        <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: 'white' }} />
      </a>
    </div>
  );
}