import styled from "styled-components";

export const ProfileSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 30px 0;
  /* margin: -150px; */
  /* flex: 1; */
  /* align-items: center; */
  justify-content: space-between;

  img {
    width: 30%;
    height: auto;
    border: white solid 3px;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }
`;

export const NamePlateContainer = styled.div`
  flex: 1; 
  margin: 20px 0 20px 0;
  color: white;
  text-align: center;
  h1,
  p {
    line-height: 0.5;
    color: black;
  }
`;

export const FirstName = styled.div`
  font-family: "Libre Franklin", sans-serif;
  font-size: 30px;
`;

export const LastName = styled.div`
  font-family: "Kufam", cursive;
  font-size: 31px;
  padding-top: 1px;
`;

export const ProfileButtons = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  .profile-button {
    padding: 5px;
  }
`;

export const ProfilePicture = styled.div``;
