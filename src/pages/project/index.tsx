import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

import { type IProject, loadProject } from '../../utils/Api';

import { Container, ProjectCotent, Cover, CoverAnimation, Title, Image } from './styles';

const Project: React.FC = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [project, setProject] = useState<IProject>()
  const [frameToggle, setFrameToggle] = useState(true)

  const load = useCallback(async () => {
    if(params.projectid != null){
      const loadedProject = await loadProject(params.projectid)
      setProject(loadedProject)
    }
  },[params.projectid])

  useEffect(() => {
    load().catch(() => {navigate('/not-found')})
  }, [load]);

  useEffect(() => {
    const toggleBackground = setInterval(() => {
      setFrameToggle((toggleState) => !toggleState)
    }, 500)

    return () => {
      clearInterval(toggleBackground)
    }
  }, []);

  if(project === null || project === undefined) return (<></>)

  return (
    <Container>
      <Cover bgUrl={project.fields.cover.fields.file.url ?? ""}>
        <Title hexColor={project.fields.color.value ?? "#000"}>{project.fields.title}</Title>
      </Cover>
      <ProjectCotent>
        <YouTube videoId={project.fields.mainMovie} />
        <CoverAnimation frames={project.fields.coverFrames} frameToggle={frameToggle} />
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