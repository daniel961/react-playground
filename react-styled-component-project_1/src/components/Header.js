import { StyledHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
export default function Header({ appTheme }) {
  console.log(appTheme);

  return (
    <StyledHeader backgroundColor="#ebfbff">
      <Container>
        <h1>Hubble</h1>
      </Container>
    </StyledHeader>
  );
}
