import styled from "styled-components";

export const Container = styled.div`
  width: 85vw;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;

export const CardTextContainer = styled.div`
  width: 35vw;
  max-width: 100%;
  padding: 25px;
  text-align: left;
`;

export const CardStyled = styled.div`
  width: 85vw;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.12);
  padding: 25px;
  margin-top: 30px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobileBreakPoint}) {
    flex-direction: column;
  }
`;
