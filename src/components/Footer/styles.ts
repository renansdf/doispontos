import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px 10%;
  flex-wrap: wrap;
`;

export const FooterColumn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  padding: 15px 10px;

  h3, a, span{
    font-size: 19px;
    line-height: 1em;
  }

  a + a, h3 + a, h3 + span, span + span{
    margin-top: 7px;
  }

  h3{
    font-weight: 400;
  }
  
  a{
    color: #000;
  }

  img{
    max-width: 50px;
    margin-bottom: 50px;
  }

  @media(max-width: 900px){
    img{
      margin-bottom: 10px;
    }
  }

  @media(max-width: 350px){
    h3, a, span{
      font-size: 14px;
    }
  }
`;