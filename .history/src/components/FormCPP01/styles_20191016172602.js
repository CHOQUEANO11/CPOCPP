import styled from 'styled-components';

export const Container = styled.div`
  margin: 15px 15px 15px;
  flex: 1;
  width: 98%;
  height: 620px;
  overflow: scroll;
  align-items: center;
  justify-content: center;

  h3 {
    margin-top: 10px;
    margin-bottom: 5px;
    text-align: center;
  }

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;
