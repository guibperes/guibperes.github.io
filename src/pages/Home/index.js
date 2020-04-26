import React from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  function handlePostClick(post) {
    history.push(`/${post.id}/${post.title.toLowerCase().replace(/ /g, '-')}`);
  }

  return (
    <Container>
      {posts.map((post) => (
        <PostContainer onClick={() => handlePostClick(post)}>
          <PostHeader>
            <PostTitle>
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
