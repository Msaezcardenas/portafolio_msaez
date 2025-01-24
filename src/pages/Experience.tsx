import ItemExperience from '../components/ItemExperience';
import { Wrapper } from '../stlyes/wrappers/Experience';

type WorkExperience = {
  role: string;
  timePeriod: string;
  responsibilities: string[];
};

const workExperiences: WorkExperience[] = [
  {
    role: 'Freelance Full-Stack Developer',
    timePeriod: '2023 - present',
    responsibilities: [
      'Diseñé y desarrollé una página e-commerce con una interfaz moderna y funcional, utilizando tecnologías como React, Node.js, y TypeScript.',
      'Implementé un sistema de gestión de productos y configuración de carrito de compras.',
      'Optimicé el rendimiento del sitio y aseguré una experiencia de usuario responsiva y accesible. Aprendí a gestionar proyectos y cumplir con los plazos, enfrentando desafíos relacionados con la comunicación y acuerdos con clientes.',
    ],
  },
  {
    role: 'Full-stack Developer en TOCTOC.com',
    timePeriod: '2019 - 2003',
    responsibilities: [
      'Participación activa en reuniones diarias, planificación de sprints y retrospectivas, asegurando una gestión eficiente del proyecto y el cumplimiento de los objetivos.',
      'Contribución al desarrollo de aplicaciones web, trabajando tanto en el front-end como en el back-end para implementar funcionalidades clave',
      'Colaboración en sesiones de concepto de diseño, producto y UX, ofreciendo apoyo técnico para la implementación de nuevos requerimientos',
    ],
  },
];

const Experience = () => {
  return (
    <Wrapper>
      <div className='timeline' id='experience'>
        {workExperiences.map((experience, index) => (
          <ItemExperience key={index} experience={experience} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Experience;
