import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Markdown from 'react-markdown'

import type { IAboutPage } from '../../utils/Api'
import { Container, Headings, Biographies } from './styles'

const About: React.FC = () => {
    const aboutPage = useLoaderData() as IAboutPage
    console.log(aboutPage)

    return (
        <Container>
            <Headings>
                <Markdown>{aboutPage.fields.manifesto}</Markdown>
            </Headings>
            <Biographies>
                {aboutPage.fields.biografias.map(bio => (
                    <Markdown key={"@"}>{bio.fields.description}</Markdown>
                ))}
            </Biographies>
        </Container>
    )
}

export default About