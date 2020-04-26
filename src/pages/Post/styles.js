import styled from 'styled-components';

import { Page } from '../../components';

export const Container = styled(Page)`
  flex-direction: column;
`;

export const PostTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  margin: 40px 0;
`;

export const PostDate = styled.small`
  text-align: center;
  font-size: 16px;
  font-weight: 300;
`;

export const PostContent = styled.div`
  margin-top: 25px;
  text-align: justify;
  line-height: 1.5;
`;
