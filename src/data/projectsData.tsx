// import { FaReact } from 'react-icons/fa';
// import { TbBrandTypescript } from 'react-icons/tb';
// import { RiJavascriptFill } from 'react-icons/ri';
// import { SiRedux, SiJest } from 'react-icons/si';
import { Project } from '../types/types';
// <TbBrandTypescript />,
// <RiJavascriptFill />,
// <SiRedux />,
// <SiJest />,

import one from '../assets/uno.jpg';
import dos from '../assets/dos.jpg';
import tres from '../assets/tres.jpg';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Vegan Felino',
    description: {
      title: 'Vegan Felino',
      date: 'Nov - 2024',
      details:
        'Este proyecto es un front-end para una tienda en línea especializada en productos veganos, diseñado para proporcionar a los usuarios una experiencia de navegación fluida, moderna y accesible.',
    },
    tecnologies: [
      { id: 2, name: 'TypeScript' },
      { id: 3, name: 'JavaScript' },
      { id: 4, name: 'Redux' },
      { id: 5, name: 'Jest' },
    ],
    images: [one, dos, tres],
    design: { hasPallet: true, colors: ['ffe785-bg', '333333-color', 'f96900-secondary', '1c7c54-cta'] },
    characteristics: ['Responsivo', 'Interactivo', 'Escalable'],
  },
];
