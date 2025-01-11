import { forwardRef } from 'react';

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} id='projects'>
      Projects
    </div>
  );
});

export default Projects;
