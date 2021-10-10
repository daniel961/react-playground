import styled from "styled-components";

const SocialStyled = styled.div`
  a:active,
  a:hover,
  a:visited,
  a:link {
    color: #fff;
  }

  a {
    border: 1px solid #fff;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
  }

  @media (max-width: ${({ theme }) => theme.mobileBreakPoint}) {
    ul {
      display: flex;
      flex-direction: row;
    }

    ul li {
      margin: 0px 20px;
    }
  }
`;

export default SocialStyled;
