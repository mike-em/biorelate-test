import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import SideNav from "../Common/SideNav";
import Articles from "../FeedSections/Articles";
import {
  StyledSideNav,
  StyledSection,
  StyledSectionContainer,
  StyledTitle,
  StyledContainer,
} from "./Feed.styles";

const Feed = () => {
  const [state, setState] = useState({ name: "Articles", id: 0 });

  const handleClick = (name, id) => {
    setState({
      name,
      id,
    });
  };
  const menuElements = [
    "Articles",
    "Interactions",
    "Experts",
    "Organisations",
    "Biomarkets",
  ];

  return (
    <StyledContainer>
      <Navbar />
      <StyledTitle>My feed</StyledTitle>
      <StyledSectionContainer>
        <StyledSideNav>
          {menuElements.map((item, idx) => (
            <SideNav
              key={idx}
              id={idx}
              active={state.id}
              onClick={() => handleClick(item, idx)}
            >
              {item}
            </SideNav>
          ))}
        </StyledSideNav>
        <StyledSection>
          {state.name === "Articles" ? <Articles /> : "Coming Soon!"}
        </StyledSection>
      </StyledSectionContainer>
    </StyledContainer>
  );
};

export default Feed;
