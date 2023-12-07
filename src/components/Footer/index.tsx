import React from 'react'
import { Container, FooterColumn } from './styles'

import PASSARO from '../../images/passaro.png'

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterColumn>
        <img src={PASSARO} />
        <a href="#" target='_blank'>instagram</a>
        <a href="#" target='_blank'>youtube</a>
        <a href="#" target='_blank'>linkedin</a>
      </FooterColumn>

      <FooterColumn>
        <img src={PASSARO} />
        <a href="mailto:contato@estudio2pontos.com">contato@estudio2pontos.com</a>
        <a href="tel:+55 21 999 920 032">+55 21 999 920 032</a>
        <a href="tel:+55 21 999 561 064">+55 21 999 561 064</a>
      </FooterColumn>

      <FooterColumn>
        <img src={PASSARO} />
        <h3>Dois Pontos</h3>
        <span>(c)</span>
        <span>todos os direitos reservados</span>
      </FooterColumn>
    </Container>
  )
}

export default Footer