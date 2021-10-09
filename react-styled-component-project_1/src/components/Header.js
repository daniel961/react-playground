import { StyledHeader, Logo, Image } from "./styles/Header.styled";
import { Container, Nav } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Button } from "./styles/Button.styled";
import logoImg from "./images/logo.svg"; // Tell webpack this JS file uses this image
import illustrationImg from "./images/illustration-mockups.svg";

export default function Header(props) {
  return (
    <StyledHeader backgroundColor="#ebfbff">
      <Container>
        <Nav>
          <Logo src={logoImg} alt="huddle logo" />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src={illustrationImg} alt="Header Img" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
