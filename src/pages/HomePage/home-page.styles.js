import styled from "styled-components";

export const HomePageContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  min-height: 3000px;
  /* width: 100vw; */

  .backBlobBottom {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 30vh;
    bottom: -20px;
    transform: scaleY(-1);
  }

  .bubbleBlobs {
    z-index: -2;
    position: absolute;
    width: 30vw;
    height: 45vh;
    bottom: 95px;
  }
`;

export const SectionContainer = styled.div`
  position: relative;
   display: flex;
  flex-wrap: wrap;
  top: -85px;
  .backBlobTop {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: auto;
  }

  #section-column-left {
    margin-top: 20px;
  }

  .section-column.column-right {
    position: relative;
    align-items: center;
    justify-content: center;
  }
`;

// export const Title = styled.div`
//   margin: 30px 0 50px 0;
//   font-size: xx-large;
//   color: white;
// `;
export const AboutMeContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  .aboutMeText {
    text-align: center;
    padding: 10px;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    width: 70%;
    color: white;
  }
`;
