import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  min-width: ${({ width }) => width};
  height: 48px;
  margin: 32px 0;
  padding: 0 24px;
  border: none;
  border-radius: 8px;
  background-color: #1a88e8;
  font-size: 14px;
  font-weight: 600;
  color: white;

  ${({ secondary }) =>
    secondary &&
    css`
      margin: 0;
      background-color: transparent;
      color: #1a88e8;
      border: 1px solid #efeff8;
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ${({ tertiary }) =>
    tertiary &&
    css`
      margin: 0;
      background-color: transparent;
      color: #868da1;
      border: 1px solid #efeff8;
    `}

  &:hover {
    cursor: pointer;
  }
`;

const Button = React.forwardRef((props, ref) => {
  return (
    <StyledButton {...props} ref={ref}>
      {props.children}
    </StyledButton>
  );
});

export default Button;
