import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => {
  return(
    <Container>
      <Link to="/">
        <h1>Dois Pontos</h1>
      </Link>
    </Container>
  )
}

export default Header;