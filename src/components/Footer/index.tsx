import React from 'react'
import { Container, FooterColumn } from './styles'

import LogoHor from '../../images/logo_ep_hor.png'

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterColumn>
        <a href="https://www.instagram.com/_estudiopapel_" target='_blank' rel="noreferrer">instagram</a>
        <a href="mailto:oi@estudiodepapel.com.br">oi@estudiodepapel.com.br</a>
        <a href="tel:+55 21 999 920 032">+55 21 999 920 032</a>
      </FooterColumn>

      <FooterColumn />

      <FooterColumn>
        <img src={LogoHor} />
        <span>(c)</span>
        <span>todos os direitos reservados</span>
      </FooterColumn>
    </Container>
  )
}

export default Footer