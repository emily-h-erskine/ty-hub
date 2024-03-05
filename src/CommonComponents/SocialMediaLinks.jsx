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
      <a href="https://www.facebook.com/" className="facebook social" style={{ padding: '2%' }}>
        <FontAwesomeIcon icon={faFacebook} size="1x" style={{ color: 'white' }} />
      </a>
      <a href="https://instagram.com/" className="instagram social" style={{ padding: '2%' }}>
        <FontAwesomeIcon icon={faInstagram} size="1x" style={{ color: 'white' }} />
      </a>
      <a href="https://www.tictok.com/" className="tictok social" style={{ padding: '2%' }}>
        <FontAwesomeIcon icon={faTiktok} size="1x" style={{ color: 'white' }} />
      </a>
      <a href="https://www.linkedin.com/in/tyhub?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="LinkedIn social" style={{ padding: '2%' }}>
        <FontAwesomeIcon icon={faLinkedinIn} size="1x" style={{ color: 'white' }} />
      </a>
      <a href="https://www.youtube.com/" className="Youtube social" style={{ padding: '2%' }}>
        <FontAwesomeIcon icon={faYoutube} size="1x" style={{ color: 'white' }} />
      </a>
    </div>
  );
}