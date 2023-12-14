import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

import { useInterface } from '../../utils/InterfaceHook'
import { type IProject } from '../../utils/Api'
import { Container, Project, LinkText } from './styles'
import Footer from '../../components/Footer'

const Home: React.FC = () => {
  const loadedProjects = useLoaderData() as IProject[]
  const [projects, setProjects] = useState<IProject[]>([] as IProject[])
  const [frameToggle, setFrameToggle] = useState(false)

  useEffect(() => {
    const projectsList: IProject[] = []
    loadedProjects.forEach((project) => {
      if(project.fields.coverFrames != null) projectsList.push(project)
    })
    setProjects(projectsList)
  }, [loadedProjects])

  const { switchHeaderState, hideFooter, showFooter } = useInterface()

  useEffect(() => {
    switchHeaderState({ menuColor: '', showBackground: false })
    hideFooter()

    return () => {
      showFooter()
    }
  }, [])

  return (
    <Container>
      {projects?.map(project => (
        <Project 
          key={project.sys.id} 
          frameStep={frameToggle} 
          animationFrames={{
            desktop: project.fields.coverFrames, 
            mobile: project.fields?.capaAnimadaMobile ?? undefined
          }}>
          <Link to={`/projeto/${project.fields.slug}`}>
            <LinkText 
              onTouchStart={() => {setFrameToggle(!frameToggle)}}
              onTouchEnd={() => {setFrameToggle(!frameToggle)}}
              onMouseEnter={() => {setFrameToggle(!frameToggle)}} 
              onMouseLeave={() => {setFrameToggle(!frameToggle)}} 
              hexColor={project.fields.color.value}
            >
              {project.fields.title}
            </LinkText>
          </Link>
        </Project>
      ))}
      <Footer />
    </Container>
  );
}

export default Home;