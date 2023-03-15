import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

import { type IProject } from '../../utils/Api'
import { Container, Project, LinkText } from './styles'

const Home: React.FC = () => {
  const projects = useLoaderData() as IProject[]
  const [frameToggle, setFrameToggle] = useState(true)

  useEffect(() => {
    const togglerInterval = setInterval(() => {
      setFrameToggle((toggleState) => !toggleState)
    }, 500)

    return () => { clearInterval(togglerInterval) }
  }, [])

  return (
    <Container>
      {projects?.map(project => (
        <Project key={project.sys.id} frameStep={frameToggle} animationFrames={project.fields.animations}>
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