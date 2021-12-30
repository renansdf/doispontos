import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IProject, loadProject } from '../../api';
import Header from '../../components/Header';

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
  }, [load]);

  return (
    <>
      <Header />
      <Container itemsAmount={project?.data.imagens.length || 0}>
        <Title position={1}>{project?.data.titulo_do_projeto[0].text}</Title>
        {project && project.data.imagens.map((obj, index) => (
          <Image 
            key={obj.imagem.url} 
            src={obj.imagem.url} 
            alt={obj.imagem.url} 
            position={index+2}
          />
        ))}
      </Container>
    </>
  )
}

export default Project;