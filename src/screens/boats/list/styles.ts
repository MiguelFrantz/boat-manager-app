
import styled from 'styled-components';

export const ListContainer = styled.section`
  width: 80%;
  margin: 0px auto; 

  section {
    display: flex;
    align-items: center;
  }

  .search-icon {
    cursor: pointer;
    border-radius: 50%;
    background-color: #edf0f5;
    padding: 16px;
    font-size: 16px;
    font-weight: 700;

    &:hover {
      background-color: #e7e7e7;
    }
    &:active {
      transform: scale(0.98);
      box-shadow: 2px 1px 6px 1px rgba(0, 0, 0, 0.2);
    }
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 22px;
    margin-top: 28px;
    margin-bottom: 0px;
  }
`;