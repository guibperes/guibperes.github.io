import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import posts from '../../data.json';
import { Container, PostTitle, PostDate, PostContent } from './styles';

export function Post() {
  const { postId } = useParams();
  const post = posts.filter((postData) => postData.id === parseInt(postId))[0];

  return (
    <>
      {post ? (
        <Container>
          <PostTitle>{post.title}</PostTitle>
          <PostDate>
            {format(new Date(post.createdAt), `dd 'de' MMMM 'de' yyyy`, {
              locale: ptBR,
            })}
          </PostDate>
          <PostContent>{ReactHtmlParser(post.content)}</PostContent>
        </Container>
      ) : (
        <Redirect to='/404' />
      )}
    </>
  );
}
