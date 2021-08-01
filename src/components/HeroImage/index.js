import react from "react";
//Styles
import Headers from "../Headers";
import { Wrapper, Content, Text } from "./HeroImage.styles";

const HeroImage = ({ image, title, text }) => (
  <Wrapper image={image}>
    <Headers />
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

export default HeroImage;
