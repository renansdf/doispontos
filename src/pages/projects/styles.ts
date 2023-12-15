import styled from "styled-components";
import { defaultValues } from "../../globalStyles";

export const Container = styled.main`
  padding: 120px ${defaultValues.padding} 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 80px;

  @media(max-width: 900px){
    grid-template-columns: 1fr;
  }
`

export const Project = styled.article`
  justify-self: center;
  align-self: end;

  a{
    color: #000;
  }

  &:hover h2{
    opacity: 1;
  }
`

export const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-weight: 400;
  font-size: 42px;
  margin: 20px 0 0;

  opacity: 0;
  transition: opacity .3s;

  @media(max-width: 1250px){
    font-size: 32px;
  }

  @media(max-width: 450px){
    font-size: 21px;
  }
`

export const Image = styled.img`
  max-width: 100%;
  max-height: 400px;
`