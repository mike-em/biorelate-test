import styled from "styled-components";

export const SectionContainer = styled.div`
  p {
    font-size: 14px;
    color: #868da1;
    margin-bottom: 16px;
  }
  h5 {
    font-size: 14px;
    font-weight: 600;
    margin: 16px 0;
    color: #344562;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  & > * {
    margin-right: 16px;
  }
`;

export const StyledLine = styled.hr`
  border: 1px solid #f6f7fa;
  margin: 24px 0;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;

  &:nth-child(2) {
    input {
      margin-bottom: 0;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    width: 48%;

    label {
      font-size: 14px;
      font-weight: 600;
      color: #344562;
      margin-bottom: 8px;
    }

    input {
      height: 48px;
      border-radius: 8px;
      border: 1px solid #efeff8;
      margin-bottom: 24px;
      color: #344562;
      font-size: 14px;
      font-weight: 400;
      padding: 0 17px;
    }
  }
`;

export const StyledDeleteContainer = styled.div`
  display: flex;
  justify-content: space-between;

  h5 {
    font-size: 14px;
    font-weight: 600;
    color: #344562;
    margin: 0;
  }
  p {
    font-size: 14px;
    font-weight: 600;
    color: #868da1;

    &:hover {
      cursor: pointer;
      color: red;
    }
  }
`;
