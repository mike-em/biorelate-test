import styled from "styled-components";

export const StyledSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 24px;
    font-weight: 700;
    color: #344562;
  }

  p {
    margin: 16px 0 32px 0;
    font-size: 14px;
    font-weight: 400;
    color: #868da1;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    margin-right: 16px;
  }
`;

export const ArticleCard = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0px 4px 16px rgba(82, 94, 115, 0.08);
`;

export const ArticleCardContent = styled.div`
  width: 90%;
  height: 100%;

  h3 {
    font-size: 16px;
    font-weight: 500;
    color: #1a88e8;
    margin-bottom: 16px;
  }

  h6 {
    font-size: 14px;
    font-weight: 400;
    color: #5c6d8e;
    margin-bottom: 16px;

    span {
      font-weight: 600;
    }
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: #30405f;
  }
`;

export const ArticleCardButtons = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-bottom: 16px;
  }
`;

export const FilterNumber = styled.div`
  display: flex;
  width: 15px;
  height: 15px;
  margin-left: 8px;
  border-radius: 50%;
  background-color: #1a88e8;
  font-size: 8px;
  color: white;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;
