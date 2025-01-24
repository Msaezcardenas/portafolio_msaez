import { Wrapper } from '../stlyes/wrappers/Navbar';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import icon from '../assets/icons8-m-quill-96.png';
import iconLight from '../assets/ligth.png';

const Navbar = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { isDarkTheme, toggleTheme } = themeContext;

  return (
    <Wrapper>
      <Link to='/'>
        <img src={!isDarkTheme ? icon : iconLight} />
      </Link>
      <ul>
        <li>
          <Link to='/'>Experience</Link>
        </li>
        <li>
          <Link to='/projects'>Proyectos</Link>
        </li>
      </ul>

      <button className='btn' onClick={toggleTheme}>
        {isDarkTheme ? <FaSun /> : <FaMoon />}
      </button>
    </Wrapper>
  );
};

export default Navbar;
