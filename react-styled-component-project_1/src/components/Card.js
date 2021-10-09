import { Flex } from "./styles/Flex.styled";
import { CardStyled, CardTextContainer } from "./styles/Container.styled";
import { CardImg } from "./styles/Card.styled";
export default function Card({ direction, title, body, imageName }) {
  return (
    <CardStyled>
      <Flex direction={direction}>
        <CardTextContainer>
          <h1>{title}</h1>
          <p>{body}</p>
        </CardTextContainer>
        <CardImg
          src={require(`./images/${imageName}`).default}
          alt={imageName}
        />
      </Flex>
    </CardStyled>
  );
}
