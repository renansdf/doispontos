import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { type IProject, loadProject, navigateToNotFound } from '../../utils/Api';

import { ProjectsContainer, Title, Image } from './styles';

const Project: React.FC = () => {
  const params = useParams();
  const [project, setProject] = useState<IProject>();

  const load = useCallback(async () => {
    if(params.projectid != null){
      const loadedProject = await loadProject(params.projectid)
      setProject(loadedProject)
    }
  },[params.projectid])

  useEffect(() => {
    load().catch(() => navigateToNotFound())
  }, [load]);

  return (
    <ProjectsContainer itemsAmount={2}>
      <Title position={1}>{project?.fields.title}</Title>
      {project?.fields.animations.map((obj, index) => (
        <Image 
          key={obj.fields.file.url} 
          src={obj.fields.file.url} 
          alt={obj.fields.file.url} 
          position={index+2}
        />
      ))}
    </ProjectsContainer>
  )
}

export default Project;