import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { loadProjects, IProject } from '../../api'

import Header from '../../components/Header'

import { Container, Project, LinkText } from './styles'

const Home: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>()

  const load = async () => {
    const loadedProjects = await loadProjects()
    setProjects(loadedProjects)
  }

  useEffect(() => {
    load()
  }, []);

  return (
    <>
      <Header />
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
    </>
  );
}

export default Home;