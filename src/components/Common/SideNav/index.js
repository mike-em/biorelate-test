import styled, { css } from "styled-components";

const SideNav = styled.li`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 100px;
  font-size: 16px;
  font-weight: 600;
  color: #868da1;
  margin-bottom: 8px;

  &:hover {
    cursor: pointer;
  }

  ${({ active, id }) =>
    active === id &&
    css`
      background-color: rgba(26, 136, 232, 0.1);
      color: #1a88e8;
    `}
`;

export default SideNav;
