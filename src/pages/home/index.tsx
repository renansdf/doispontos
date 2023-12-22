import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

import { useInterface } from '../../utils/InterfaceHook'
import { type IProject } from '../../utils/Api'
import { Container, LinkText } from './styles'
import Footer from '../../components/Footer'
import Project from '../../components/Home/Project'

const Home: React.FC = () => {
  const loadedProjects = useLoaderData() as IProject[]
  const [projects, setProjects] = useState<IProject[]>([] as IProject[])

  useEffect(() => {
    const projectsList: IProject[] = []
    loadedProjects.forEach((project) => {
      if(project.fields.coverFrames != null) projectsList.push(project)
    })
    setProjects(projectsList)
  }, [loadedProjects])

  const { switchHeaderState, hideFooter, showFooter } = useInterface()

  useEffect(() => {
    switchHeaderState({ menuColor: '', showBackground: true })
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
          animationFrames={{
            desktop: project.fields.coverFrames, 
            mobile: project.fields?.capaAnimadaMobile ?? undefined
          }}>
          <Link to={`/projeto/${project.fields.slug}`}>
            <LinkText hexColor={project.fields.color.value} >
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