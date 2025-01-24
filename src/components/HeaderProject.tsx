import { CiCalendar } from 'react-icons/ci';
import { Wrapper } from '../stlyes/wrappers/HeaderProject';

interface HeaderProjectProps {
  description: {
    title: string;
    date: string;
    details: string;
  };
}

const HeaderProject: React.FC<HeaderProjectProps> = ({ description }) => {
  const { title, date, details } = description;

  return (
    <Wrapper>
      <div className='title'>
        <h1> {title} </h1>
        <div className='date'>
          <CiCalendar />
          {date}
        </div>
      </div>
      <p>{details}</p>
    </Wrapper>
  );
};

export default HeaderProject;
