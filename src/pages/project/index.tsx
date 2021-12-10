import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProject, loadProject } from '../../api';

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
    <div>
      <h1>{project?.data.titulo_do_projeto[0].text}</h1>
    </div>
  )
}

export default Project;