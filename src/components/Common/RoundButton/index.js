import styled, { css } from "styled-components";

const RoundButton = styled.div`
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
        padding: 0 0 1px 1px;
        font-weight: 600;
      }

      svg {
        height: 18px;
        width: 18px;
      }
    `}
`;

export default RoundButton;
