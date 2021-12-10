import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IProjects, loadProjects } from '../../api';

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
      {projects && projects.results.map(project => (
        <div key={project.id}>
          <Link to={`/projeto/${project.uid}`}>{project.data.titulo_do_projeto[0].text}</Link>
        </div>
      ))}
    </>
  );
}

export default Home;