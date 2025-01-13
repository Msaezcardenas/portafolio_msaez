import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import icon from './assets/icons8-m-quill-96.png';
import ProjectsSection from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar icon={icon} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<ProjectsSection />} />
        <Route path='/projects/:id' element={<ProjectDetail />} /> {/* Ruta dinámica */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
