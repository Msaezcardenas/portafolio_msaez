import { Wrapper } from '../stlyes/wrappers/Design';

interface DesignProps {
  design: { hasPallet: boolean; colors: string[] };
}

const Design: React.FC<DesignProps> = ({ design }) => {
  const { hasPallet, colors } = design;

  return hasPallet ? (
    <Wrapper>
      <div className='colors'>
        {colors.map((color) => {
          return <div key={color} className={`item-color ${color}`}></div>;
        })}
      </div>
    </Wrapper>
  ) : (
    ''
  );
};

export default Design;
