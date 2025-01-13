import CardProject from '../components/CardProject';
import { Wrapper } from '../wrappers/ProjectSection';
import { projects } from '../data/projectsData';

const Projects = () => {
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
