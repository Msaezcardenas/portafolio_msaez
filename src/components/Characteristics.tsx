import { Wrapper } from '../wrappers/Characteristics';

interface CharacteristicsProps {
  characteristics: {
    categoryTitle: string;
    items: string[];
  }[];
}

const Characteristics: React.FC<CharacteristicsProps> = ({ characteristics }) => {
  return (
    <Wrapper>
      {characteristics.map((category, index) => (
        <div className='item' key={index}>
          <h2>{category.categoryTitle}</h2>
          <ul>
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </Wrapper>
  );
};

export default Characteristics;
