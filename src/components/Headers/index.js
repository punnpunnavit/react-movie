import React, { useState, useEffect } from "react";

import HotshotLogo from "../../images/hotshot-logo.svg";
import HotShotLogo from "../../images/hotshot-logo-png.png";
import last from "../../images/lastplz.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
import redddd from "../../images/410.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Headers.styles";

const Headers = () => {
  const [show, setShow] = useState(false);
  const controlHeader = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, []);
  return (
    <>
      <Wrapper show={show}>
        <Content>
          <LogoImg src={last} alt="HotshotLogo" />
          <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
        </Content>
      </Wrapper>
    </>
  );
};

export default Headers;
