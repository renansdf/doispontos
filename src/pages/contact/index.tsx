import React, { useEffect } from 'react';

import { useInterface } from '../../utils/InterfaceHook';
import Instagram from '../../images/instagram.png';
import { Container, Column, Title, SocialIcons, CallToAction, Info } from './styles';

interface ISocialNetwork {
  name: string;
  icon: any;
  url: string;
  alt: string;
}

const socialNetworks: ISocialNetwork[] = [
  {
    name: "Instagram",
    icon: Instagram,
    alt: "Nosso instagram",
    url: "https://www.instagram.com/_estudiopapel_/"
  }
]

const Contato: React.FC = () => {
  const { switchHeaderState, hideFooter, showFooter } = useInterface()

  useEffect(() => {
      switchHeaderState({ menuColor: '', showBackground: true })
      hideFooter()

      return () => {
        showFooter()
      }
  }, [])

  return (
    <Container>
      <Column>
        <Title>Quer conhecer o estúdio de papel? Vamos bater um papo?</Title>

        <SocialIcons>
          {socialNetworks.map(network => (
            <a key={network.name} href={network.url} >
              <img src={network.icon} alt={network.alt} />
            </a>
          ))}
        </SocialIcons>
      </Column>

      <Column>
        <CallToAction>Entre em contato para fazermos uma proposta para o seu projeto :)</CallToAction>
        <Info>eestudiodepapel@gmail.com</Info>
        <Info>
          +55 21 999 920 032
        </Info>
      </Column>
    </Container>
  )
}

export default Contato