import {
  HeaderStyled,
  Title,
  StyledInput,
  StyledButtonSearch,
  StyledSpan,
} from "./styled/Header.styled";

function Header(props) {
  return (
    <HeaderStyled>
      <Title>IP Address Tracker</Title>
      <StyledSpan>
        <StyledInput placeholder="search for any ip address or domain" />
        <StyledButtonSearch
          onClick={async () => {
            await props.fetchIpLocation();
          }}
        >
          &gt;
        </StyledButtonSearch>
      </StyledSpan>
    </HeaderStyled>
  );
}

export default Header;
