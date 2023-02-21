import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IProject, loadProject } from '../../api';

import { Container, Title, Image } from './styles';

const Project: React.FC = () => {
  const params = useParams();
  const [project, setProject] = useState<IProject>();

  const load = useCallback(async () => {
    if(params.projectid){
      const loadedProject = await loadProject(params.projectid)
      setProject(loadedProject)
    }
  },[params.projectid])

  useEffect(() => {
    load()
  }, []);

  return (
    <Container itemsAmount={project?.fields.animations.length || 0}>
      <Title position={1}>{project?.fields.title}</Title>
      {project && project.fields.animations.map((obj, index) => (
        <Image 
          key={obj.fields.file.url} 
          src={obj.fields.file.url} 
          alt={obj.fields.file.url} 
          position={index+2}
        />
      ))}
    </Container>
  )
}

export default Project;