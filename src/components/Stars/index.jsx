import { VscStarFull, VscStarEmpty } from "react-icons/vsc";
import { Container } from "./styles.js";

export function Stars({ rating, isbigsize }) {
  let stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<VscStarFull key={i} />);
    } else {
      stars.push(<VscStarEmpty key={i} />);
    }
  }

  return <Container isBigSize={isbigsize}>{stars}</Container>;
}