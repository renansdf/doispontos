import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, CloseMenuButton, HamburguerMenuButton, MenuOverlay } from './styles';

const Header: React.FC = () => {
  const [visibility, setVisibility] = useState(false)

  return(
    <Container>
      <Link to="/">
        <h1>Dois Pontos</h1>
      </Link>

      <HamburguerMenuButton onClick={() => { setVisibility(!visibility) }}>
        <span className="material-symbols-outlined">menu</span>
      </HamburguerMenuButton>

      <MenuOverlay isVisible={visibility}>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
        <CloseMenuButton onClick={() => { setVisibility(!visibility) }}>
          <span className="material-symbols-outlined">close</span>
        </CloseMenuButton>
      </MenuOverlay>
    </Container>
  )
}

export default Header;