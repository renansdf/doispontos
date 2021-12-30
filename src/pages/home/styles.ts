import styled, { css } from 'styled-components';

export const Container = styled.main`
  scroll-snap-type: y mandatory;
  max-height: 100vh;
  overflow-y: scroll;
`;

interface IProject{
  bgUrl: string;
}

export const Project = styled.section<IProject>`
  scroll-snap-align: start;

  width: 100%;
  height: 100vh;
  background: grey;

  ${props => props.bgUrl && css`
    background-image: url(${props.bgUrl});
  `}

  background-size: contain;
  background-position: center;

  a{
    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;


export const LinkText = styled.span`
  background: #303030;
  color: #fff;
  padding: 100px 20px;
  font-size: 1.3em;
  text-transform: uppercase;
  letter-spacing: .1em;
  font-weight: 300;
  max-width: 200px;

  opacity: 0;
  transition: opacity .3s;

  &:hover{
    opacity: 1;
  }
`;