import { HeaderStyled, Title } from "./styled/Header.styled";

function Header(props) {
  return (
    <HeaderStyled>
      <Title>IP Address Tracker</Title>
      <span>
        <input placeholder="search for any ip address or domain" />
        <button>V</button>
      </span>
    </HeaderStyled>
  );
}

export default Header;
