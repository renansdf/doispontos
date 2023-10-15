import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import HomeImg from '../../images/home_com_faixa.png';
// import ProjetosImg from '../../images/projetos_com_faixa.png';
// import ContatoImg from '../../images/projetocontato_com_faixa.png';
import SobreImg from '../../images/sobre_com_faixa.png';
import { Container, CloseMenuButton, HamburguerMenuButton, MenuOverlay } from './styles';

const Header: React.FC = () => {
  const [visibility, setVisibility] = useState(false)

  return(
    <Container>
      <Link to="/">
        <h1>Dois Pontos</h1>
      </Link>

      <HamburguerMenuButton onClick={() => { setVisibility(!visibility) }}>
        <span />
        <span />
        <span />
      </HamburguerMenuButton>

      <MenuOverlay isVisible={visibility}>
        <Link to="/" onClick={() => { setVisibility(!visibility) }}><img src={HomeImg} /></Link>
        <Link to="/sobre" onClick={() => { setVisibility(!visibility) }}><img src={SobreImg} /></Link>
        {/* <Link to="/contato" onClick={() => { setVisibility(!visibility) }}><img src={ContatoImg} /></Link> */}
        {/* <Link to="/projetos" onClick={() => { setVisibility(!visibility) }}><img src={ProjetosImg} /></Link> */}
        <CloseMenuButton onClick={() => { setVisibility(!visibility) }}>
          <span className="material-symbols-outlined">close</span>
        </CloseMenuButton>
      </MenuOverlay>
    </Container>
  )
}

export default Header;