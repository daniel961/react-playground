import styled from "styled-components";
import backgroundImg from "../images/pattern-bg.png";

const HeaderStyled = styled.div`
  width: 100%;
  padding: 30px;
  height: wrap;
  color: white;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Rubik", sans-serif;
  font-weight: bold;
  margin-bottom: 25px;
`;

export { HeaderStyled, Title };
