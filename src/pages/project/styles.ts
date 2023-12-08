import styled from 'styled-components';
import { defaultValues } from '../../globalStyles';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: block;
`

export const Cover = styled.section<{ bgUrl: string, mobileBgUrl: string }>`
  width: 100%;
  height: 50vh;

  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 500px){
    background-image: url(${props => props.mobileBgUrl});
  }
`

export const ProjectCotent = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 40px ${defaultValues.padding};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
`

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 400;
  color: #000;
  align-self: start;
  justify-self: start;
  grid-column-start: span 2;

  @media(max-width: 900px){
    grid-column-start: span 6;
  }
`
export const Description = styled.article`
  font-size: 21px;
  grid-column-start: span 4;

  @media(max-width: 900px){
    grid-column-start: span 6;
  }

  @media(max-width: 500px){
    font-size: 16px;
  }
`

export const VideoWrapper = styled.div`
  grid-column-start: span 6;

  div, div iframe{
    width: 100%;
  }
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  grid-column-start: span 3;

  @media(max-width: 650px){
    grid-column-start: span 6;
  }
`