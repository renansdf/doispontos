import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import HomeImg from '../../images/home_com_faixa.png';
// import ProjetosImg from '../../images/projetos_com_faixa.png';
// import ContatoImg from '../../images/projetocontato_com_faixa.png';
import SobreImg from '../../images/sobre_com_faixa.png';
import FaixaContato from '../../images/faixa_contato.png';
import FaixaHome from '../../images/faixa_home.png';
import FaixaProjetos from '../../images/faixa_projetos.png';
import BotaoFechar from '../../images/botao_fechar.png';
import { Container, CloseMenuButton, HamburguerMenuButton, MenuOverlay, MenuBurger } from './styles';

const Header: React.FC = () => {
  const [visibility, setVisibility] = useState(false)

  return(
    <Container>
      <Link to="/">
        <h1>Dois Pontos</h1>
      </Link>

      <HamburguerMenuButton onClick={() => { setVisibility(!visibility) }}>
        <MenuBurger src={FaixaContato} />
        <MenuBurger src={FaixaHome} />
        <MenuBurger src={FaixaProjetos} />
      </HamburguerMenuButton>

      <MenuOverlay isVisible={visibility}>
        <Link to="/" onClick={() => { setVisibility(!visibility) }}><img src={HomeImg} /></Link>
        <Link to="/sobre" onClick={() => { setVisibility(!visibility) }}><img src={SobreImg} /></Link>
        {/* <Link to="/contato" onClick={() => { setVisibility(!visibility) }}><img src={ContatoImg} /></Link> */}
        {/* <Link to="/projetos" onClick={() => { setVisibility(!visibility) }}><img src={ProjetosImg} /></Link> */}
        <CloseMenuButton onClick={() => { setVisibility(!visibility) }}>
          <img src={BotaoFechar} alt="fechar menu" />
        </CloseMenuButton>
      </MenuOverlay>
    </Container>
  )
}

export default Header;