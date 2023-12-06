import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1, h2{
        font-size: 32px;
    }

    p{
        font-size: 16px;
    }
`

export const Headings = styled.div`
    width: 90%;
    height: auto;
    padding: 120px 30px 60px;
    text-align: left;

    h2{
        font-size: 6vw;
        font-weight: 400;
        line-height: 1em;
    }

    h2 + h2 {
        margin-top: 60px;
    }
`

export const Biographies = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    p {
        width: 50%;
        padding: 15px 30px;
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