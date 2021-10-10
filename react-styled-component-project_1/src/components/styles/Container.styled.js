import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
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
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0px;
  padding: 60px;
  flex-direction: ${(props) => props.direction};

  & > div {
    flex: 1;
    margin: 0px 35px;
  }

  img {
    width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.mobileBreakPoint}) {
    flex-direction: column;

    & > div {
      margin: 15px 0px;
    }
  }
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
