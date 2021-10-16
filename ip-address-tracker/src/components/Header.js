import { useState } from "react";
import {
  HeaderStyled,
  Title,
  StyledInput,
  StyledButtonSearch,
  StyledSpan,
} from "./styled/Header.styled";

function checkIp(ip) {
  let validIp = true;
  const ipOctet = ip.split(".");

  if (ipOctet.length < 4) {
    return false;
  }

  ipOctet.forEach((octet) => {
    if (octet > 255) {
      validIp = false;
    }
  });

  return validIp;
}

function Header(props) {
  const [ipAddress, setIpAddress] = useState("");

  function handleKeyPress(e) {
    if (e.charCode == 13) {
      handleIpSearch(ipAddress);
    }
  }

  async function handleIpSearch(ip) {
    if (checkIp(ip)) {
      await props.fetchIpLocation(ip);
    } else {
      console.log("wrong ip address");
    }
  }

  return (
    <HeaderStyled>
      <Title>IP Address Tracker</Title>
      <StyledSpan>
        <StyledInput
          onKeyPress={handleKeyPress}
          onChange={(e) => {
            setIpAddress(e.target.value);
          }}
          placeholder="search for any ip address or domain"
        />
        <StyledButtonSearch
          onClick={async () => {
            await handleIpSearch(ipAddress);
          }}
        >
          &gt;
        </StyledButtonSearch>
      </StyledSpan>
    </HeaderStyled>
  );
}

export default Header;
