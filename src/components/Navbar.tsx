import { Wrapper } from '../stlyes/wrappers/Navbar';
import { Link } from 'react-router-dom';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import icon from '../assets/icons8-m-quill-96.png';
import iconLight from '../assets/ligth.png';

const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!themeContext) return null;

  const { isDarkTheme, toggleTheme } = themeContext;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Wrapper>
      {/* Navbar principal */}
      <div className='navbar'>
        <div className='nav-content'>
          <button className='menu-btn' onClick={toggleSidebar}>
            <FaBars />
          </button>
          <Link to='/' className='logo'>
            <img src={!isDarkTheme ? icon : iconLight} alt='Logo' />
          </Link>
          <ul className='nav-links'>
            <li>
              <Link to='/'>Experiencia</Link>
            </li>
            <li>
              <Link to='/projects'>Proyectos</Link>
            </li>
          </ul>
          <button className='theme-btn' onClick={toggleTheme}>
            {isDarkTheme ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`overlay ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className='close-btn' onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <ul>
          <li>
            <Link to='/' onClick={toggleSidebar}>
              Experience
            </Link>
          </li>
          <li>
            <Link to='/projects' onClick={toggleSidebar}>
              Proyectos
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Navbar;
