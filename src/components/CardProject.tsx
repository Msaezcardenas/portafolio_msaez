import { Wrapper } from '../stlyes/wrappers/CardProject';
import TecnologiesProject from './TecnologiesProject';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Project } from '../types/types';
import ImageWithSkeleton from './imageWithSkeleton';

interface CardProjectProps {
  project: Project;
}

const CardProject: React.FC<CardProjectProps> = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`, { state: { project } });
  };

  return (
    <Wrapper>
      <div className='card' onClick={handleClick}>
        <div className='img-container'>
          <ImageWithSkeleton src={project.images[0]} alt='project' height={'auto'} />
          <div className='link-icon'>
            <FaExternalLinkAlt />
          </div>
        </div>
        <div className='description'>
          <h3>{project.title}</h3>
          <TecnologiesProject tecnologies={project.tecnologies} linkVisible={false} link={project.link} />
        </div>
      </div>
    </Wrapper>
  );
};

export default CardProject;
