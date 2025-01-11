import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import icon from './assets/icons8-m-quill-96.png';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar icon={icon} />
      <Routes>
        {/* Ruta principal (Home y secciones como Experience, Projects y Contact en una sola página) */}
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
