import React from "react";
import { Link } from "react-router-dom";
import {
  StyledLoginLayout,
  StyledLoginContainer,
  StyledImageContainer,
} from "./Login.styles";
import bgImage from "../../images/science-background.png";
import Button from "../Common/Button";

const Login = () => {
  return (
    <StyledLoginLayout>
      <StyledLoginContainer>
        <div>
          <h1>Log in</h1>
          <form action="submit">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="ramona@example.com"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="Password"
              id="password"
              placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            />
            <Link to="/profile">
              <Button width="100%">Log in</Button>
            </Link>
            <p>
              Don't have an account yet? <span>Sign up</span>
            </p>
          </form>
        </div>
      </StyledLoginContainer>
      <StyledImageContainer>
        <img src={bgImage} alt="background image" />
      </StyledImageContainer>
    </StyledLoginLayout>
  );
};

export default Login;
