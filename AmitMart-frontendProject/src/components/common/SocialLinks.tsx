import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks() {
  return (
    <div className="mt-10 flex justify-center gap-14 text-2xl">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-new-price transition-colors duration-200"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-new-price transition-colors duration-200"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-new-price transition-colors duration-200"
      >
        <FontAwesomeIcon icon={faTiktok} />
      </a>
    </div>
  );
}
