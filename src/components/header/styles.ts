import styled from 'styled-components';

export const HeaderContainer = styled.section`
  padding: 16px 32px;
  background-color: #edf0f5;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 32px;
    font-weight: 800;
    margin: 0px;
  }

  .header-button {
    cursor: pointer;
    border-radius: 50%;
    background-color: #fff;
    padding: 16px;

    &:hover {
      background-color: #fbfcfd;
    }
    &:active {
      transform: scale(0.98);
      box-shadow: 2px 1px 6px 1px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const HeaderIcons = styled.div`
  flex-basis: 64px;
`;