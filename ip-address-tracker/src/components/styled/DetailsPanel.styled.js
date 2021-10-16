import styled from "styled-components";

const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  border-radius: 20px;
  position: absolute;
  width: 70vw;
  max-width: 80%;
  top: 250px;
  left: 15%;
  padding: 25px;
  z-index: 1000;
  background-color: #fff;
`;

const DetailBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20%;
  padding: 10px;
  padding-left: 35px;
  border-left: hsl(0, 0%, 85%) solid 0.5px;

  h2,
  h3 {
    margin: 0;
    padding: 0;
  }

  h3 {
    font-size: 0.7em;
    margin-bottom: 8px;
    color: gray;
  }

  h2 {
    font-size: 1.3em;
  }
`;

export { PanelContainer, DetailBlock };
