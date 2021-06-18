import React, { useState } from "react";
import Avatar from "../../Common/Avatar";
import Button from "../../Common/Button";
import SectionTitle from "../../Common/SectionTitle";
import {
  AvatarContainer,
  FormGroup,
  SectionContainer,
  StyledLine,
  StyledDeleteContainer,
} from "./General.styles";

const General = () => {
  const userData = {
    name: "Ramona",
    surname: "Flowers",
    email: "ramona.flowers@biorelate.com",
    phone: "207 555 0119",
  };
  const [user, setUser] = useState(userData);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SectionContainer>
      <SectionTitle>General</SectionTitle>
      <p>Click filed boxes to edit and then save your changes.</p>
      <h5>Avatar</h5>
      <AvatarContainer>
        <Avatar />
        <Button secondary width="100px">
          Upload
        </Button>
        <Button tertiary width="100px">
          Remove
        </Button>
      </AvatarContainer>
      <StyledLine />
      <div>
        <FormGroup>
          <div>
            <label htmlFor="first-name">First name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              id="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="last-name">Last name</label>
            <input
              type="text"
              name="surname"
              value={user.surname}
              id="surname"
              onChange={handleChange}
            />
          </div>
        </FormGroup>
        <FormGroup>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              id="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone number</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              id="phone"
              onChange={handleChange}
            />
          </div>
        </FormGroup>
      </div>
      <StyledLine />
      <StyledDeleteContainer>
        <h5>Delete account</h5>
        <p onClick={() => alert("Why would you want to do that? :(")}>
          Delete account...
        </p>
      </StyledDeleteContainer>
      <p>By deleting your account you will lose all of your data.</p>
      <Button width="150px">Save Changes</Button>
    </SectionContainer>
  );
};

export default General;
