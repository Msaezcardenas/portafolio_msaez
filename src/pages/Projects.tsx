import CardProject from '../components/CardProject';
import { useProjects } from '../hooks/useProjects';
import { Wrapper } from '../stlyes/wrappers/ProjectSection';

const Projects = () => {
  const projects = useProjects();
  return (
    <Wrapper>
      <h3> Estos son algunos de mis trabajos</h3>
      <div className='cards-container'>
        {projects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Projects;
