import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, MenuButton, MenuContainer } from './styles';

const Header: React.FC = () => {
  const [visibility, setVisibility] = useState(false)

  return(
    <Container>
      <Link to="/">
        <h1>Dois Pontos</h1>
      </Link>

      <MenuButton onClick={() => setVisibility(!visibility)}>Menu</MenuButton>

      <MenuContainer isVisible={visibility}>
        <Link to="/">Principal</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
        <MenuButton onClick={() => setVisibility(!visibility)}>Close</MenuButton>
      </MenuContainer>
    </Container>
  )
}

export default Header;