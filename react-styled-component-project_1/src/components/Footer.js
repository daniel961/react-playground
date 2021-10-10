import { FooterStyled } from "./styles/Footer.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import footerImg from "./images/logo_white.svg";
import SocialIcons from "./SocialIcons";

export default function Footer(params) {
  return (
    <FooterStyled>
      <Container>
        <img src={footerImg} alt="footer Logo" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons></SocialIcons>
        </Flex>
        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
    </FooterStyled>
  );
}
