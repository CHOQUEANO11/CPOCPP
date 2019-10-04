import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-right: 20px;
  grid-gap: 15px;
  margin-top: 30px;

  p {
    text-align: end;
  }
`;
