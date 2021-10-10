import styled from "styled-components";

export const FooterStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;

  ul {
    list-style-type: none;
  }

  ul li {
    margin: 0 0 20px 0;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobileBreakPoint}) {
    text-align: center;

    ul {
      padding: 0;
    }

    p {
      text-align: center;
    }
  }
`;
