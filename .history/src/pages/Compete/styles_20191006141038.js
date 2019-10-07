import styled from 'styled-components';
import { Spin } from 'react-loading-io';

export const Container = styled.div`
  margin: 15px 15px 15px;
  flex: 1;
  width: 90%;
  height: 510px;
  overflow: scroll;
`;

export const List = styled.ul`
  font-size: 18px;
  margin-bottom: 5px;
  color: #333333;
  cursor: pointer;
`;

export const Loading = styled(Spin)`
  font-size: 20px;
`;
