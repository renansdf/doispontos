import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import HomeImg from '../../images/home_com_faixa.png';
// import ProjetosImg from '../../images/projetos_com_faixa.png';
// import ContatoImg from '../../images/projetocontato_com_faixa.png';
import LogoUrl from '../../images/logo.png';
import SobreImg from '../../images/sobre_com_faixa.png';
import BotaoFechar from '../../images/botao_fechar.png';
import { Container, CloseMenuButton, HamburguerMenuButton, Logo, MenuOverlay, SimpleBurguer } from './styles';
import { useHeader } from '../../utils/HeaderThemeHook';

const Header: React.FC = () => {
  const [visibility, setVisibility] = useState(false)

  const { state } = useHeader();

  return(
    <Container 
      showBackground={state.showBackground}
      menuColor={state.menuColor}
    >
      <Link to="/">
        <Logo src={LogoUrl} />
      </Link>

      <HamburguerMenuButton onClick={() => { setVisibility(!visibility) }}>
        <SimpleBurguer bgColor={state.menuColor} />
        <SimpleBurguer bgColor={state.menuColor} />
        <SimpleBurguer bgColor={state.menuColor} />
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