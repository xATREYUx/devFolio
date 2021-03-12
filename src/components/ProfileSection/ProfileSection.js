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
      <div className="row">
        <div className="profile-background">
          <img src={ProfilePic} alt="ProfilePic" />
        </div>
      </div>
      <div className="row">
        <NamePlateContainer>
          <h1>Matthew David</h1>
          <p>Full Stack Development</p>
          <p>Miami Beach, FL</p>
        </NamePlateContainer>
      </div>
      <div className="row">
        <Button inverse>Contact Me</Button>
      </div>
    </ProfileSectionContainer>
  );
};

export default ProfileSection;
