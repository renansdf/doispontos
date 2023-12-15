import React, { useEffect } from 'react';

import { useInterface } from '../../utils/InterfaceHook';
import Instagram from '../../images/instagram.png';
import Youtube from '../../images/youtube.png';
import Linkedin from '../../images/linkedin.png';
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
    url: "#"
  },{
    name: "Youtube",
    icon: Youtube,
    alt: "Nosso canal no youtube",
    url: "#"
  },{
    name: "LinkeIn",
    icon: Linkedin,
    alt: "Nosso estúdio no Linked In",
    url: "#"
  }
]

const Contato: React.FC = () => {
  const { switchHeaderState } = useInterface()

  useEffect(() => {
      switchHeaderState({ menuColor: '', showBackground: true })
  }, [])

  return (
    <Container>
      <Column>
        <Title>Quer conhecer o estúdio dois pontos? Vamos bater um papo?</Title>

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
        <Info>estudio2pontos@gmail.com</Info>
        <Info>
          Telefones:<br/>
          +55 21 99956 1064<br/>
          +55 21 99992 0032
        </Info>
      </Column>
    </Container>
  )
}

export default Contato