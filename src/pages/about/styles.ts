import styled from 'styled-components'
import { defaultValues } from '../../globalStyles'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 180px ${defaultValues.padding} 90px;

    h1, h2{
        font-size: 32px;
    }

    p{
        font-size: 16px;
    }

    @media(max-width: 550px){
        padding: 140px ${defaultValues.padding} 40px;
    }
`

export const Headings = styled.div`
    width: 100%;
    height: auto;
    padding: 0px 0px 60px;
    text-align: left;

    h2{
        font-size: 6vw;
        font-weight: 400;
        line-height: 1em;
    }

    h2 + h2 {
        margin-top: 60px;
    }

    @media(max-width: 550px){
        padding: 0px 0px 40px;

        h2{
            font-size: 28px;
        }

        h2 + h2 {
            margin-top: 40px;
        }
    }
`

export const Biographies = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    column-gap: 50px;

    p {
        width: 50%;
        padding: 15px 0px;
        font-size: 2.5vw;
    }

    @media(max-width: 750px){
        flex-direction: column;
        p{
            font-size: 21px;
            width: 100%;
        }
    }
`   