import styled from "styled-components";

export const Wrapper = styled.div`
  // background: var(--darkGrey);
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 200;
  background-color: ${(props) =>
    props.show ? "var(--darkGrey)" : "rgba(28, 28, 28,0.025)"};
  transition-timing-function: ease-out;
  //background-color: rgba(28, 28, 28,0.3);
  transition: 0.5s;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
