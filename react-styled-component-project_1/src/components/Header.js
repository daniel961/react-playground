import { StyledHeader } from "./styles/Header.styled";

export default function Header({ appTheme }) {
  console.log(appTheme);

  return (
    <StyledHeader backgroundColor="#ebfbff">
      <h1>Hubble</h1>
    </StyledHeader>
  );
}
