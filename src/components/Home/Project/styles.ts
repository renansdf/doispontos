import styled, { css } from 'styled-components'
import type { Asset } from 'contentful';

interface IFrameProps {
  frameStep: boolean;
  animationFrames: {
    desktop: Asset[];
    mobile?: Asset[];
  };
}

export const Container = styled.section<IFrameProps>`
  scroll-snap-align: center;

  width: 100%;
  height: 100vh;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  ${props => css`
    background-image: url(${props.animationFrames.desktop[0].fields.file.url});
  `}

  ${props => !props.frameStep && css`
    background-image: url(${props.animationFrames.desktop[1].fields.file.url});
  `}

  a{
    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: none;
    transition: all .7s;

    ${props => props.frameStep && css`
      background-color: rgba(255,255,255,.85);
      span{
        opacity: 1;
      }
    `}
  }

  @media(max-width: 900px) {
    ${props => props.animationFrames.mobile !== undefined && css`
      background-image: url(${props.animationFrames.mobile[0].fields.file.url});
    `}

    ${props => props.animationFrames.mobile !== undefined && !props.frameStep && css`
      background-image: url(${props.animationFrames.mobile[1].fields.file.url});
    `}
  }
`;