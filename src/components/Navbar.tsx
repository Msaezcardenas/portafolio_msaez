import { Wrapper } from '../wrappers/Navbar';
import icon from '../assets/icons8-m-quill-96.png';
import { Link } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';

const Navbar = () => {
  return (
    <Wrapper>
      <Link to='/'>
        <img src={icon} />
      </Link>
      <ul>
        <li>
          <Link to='/Experience'>Experience</Link>
        </li>
        <li>
          <Link to='/projects'>Proyectos</Link>
        </li>
        <li>
          <Link to='/contact'>Contacto</Link>
        </li>
      </ul>

      <FaMoon />
    </Wrapper>
  );
};

export default Navbar;
