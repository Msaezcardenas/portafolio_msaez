import { Wrapper } from '../stlyes/wrappers/Intro';
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import avatar from '../assets/avatar.jpg';
import ImageWithSkeleton from '../components/imageWithSkeleton';

const Intro = () => {
  return (
    <Wrapper>
      <div className='intro'>
        <div className='social-and-avatar'>
          <div className='social-links'>
            <a href='https://github.com/Msaezcardenas' target='_blank'>
              <FaGithub className='icon' />
            </a>
            <a href='https://www.linkedin.com/in/msaezcardenas/' target='_blank'>
              <FaLinkedin className='icon' />
            </a>
            <a href='/pdf/cv.pdf' target='_blank'>
              <FaFileDownload className='icon' />
            </a>
          </div>
          <div className='avatar-container'>
            <ImageWithSkeleton src={avatar} alt='avatar' className='avatar' height='100%' />
          </div>
        </div>

        <div className='about'>
          <h1 className='role'>Hola! Soy Molu</h1>
          <h3> Full-Stack Developer</h3>
          <p>
            Soy Molu!, una apasionada desarrolladora full-stack con experiencia en la creación de aplicaciones dinámicas y escalables. Siempre estoy
            buscando aprender nuevas herramientas y afrontar desafíos. ¡Conéctate conmigo para crear algo increíble!
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Intro;
