import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import HomeImg from '../../images/home_com_faixa.png';
import ProjetosImg from '../../images/projetos_com_faixa.png';
// import ContatoImg from '../../images/projetocontato_com_faixa.png';
import LogoUrl from '../../images/logo.png';
import SobreImg from '../../images/sobre_com_faixa.png';
import BotaoFechar from '../../images/botao_fechar.png';
import { Container, CloseMenuButton, HamburguerMenuButton, Logo, MenuOverlay, SimpleBurguer } from './styles';
import { useInterface } from '../../utils/InterfaceHook';

const Header: React.FC = () => {
  const [visibility, setVisibility] = useState(false)

  const { headerState } = useInterface();

  return(
    <Container 
      showBackground={headerState.showBackground}
      menuColor={headerState.menuColor}
    >
      <Link to="/">
        <Logo src={LogoUrl} />
      </Link>

      <HamburguerMenuButton onClick={() => { setVisibility(!visibility) }}>
        <SimpleBurguer bgColor={headerState.menuColor} />
        <SimpleBurguer bgColor={headerState.menuColor} />
        <SimpleBurguer bgColor={headerState.menuColor} />
      </HamburguerMenuButton>

      <MenuOverlay isVisible={visibility}>
        <Link to="/" onClick={() => { setVisibility(!visibility) }}><img src={HomeImg} /></Link>
        <Link to="/sobre" onClick={() => { setVisibility(!visibility) }}><img src={SobreImg} /></Link>
        <Link to="/projetos" onClick={() => { setVisibility(!visibility) }}><img src={ProjetosImg} /></Link>
        {/* <Link to="/contato" onClick={() => { setVisibility(!visibility) }}><img src={ContatoImg} /></Link> */}
        <CloseMenuButton onClick={() => { setVisibility(!visibility) }}>
          <img src={BotaoFechar} alt="fechar menu" />
        </CloseMenuButton>
      </MenuOverlay>
    </Container>
  )
}

export default Header;