import styled from "styled-components";

export const StyledHeader = styled.header`
  /* you can send props to styled component or use a theme provider for the whole app like the example below */
  background-color: ${(props) => props.theme.colors.header};
  padding: 40px 0;

  /* if you want to style the h1 nested element 
   inside the header for example you can use this:
    h1 {
        color: red;
    } */

  /* you can use "&" sign mean THIS element and use pseudo css
    &:hover {
        background-color: red;
    } */
`;
