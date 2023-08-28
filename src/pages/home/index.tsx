import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

import { type IProject } from '../../utils/Api'
import { Container, Project, LinkText } from './styles'

const Home: React.FC = () => {
  const loadedProjects = useLoaderData() as IProject[]
  const [projects, setProjects] = useState<IProject[]>([] as IProject[])
  const [frameToggle, setFrameToggle] = useState(true)
  const [currentInterval, setCurrentInterval] = useState<NodeJS.Timeout>()

  useEffect(() => {
    const projectsList: IProject[] = []
    loadedProjects.forEach((project) => {
      if(project.fields.coverFrames != null) projectsList.push(project)
    })
    setProjects(projectsList)
  }, [])

  const handleStartAnimation = (): void => {
    setFrameToggle((toggleState) => !toggleState)
    const togglerInterval = setInterval(() => {
      setFrameToggle((toggleState) => !toggleState)
    }, 500)
    setCurrentInterval(togglerInterval)
  }

  const handleStopAnimation = (): void => {
    clearInterval(currentInterval)
  }
  
  return (
    <Container>
      {projects?.map(project => (
        <Project key={project.sys.id} frameStep={frameToggle} animationFrames={project.fields.coverFrames}>
          <Link to={`/projeto/${project.sys.id}`}>
            <LinkText onMouseEnter={handleStartAnimation} onMouseLeave={handleStopAnimation} hexColor={project.fields.color.value}>
              {project.fields.title}
            </LinkText>
          </Link>
        </Project>
      ))}
    </Container>
  );
}

export default Home;