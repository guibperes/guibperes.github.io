import React from 'react';

import { gifs } from '../../assets';
import { Container, Gif } from './styles';

export function NotFound() {
  return (
    <Container>
      <Gif src={gifs.NOT_FOUND} alt='404 Not Found' />
    </Container>
  );
}
