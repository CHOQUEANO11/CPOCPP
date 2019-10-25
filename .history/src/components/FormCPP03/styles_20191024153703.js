import styled from 'styled-components';
import { Spin } from 'react-loading-io';

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

    strong {
      color: #eb144c;
    }
  }

  p {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 25px;
  }

  h4 {
    margin-top: 10px;
    margin-bottom: 5px;
  }

  h5 {
    font-size: 16px;
  }

  textarea {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    margin-top: 5px;
    margin-bottom: -10px;
    border-radius: 4px;
    height: 34px;
    width: 400px;
    font-size: 16px;
    padding: 0 15px;
    color: rgba(0, 0, 0, 0.9);

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const Form = styled.div`
  width: 80%;
  align-items: center;
  margin: 0 auto;
`;

export const Loading = styled(Spin)`
  font-size: 20px;
`;
