import styled from 'styled-components';

import { Page } from '../../components';

export const Container = styled(Page)`
  flex-direction: column;
`;

export const PostContainer = styled.article`
  padding: 20px;
  border: 1px solid #000;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostContent = styled.p`
  font-family: 'Comfortaa', cursive;
  font-size: 14px;
  padding: 10px;
  padding-top: 20px;
`;

export const PostTitle = styled.a`
  font-family: 'Comfortaa', cursive;
  text-decoration: none;
  color: #000;
  font-weight: 600;
`;

export const PostDate = styled.small`
  font-weight: 300;
  padding-left: 5px;
`;

export const PostId = styled.small`
  font-weight: 300;
`;
