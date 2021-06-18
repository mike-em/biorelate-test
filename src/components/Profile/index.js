import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import SideNav from "../Common/SideNav";
import {
  StyledContainer,
  StyledTitle,
  StyledSectionContainer,
  StyledSection,
  StyledSideNav,
} from "./Profile.styles";

import General from "../ProfileSections/General";
import ApiSection from "../ProfileSections/API";

const Profile = () => {
  const [state, setState] = useState({ name: "General", id: 0 });

  const handleClick = (name, id) => {
    setState({
      name,
      id,
    });
  };

  const menuElements = [
    "General",
    "Plan",
    "API",
    "Security",
    "Notifications",
    "Billing history",
    "Legal",
  ];

  return (
    <StyledContainer>
      <Navbar />
      <StyledTitle>Account settings</StyledTitle>
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
          {state.name === "General" ? (
            <General />
          ) : state.name === "API" ? (
            <ApiSection />
          ) : (
            "Coming Soon!"
          )}
        </StyledSection>
      </StyledSectionContainer>
    </StyledContainer>
  );
};

export default Profile;
