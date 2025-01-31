import { FaFigma, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa';
import { Wrapper } from '../stlyes/wrappers/Skills';
import { TbBrandTypescript } from 'react-icons/tb';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiExpress, SiJest, SiMongodb, SiRedux, SiSwagger } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';

const Skills = () => {
  return (
    <Wrapper>
      <h1>Skills</h1>
      <div className='skills'>
        <div className='skill-item front-end'>
          <h2>Front-End</h2>
          <div className='icons'>
            <FaReact className='icon' />
            <TbBrandTypescript className='icon' />
            <RiJavascriptFill className='icon' />
            <SiRedux className='icon' />
            <SiJest className='icon' />
          </div>
        </div>
        <div className='skill-item backend'>
          <h2>Back-end</h2>
          <div className='icons'>
            <FaNodeJs className='icon' />
            <SiMongodb className='icon' />
            <DiMysql className='icon' />
            <SiExpress className='icon' />
          </div>
        </div>
        <div className='skill-item others'>
          <h2>Others</h2>
          <div className='icons'>
            <FaFigma className='icon' />
            <FaGithub className='icon' />
            <SiSwagger className='icon' />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
