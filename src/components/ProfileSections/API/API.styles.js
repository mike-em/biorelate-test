import styled, { css } from "styled-components";
import { FiCopy } from "react-icons/fi";

export const SectionContainer = styled.div`
  p {
    font-size: 14px;
    color: #868da1;
    margin-bottom: 16px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: 600;
    color: #344562;
    margin-bottom: 8px;
  }
`;

export const StyledInput = styled.input`
  height: 48px;
  border-radius: 8px;
  border: 1px solid #efeff8;
  margin-bottom: 24px;
  color: #344562;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 0 17px;
  outline: none;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #efeff8;
      color: rgba(52, 69, 98, 0.4);
    `}
`;

export const ButtonGroup = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    p {
      margin-top: 16px;
      font-size: 12px;
      font-weight: 400;
      color: #16a63e;
    }
  }

  & > * {
    margin-right: 16px;
  }
`;

export const StyledIcon = styled(FiCopy)`
  margin-right: 10px;
`;
