import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

import ProjectsSection from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import { ThemeProvider } from './context/ThemProvider';
import { GlobalStyle } from './stlyes/GlobalStyle';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<ProjectsSection />} />
          <Route path='/projects/:id' element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
