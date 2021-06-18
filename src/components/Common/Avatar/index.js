import styled from "styled-components";
import avatar from "../../../images/avatar.png";

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-image: url(${avatar});

  &:hover {
    cursor: pointer;
  }
`;

export default Avatar;
