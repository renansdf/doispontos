import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import { Wrapper,    Container } from './styles'

const NotFound: React.FC = () => (
    <Wrapper>
        <Header/>
        <Container>
            <h1>Página não encontrada.</h1>
            <p>Não encontramos o que você estava procurando.</p>
            <p>Se o problema persistir, entre em contato com os administradores.</p>
            <Link to="/">Voltar para Projetos</Link>
        </Container>
    </Wrapper>
);
  
export default NotFound;