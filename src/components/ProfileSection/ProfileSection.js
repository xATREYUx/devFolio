import React from "react";
import {
  ProfileSectionContainer,
  NamePlateContainer,
} from "./profile-section.styles";
import ProfilePic from "../../shared/images/profilepic@3x.png";
import Button from "../../shared/form-elements/button";

const ProfileSection = () => {
  return (
    <ProfileSectionContainer>
      <img src={ProfilePic} alt="ProfilePic" />
      <NamePlateContainer>
        <h1>Matthew David</h1>
        <p>Full Stack Development</p>
        <p>Miami Beach, FL</p>
      </NamePlateContainer>
      <Button inverse>Contact Me</Button>
    </ProfileSectionContainer>
  );
};

export default ProfileSection;
