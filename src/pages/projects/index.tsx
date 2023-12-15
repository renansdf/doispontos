import React, { useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import type { IProject } from '../../utils/Api'
import { Container, Project, Image, Title } from './styles'
import { useInterface } from '../../utils/InterfaceHook'

const Projects: React.FC = () => {
  const projects = useLoaderData() as IProject[]
  const { switchHeaderState } = useInterface()

  useEffect(() => {
      switchHeaderState({ menuColor: '', showBackground: false })
  }, [])

  return (
    <Container>
      {projects?.map(project => (
        <Project key={project.sys.id}>
          <Link to={`/projeto/${project.fields.slug}`}>
            <Image src={project.fields.thumbnail.fields.file.url} />
            <Title>{project.fields.title}</Title>
          </Link>
        </Project>
      ))}
    </Container>
  )
}

export default Projects