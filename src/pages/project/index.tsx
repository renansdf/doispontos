import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import Markdown from 'react-markdown'

import { type IProject, loadProject } from '../../utils/Api';
import { useInterface } from '../../utils/InterfaceHook';

import { Container, ProjectCotent, Cover, Title, Description, VideoWrapper, Image } from './styles';

const Project: React.FC = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [project, setProject] = useState<IProject>()

  const load = useCallback(async () => {
    if(params.slug != null){
      setProject(await loadProject(params.slug))
    }
  },[params.projectid])
  
  useEffect(() => {
    load().catch(() => {navigate('/not-found')})
  }, [load]);

  const { switchHeaderState } = useInterface()

  useEffect(() => {
      switchHeaderState({ menuColor: project?.fields.corDoMenu?.value ?? '', showBackground: false })
  }, [project])

  if(project === null || project === undefined) return (<></>)
  
  return (
    <Container>
      <Cover 
        bgUrl={project.fields.cover?.fields.file.url ?? ''} 
        mobileBgUrl={project.fields.coverMobile?.fields.file.url ?? ''} 
      />
      <ProjectCotent>
        <Title>{project.fields.title}</Title>
        <Description>
          <Markdown>{project.fields.projectDescription}</Markdown>
        </Description>
        {project.fields.mainMovie !== undefined && (
          <VideoWrapper>
            <YouTube videoId={project.fields.mainMovie} />
          </VideoWrapper>
        )}
        {project.fields.makingof?.map((asset) => (
          <Image
            key={asset.fields.file.url}
            src={asset.fields.file.url}
            alt={asset.fields.file.fileName}
          />
        ))}
      </ProjectCotent>
    </Container>
  )
}

export default Project;