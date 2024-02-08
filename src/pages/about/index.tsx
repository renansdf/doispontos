import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import Markdown from 'react-markdown'

import { useInterface } from '../../utils/InterfaceHook'
import type { IAboutPage } from '../../utils/Api'
import { Container, Headings, Biographies } from './styles'

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
            <Biographies>
                {aboutPage.fields.biografias?.map(bio => (
                    <Markdown key={bio.sys.id}>{bio.fields.description}</Markdown>
                ))}
            </Biographies>
        </Container>
    )
}

export default About