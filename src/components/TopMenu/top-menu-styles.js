import styled from "styled-components";

export const TopMenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  align-items: center;

  .top-right {
    display: flex;
    margin: 20px;
    input {
      width: 100px;
      margin: 3px;
    }
    justify-content: flex-end;

    .logged-in-icons-container {
      display: flex;
    }
    .logged-in-icon {
      margin: 5px;
    }
  }

  .top-left {
    font-weight: bold;
    font-size: 1rem;
    padding: 20px;
    text-align: left;
    justify-content: space-around;
  }

  .top-menu-submit {
    background-color: white;
    border: none;
  }

  /* background-color: #e85b26; */
`;
