import styled from 'styled-components';
import { Eclipse } from 'react-loading-io';

export const Container = styled.div`
  margin: 15px 15px 15px;
`;

export const List = styled.ul`
  font-size: 18px;
  margin-bottom: 5px;
  color: #333333;
  cursor: pointer;
`;

export const Loading = styled(Eclipse)`
  flex: 1;
  font-size: 64px;
  justify-content: center;
  align-items: center;
  color: #274293;
`;
