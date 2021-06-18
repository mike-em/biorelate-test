import styled from "styled-components";

export const StyledLoginLayout = styled.div`
  width: 100vw;
  display: flex;
`;

export const StyledLoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  div {
    width: 70%;
  }

  h1 {
    font-size: 3rem;
    color: #344562;
    margin-bottom: 24px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 24px;
      margin-bottom: 8px;
      font-weight: 600;
    }

    input {
      padding: 0.75rem;
      border: 1px solid #efeff8;
      border-radius: 8px;
      letter-spacing: 1px;
    }
    p {
      color: gray;

      span {
        color: #1a88e8;
      }
    }
  }
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #78bcff 0%, #0073e6 100%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
