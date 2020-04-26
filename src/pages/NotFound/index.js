import React from 'react';

import { gifs } from '../../assets';
import { MetaTags } from '../../components';
import { Container, Gif } from './styles';

export function NotFound() {
  return (
    <Container>
      <MetaTags title='guibperes - 404' description='404 Not Found' />
      <Gif src={gifs.NOT_FOUND} alt='404 Not Found' />
    </Container>
  );
}
