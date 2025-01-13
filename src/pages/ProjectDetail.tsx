import Slider from '../components/Slider';
import { Wrapper } from '../wrappers/Proyects';
import Design from '../components/Design';
import Characteristics from '../components/Characteristics';
import HeaderProject from '../components/HeaderProject';
import TecnologiesProject from '../components/TecnologiesProject';
import { useLocation } from 'react-router-dom';
import { Project } from '../types/types';

const ProjectDetail: React.FC = () => {
  const location = useLocation();
  const { project } = location.state as { project: Project }; // Acceder al project desde el estado
  console.log(project);

  const { description, tecnologies, design } = project;
  if (!project) {
    return <div>No project data found.</div>;
  }
  return (
    <Wrapper>
      <HeaderProject description={description} />
      <TecnologiesProject tecnologies={tecnologies} />
      <Slider />
      <Design design={design} />
      <Characteristics />
    </Wrapper>
  );
};

export default ProjectDetail;
