import styled from 'styled-components';

export const StyledHeader = styled.header`
background-color: ${(props) => props.backgroundColor};  /*a way of using props inside styled component*/
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

`