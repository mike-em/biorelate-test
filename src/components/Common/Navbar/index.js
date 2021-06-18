import React from "react";
import Button from "../Button";
import RoundButton from "../RoundButton";
import { Link } from "react-router-dom";

import {
  StyledContainer,
  StyledInnerContainer,
  StyledLogoContainer,
  StyledNav,
  StyledProfileContainer,
  StyledLine,
} from "./Navbar.styles";
import Avatar from "../Avatar";

import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FiBell } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <StyledContainer>
        <StyledInnerContainer>
          <StyledLogoContainer>
            <RoundButton>
              <BsFillGrid3X3GapFill />
            </RoundButton>
            <h4>Galactic</h4>
          </StyledLogoContainer>
          <StyledNav>
            <li>Home</li>
            <li>Categories</li>
            <Link to="/feed">
              <li>Feed</li>
            </Link>
            <li>Saved</li>
            <li>&#8226;&#8226;&#8226;</li>
          </StyledNav>
        </StyledInnerContainer>
        <StyledProfileContainer>
          <RoundButton notification>
            <div>3</div>
            <FiBell />
          </RoundButton>
          <Link to="/profile">
            <Avatar />
          </Link>
          <Link to="/">
            <Button width="100px">Log out</Button>
          </Link>
        </StyledProfileContainer>
      </StyledContainer>
      <StyledLine />
    </>
  );
};

export default Navbar;
