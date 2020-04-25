import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #000;
  margin-bottom: 50px;
`;

export const Logo = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 32px;
  font-weight: 300;
  font-family: 'Comfortaa', cursive;
`;
