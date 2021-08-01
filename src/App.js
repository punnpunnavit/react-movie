import React from "react";
//components
import Header from './components/Headers'
import Home from './components/Home'
//Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <div className="App">
      {/* <Header/> */}
      <Home/>
      <GlobalStyle />
    </div>
  );
};

export default App;
