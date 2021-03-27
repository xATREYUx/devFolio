import React from "react";
import {
  ProfileSectionContainer,
  NamePlateContainer,
  FirstName,
  LastName,
  ProfilePicture,
  ProfileButtons,
} from "./profile-section.styles";
import { Row, Paragraph } from "../../shared/shared.styles";
import ProfilePic from "../../shared/images/profilepic@3x.png";
import Button from "../../shared/form-elements/button";

import { useHistory } from "react-router-dom";

const ProfileSection = () => {
  const goToAboutMePage = () => {
    history.push("/about-me-page")
  }
  const history = useHistory()
  return (
    <ProfileSectionContainer>
      <ProfilePicture>
        <img src={ProfilePic} alt="ProfilePic" />
      </ProfilePicture>
      <NamePlateContainer>
        <Row>
          <FirstName>MATTHEW</FirstName>
          <LastName>DAVID</LastName>
        </Row>
        <Paragraph>Full Stack Development</Paragraph>
        <Paragraph>Miami Beach, FL</Paragraph>
      </NamePlateContainer>
      <ProfileButtons id="profile-buttons-container">
        <Button onClick={goToAboutMePage} className="profile-button" inverse>
          About Me
        </Button>
        <Button className="profile-button" inverse>
          Contact
        </Button>
      </ProfileButtons>
    </ProfileSectionContainer>
  );
};

export default ProfileSection;
