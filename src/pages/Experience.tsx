import ItemExperience from '../components/ItemExperience';
import { Wrapper } from '../stlyes/wrappers/Experience';

type WorkExperience = {
  role: string;
  timePeriod: string;
  responsibilities: string[];
};

const workExperiences: WorkExperience[] = [
  {
    role: 'Proyecto E-commerce Full-Stack Developer',
    timePeriod: '2024 - present',
    responsibilities: [
      'Diseñé y desarrollé una página e-commerce con una interfaz moderna y funcional, utilizando tecnologías como React, Node.js, y TypeScript.',
      'Implementé un sistema de gestión de productos y configuración de carrito de compras.',
      'Optimicé el rendimiento del sitio y aseguré una experiencia de usuario responsiva y accesible. Aprendí a gestionar proyectos y cumplir con los plazos, enfrentando desafíos relacionados con la comunicación y acuerdos con clientes.',
    ],
  },
  {
    role: 'Full-stack Developer en TOCTOC.com',
    timePeriod: '2019 - 2023',
    responsibilities: [
      'Participé en la migración del landing de corredoras en Toctoc, pasando de React con componentes de clase a React con Redux. Implementé la gestión del estado global con el store, mejorando la organización y mantenibilidad del código.',
      'Optimicé la carga del landing de propiedad en Toctoc implementando lazy loading con useRef, reduciendo el tiempo de carga en 2 segundos y mejorando la experiencia del usuario.',
      'Administré bases de datos relacionales en MySQL, garantizando la integridad y escalabilidad de los datos. Implementé el uso de DTOs (Data Transfer Objects) para optimizar la transferencia de grandes volúmenes de datos, mejorando el rendimiento y reduciendo la carga en el servidor.',
      'Trabajé en conjunto con diseñadores UX/UI para desarrollar e implementar interfaces responsivas y accesibles, asegurando una experiencia de usuario fluida en diferentes dispositivos.',
      'Participé en la planificación de sprints y reuniones ágiles, contribuyendo a la organización del equipo y asegurando entregas dentro de los plazos establecidos.',
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
