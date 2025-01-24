import { Wrapper } from '../stlyes/wrappers/ItemExperience';

type WorkExperience = {
  role: string;
  timePeriod: string;
  responsibilities: string[];
};

type ItemExperienceProps = {
  experience: WorkExperience;
};

const ItemExperience: React.FC<ItemExperienceProps> = ({ experience }) => {
  return (
    <Wrapper>
      <div className='timeline-item'>
        <div className='timeline-point'></div>
        <div className='timeline-content'>
          <h3>{experience.role}</h3>
          <span>{experience.timePeriod}</span>
          <ul>
            {experience.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default ItemExperience;
