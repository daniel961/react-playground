import { Container } from "./styles/Container.styled";
import Card from "./Card";
const Content = ({ cardsList }) => {
  return (
    <Container>
      {cardsList.map(({ image, title, body }, index) => {
        const direction = index % 2 === 0 ? "row-reverse" : "row";
        return (
          <Card
            key={index}
            direction={direction}
            imageName={image}
            title={title}
            body={body}
          ></Card>
        );
      })}
    </Container>
  );
};

export { Content as default };
