import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 1rem; /*1 rem = 16px This is determined by HTML defaults */
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  transition: 0.2s ease-in;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
