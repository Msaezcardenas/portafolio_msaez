import { Wrapper } from '../wrappers/Design';

interface DesignProps {
  design: { hasPallet: true; colors: string[] };
}

const Design: React.FC<DesignProps> = ({ design }) => {
  const { hasPallet, colors } = design;

  return hasPallet ? (
    <Wrapper>
      <div className='colors'>
        {colors.map((color) => {
          const [firstPart, secondPart] = color.split('-');
          return (
            <div key={color} className={`item-color ${secondPart}`}>
              #{firstPart}
            </div>
          );
        })}
      </div>
    </Wrapper>
  ) : (
    ''
  );
};

export default Design;
