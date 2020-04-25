import React from 'react';
import { format } from 'date-fns';

import posts from '../../data.json';
import {
  Container,
  PostContainer,
  PostHeader,
  PostTitle,
  PostDate,
  PostId,
  PostContent,
} from './styles';

export function Home() {
  return (
    <Container>
      {posts.map((post) => (
        <PostContainer>
          <PostHeader>
            <PostTitle
              to={`/${post.id}/${post.title.toLowerCase().replace(/ /g, '-')}`}
            >
              {post.title}
              <PostDate>
                {format(new Date(post.createdAt), 'dd/MM/yyyy')}
              </PostDate>
            </PostTitle>
            <PostId>#{post.id}</PostId>
          </PostHeader>
          <PostContent>{post.description}</PostContent>
        </PostContainer>
      ))}
    </Container>
  );
}
