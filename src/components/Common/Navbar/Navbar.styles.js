import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 60px;
  margin: 32px 0;
  display: flex;
  justify-content: space-between;
`;

export const StyledInnerContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

export const StyledLogoContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    letter-spacing: 1%;
  }
`;

export const StyledRoundButton = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  position: relative;

  &:hover {
    cursor: pointer;
  }

  svg {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #868da1;
  }

  ${({ notification }) =>
    notification &&
    css`
      div {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #1a88e8;
        font-size: 8px;
        color: white;
        justify-content: center;
        align-items: center;
        padding-bottom: 1px;
        font-weight: 600;
      }

      svg {
        height: 18px;
        width: 18px;
      }
    `}
`;

export const StyledNav = styled.ul`
  width: 65%;
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  color: #868da1;

  &:hover {
    cursor: pointer;
  }

  a {
    color: #868da1;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;

    &:hover {
      color: rgba(134, 141, 161 0.6);
    }
  }

  li {
    font-size: 14px;
    font-weight: 500;

    &:hover {
      color: rgba(134, 141, 161 0.6);
    }
  }
`;

export const StyledProfileContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLine = styled.hr`
  border: 1px solid #f6f7fa;
`;
