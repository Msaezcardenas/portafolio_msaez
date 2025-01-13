import { Wrapper } from '../wrappers/CardProject';
import TecnologiesProject from './TecnologiesProject';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Project } from '../types/types';

interface CardProjectProps {
  project: Project;
}

const CardProject: React.FC<CardProjectProps> = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`, { state: { project } });
  };
  console.log(project);

  return (
    <Wrapper>
      <div className='card' onClick={handleClick}>
        <div className='img-container'>
          <img src={project.images[0]} />
          <div className='link-icon'>
            <FaExternalLinkAlt />
          </div>
        </div>
        <div className='description'>
          <h3>{project.title}</h3>
          <TecnologiesProject tecnologies={project.tecnologies} />
        </div>
      </div>
    </Wrapper>
  );
};

export default CardProject;
