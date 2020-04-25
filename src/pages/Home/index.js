import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import posts from '../../data.json';
import { Page } from '../../components';
// import { Container } from './styles';

export function Home() {
  return (
    <Page>
      {posts.map((post) => (
        <article>
          <h3>{post.title}</h3>
          <p>Created At {post.createdAt}</p>
          <div>{ReactHtmlParser(post.content)}</div>
          <br />
        </article>
      ))}
    </Page>
  );
}
