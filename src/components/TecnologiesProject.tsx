import { FaReact } from 'react-icons/fa';
import { TbBrandTypescript } from 'react-icons/tb';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiJest, SiRedux } from 'react-icons/si';
import { Wrapper } from '../stlyes/wrappers/Tecnologies';

interface TecnologiesProjectProps {
  tecnologies: { id: number; name: string }[];
}

const TecnologiesProject: React.FC<TecnologiesProjectProps> = ({ tecnologies }) => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'React':
        return <FaReact className='icon' />;
      case 'TypeScript':
        return <TbBrandTypescript className='icon' />;
      case 'JavaScript':
        return <RiJavascriptFill className='icon' />;
      case 'Redux':
        return <SiRedux className='icon' />;
      case 'Jest':
        return <SiJest className='icon' />;
      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <div className='tecnologies'>
        <div className='icons'>
          {tecnologies.map((tech) => (
            <div key={tech.id}>{renderIcon(tech.name)}</div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default TecnologiesProject;
