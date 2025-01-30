import { FaReact } from 'react-icons/fa';
import { TbBrandTypescript } from 'react-icons/tb';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiJest, SiRedux } from 'react-icons/si';
import { FaLink } from 'react-icons/fa6';
import { Wrapper } from '../stlyes/wrappers/Tecnologies';

interface TecnologiesProjectProps {
  tecnologies: { id: number; name: string }[];
  linkVisible: boolean;
  link: string;
}

const TecnologiesProject: React.FC<TecnologiesProjectProps> = ({ tecnologies, linkVisible, link }) => {
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
        {linkVisible ? (
          <a href={link} target='_blank' rel='noopener noreferrer' className='link-project'>
            <FaLink /> Visitar
          </a>
        ) : (
          ''
        )}
      </div>
    </Wrapper>
  );
};

export default TecnologiesProject;
