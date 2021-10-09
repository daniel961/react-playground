import { CardStyled } from "./styles/Container.styled";
export default function Card({ direction, title, body, imageName }) {
  return (
    <CardStyled direction={direction}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <img src={require(`./images/${imageName}`).default} alt={imageName} />
    </CardStyled>
  );
}
