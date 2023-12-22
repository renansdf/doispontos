import styled from 'styled-components';
import { defaultValues } from '../../globalStyles';

export const Container = styled.main`
  padding: 180px ${defaultValues.padding} 120px;
  min-height: 60vh;
  display: grid;
  grid-column-gap: 120px;
  grid-template-columns: 1fr 1fr;

  @media(max-width: 950px){
    grid-template-columns: 1fr;
    grid-row-gap: 60px;
  }

  @media(max-width: 450px){
    padding: 120px ${defaultValues.padding} 30px;
    grid-row-gap: 30px;
  }
`

export const Column = styled.section`
  align-self: center;

  h3 + h3{
    margin-top: 10px;
  }

  @media(max-width: 1250px){
    h1{ font-size: 42px; }
    h2{ font-size: 26px; }
    h3{ font-size: 19px; }
  }

  @media(max-width: 950px){
    h1{ font-size: 36px; }
    h2{ font-size: 26px; }
    h3{ font-size: 19px; }
  }

  @media(max-width: 450px){
    h1{ font-size: 26px; }
    h2{ font-size: 19px; }
    h3{ font-size: 16px; }
  }
`

export const Title = styled.h1`
  font-size: 4vw;
  font-weight: 400;
`

export const CallToAction = styled.h2`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 20px;
`

export const Info = styled.h3`
  font-weight: 400;
  font-size: 21px;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;

  img{
    max-width: 40px;
    max-height: 30px;
    filter: grayscale(1);
  }

  a + a{
    margin-left: 15px;
  }
`