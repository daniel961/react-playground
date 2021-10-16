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
  font-family: "Rubik", sans-serif; // todo - ask netanel why i cant use the font
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 1.7em;
`;

const StyledInput = styled.input`
  padding: 15px;
  width: 70vw;
  max-width: 550px;
  font-family: "Rubik", sans-serif;
  font-size: 1.2rem;
  border-radius: 15px 0px 0px 15px;
  border: none;
  outline: none;
  cursor: pointer;
`;

const StyledButtonSearch = styled.button`
  padding: 15px 18px;
  color: white;
  background-color: black;
  font-size: 1em;
  font-family: "Rubik", sans-serif;
  font-weight: 900;
  border-radius: 0px 15px 15px 0px;
  border: none;
  outline: none;
  cursor: pointer;

  :hover {
    background-color: hsl(0, 0%, 17%);
  }
`;

const StyledSpan = styled.span`
  margin-bottom: 150px;
  max-width: 100%;
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export { HeaderStyled, Title, StyledInput, StyledButtonSearch, StyledSpan };
