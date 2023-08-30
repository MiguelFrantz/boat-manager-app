
import styled from 'styled-components';

export const DetailContainer = styled.section`
  padding: 16px 32px;
  background-color: #edf0f5;
  border-top: 1px solid #e7e7e7;

  display: flex;
  flex-direction: column;

  h3 {
    font-size: 16px;
    margin-bottom: 32px;
  }

`;

export const CustomButton = styled.div`
  background-color: #fff;
  align-self: stretch;
  padding: 12px;
  margin: 3px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #fbfcfd;
  }

  &:active {
    transform: scale(0.995);
    box-shadow: 2px 1px 6px 1px rgba(0, 0, 0, 0.1);
  }

  .icon {
    border-radius: 50%;
    background-color: #edf0f5;
    padding: 8px;
    margin-right: 12px;
  }

  &.danger {
    background-color: #ffbbb7;
    color: #e54d45;
    .icon {
      background-color: #fff;
    }
  }
`;