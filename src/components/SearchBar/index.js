import React, { useState, useEffect, useRef } from "react";

//Image
import searchIcon from "../../images/search-icon.svg";
//Styles
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <Wrapper>
      <Content>
        {/* //<img src={searchIcon} alt="" /> */}
        <input type="text" placeholder="Search Movies" />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
