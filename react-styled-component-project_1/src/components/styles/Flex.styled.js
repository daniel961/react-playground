import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  /* & = this , > {childs type} will get that css values*/
  & > div,
  & > ul {
    /* flex: (number,px ,etc ... ) means that the size of the element  */
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobileBreakPoint}) {
    flex-direction: column;
    text-align: center;
  }
`;
