import Skills from '../components/Skills';
import { Wrapper } from '../wrappers/Home';
import Experience from './Experience';
import Intro from './Intro';

const Home = () => {
  return (
    <Wrapper>
      <Intro />
      <Experience />
      <Skills />
    </Wrapper>
  );
};

export default Home;
