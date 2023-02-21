import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

import { IProject } from '../../api'
import { Container, Project, LinkText } from './styles'

const Home: React.FC = () => {
  const loaderData: any = useLoaderData()
  const projects: IProject[] = loaderData

  return (
    <Container>
      {projects && projects.map(project => (
        <Project key={project.sys.id} bgUrl={project.fields.animations[0].fields.file.url}>
          <Link to={`/projeto/${project.sys.id}`}>
            <LinkText>
              {project.fields.title}
            </LinkText>
          </Link>
        </Project>
      ))}
    </Container>
  );
}

export default Home;