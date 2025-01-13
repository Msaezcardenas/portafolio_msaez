import { Wrapper } from '../wrappers/Navbar';
import { Link } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';

type NavbarProps = {
  icon: string;
};

const Navbar: React.FC<NavbarProps> = ({ icon }) => {
  return (
    <Wrapper>
      <Link to='/'>
        <img src={icon} />
      </Link>
      <ul>
        <li>
          <Link to='/'>Experience</Link>
        </li>
        <li>
          <Link to='/projects'>Proyectos</Link>
        </li>
      </ul>

      <FaMoon />
    </Wrapper>
  );
};

export default Navbar;
