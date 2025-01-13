import { Wrapper } from '../wrappers/Design';

const colors = ['ffe785-bg', '333333-color', 'f96900-secondary', '1c7c54-cta'];
interface DesignProps {
  design: { hasPallet: true; colors: string[] };
}

const Design: React.FC<DesignProps> = () => {
  return (
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
  );
};

export default Design;
