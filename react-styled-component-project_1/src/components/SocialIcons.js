import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import SocialStyled from "./styles/Social.styled";
const SocialIcons = () => {
  return (
    <SocialStyled>
      <ul>
        <li>
          <a href="https://twitter.com">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://Linkedin.com">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </SocialStyled>
  );
};

export { SocialIcons as default };
