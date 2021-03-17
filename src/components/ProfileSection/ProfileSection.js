import React from "react";
import {
  ProfileSectionContainer,
  NamePlateContainer,
  FirstName,
  LastName,
} from "./profile-section.styles";
import { Row, Paragraph } from "../../shared/shared.styles";
import ProfilePic from "../../shared/images/profilepic@3x.png";
import Button from "../../shared/form-elements/button";

const ProfileSection = () => {
  return (
    <ProfileSectionContainer>
      <img src={ProfilePic} alt="ProfilePic" />
      <NamePlateContainer>
        <Row>
          <FirstName>MATTHEW </FirstName>
          <LastName>DAVID</LastName>
        </Row>
        <Paragraph>Full Stack Development</Paragraph>
        <Paragraph>Miami Beach, FL</Paragraph>
      </NamePlateContainer>
      <Button inverse>Contact Me</Button>
    </ProfileSectionContainer>
  );
};

export default ProfileSection;
