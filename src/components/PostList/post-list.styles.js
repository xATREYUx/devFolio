import styled from "styled-components";

export const PostsSectionContainer = styled.div``;

export const PostListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* padding: 1rem; */
  width: 70%;
  height: 200px;
  background-color: white;
  /* border: 1px solid black; */
  border-radius: 20px;
  overflow: hidden;
  margin: 30px auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

  .caption-area {
    color: white;
    padding: 10px 0px 5px 0px;
    /* position: absolute; */
    height: auto;
    width: 100%;
    background-color: #e75b26;
  }

  .col-right {
    display: flex;
    flex-direction: column;
    padding: 1rem;

    /* align-items: center; */
    /* justify-content: center; */
    .title-area {
      flex: 1;
      justify-content: center;
      align-items: flex-end;
    }
    .button-area {
      flex: 1;
      justify-content: center;
      align-items: flex-end;
    }
  }
  .col-left {
    display: flex;
    flex-direction: column;

    align-items: center;
    img {
      height: 100%;
      width: 100%;
    }
  }

  .card-left {
    height: 100%;
    justify-content: flex-end;
    img {
      bottom: 0px;
      height: 110px;
      width: 110px;
    }
  }
  .card-right {
    flex-direction: column;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    /* .card-button {
      height: 30px;
      width: 150px;
      border: 1px solid black;
      border-radius: 5px;
      background-color: "orange";
    } */
  }
`;

export const CardButtonArea = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
