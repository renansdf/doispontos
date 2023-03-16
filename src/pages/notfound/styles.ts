import styled from "styled-components"

import { defaultValues } from "../../globalStyles"

export const Wrapper = styled.div`
    padding-top: 80px;
`


export const Container = styled.div`
    padding: ${defaultValues.padding};

    h1{
        margin: 0 0 15px;
    }

    p{
        margin: 0 0 10px;
        font-size: 16px;
    }

    a{
        padding: 10px 15px;
        border: 1px solid #000;
        border-radius: 5px;
        color: #000;
        display: inline-block;
        margin-top: 10px;
        transition: all .3s;

        &:hover{
            background: #000;
            color: #fff;
        }
    }
`