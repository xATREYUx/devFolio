import styled from "styled-components";

export const NamePlateContainer = styled.div`
  /* margin: 20px 0 20px 0; */
  color: white;
  text-align: center;
  h1,
  p {
    line-height: 0.5;
    color: black;
  }
`;

export const ProfileSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
  padding: 100px 0 30px 0;
  /* margin: -150px; */
  /* flex: 1; */
  /* align-items: center; */
  /* justify-content: center; */

  .profile-background {
    position: relative;
    height: auto;
    width: 30%;
    /* background-color: white; */
    border: white solid 3px;
    border-radius: 50%;
  }

  img {
    width: 30%;
    height: auto;
    border: white solid 3px;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  .contact-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 150px;
    height: 40px;
    background: white !important;
    border-radius: 10px;
  }
`;
