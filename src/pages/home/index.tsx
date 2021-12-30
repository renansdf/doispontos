import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IProjects, loadProjects } from '../../api';

import Header from '../../components/Header';

import { Container, Project, LinkText } from './styles';

const Home: React.FC = () => {
  const [projects, setProjects] = useState<IProjects>();

  const load = async ()=>{
    const loadedProjects = await loadProjects();
    setProjects(loadedProjects);
  }

  useEffect(() => {
    load()
  }, []);

  return (
    <>
      <Header />
      <Container>
        {projects && projects.results.map(project => (
          <Project key={project.id} bgUrl={project.data.imagens[0].imagem.url}>
            <Link to={`/projeto/${project.uid}`}>
              <LinkText>
                {project.data.titulo_do_projeto[0].text}
              </LinkText>
            </Link>
          </Project>
        ))}
      </Container>
    </>
  );
}

export default Home;