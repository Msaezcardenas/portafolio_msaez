import Slider from '../components/Slider';
import { Wrapper } from '../stlyes/wrappers/Proyects';
import Design from '../components/Design';
import Characteristics from '../components/Characteristics';
import HeaderProject from '../components/HeaderProject';
import TecnologiesProject from '../components/TecnologiesProject';
import { useLocation } from 'react-router-dom';
import { Project } from '../types/types';

const ProjectDetail: React.FC = () => {
  const location = useLocation();
  const { project } = location.state as { project: Project };
  const { description, tecnologies, design, images, characteristics, link } = project;

  if (!project) {
    return <div>No project data found.</div>;
  }
  return (
    <Wrapper>
      <HeaderProject description={description} />
      <TecnologiesProject tecnologies={tecnologies} linkVisible={true} link={link} />
      <Slider images={images} />
      <Design design={design} />
      <Characteristics characteristics={characteristics} />
    </Wrapper>
  );
};

export default ProjectDetail;
