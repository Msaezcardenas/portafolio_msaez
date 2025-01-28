import { Wrapper } from '../stlyes/wrappers/Design';

interface DesignProps {
  design: { hasPallet: true; colors: string[] };
}

const Design: React.FC<DesignProps> = ({ design }) => {
  const { hasPallet, colors } = design;
  console.log(colors);

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
