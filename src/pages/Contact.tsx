import { forwardRef } from 'react';

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  return <div ref={ref}>Contact</div>;
});

export default Contact;
