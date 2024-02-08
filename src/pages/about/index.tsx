import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import Markdown from 'react-markdown'

import { useInterface } from '../../utils/InterfaceHook'
import type { IAboutPage } from '../../utils/Api'
import { Container, Headings } from './styles'

const About: React.FC = () => {
    const aboutPage = useLoaderData() as IAboutPage

    const { switchHeaderState } = useInterface()

    useEffect(() => {
        switchHeaderState({ menuColor: '', showBackground: true })
    }, [])

    return (
        <Container>
            <Headings>
                <Markdown>{aboutPage.fields.manifesto}</Markdown>
            </Headings>
        </Container>
    )
}

export default About