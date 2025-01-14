import { Project } from '../types/types';
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
    characteristics: [
      {
        categoryTitle: 'Modelo basado en API RESTful:',
        items: [
          'Los datos del backend son consumidos mediante solicitudes HTTP utilizando Axios.',
          'Las respuestas de la API son procesadas en loaders o hooks personalizados (customFetch) para separar la lógica de datos del componente visual.',
        ],
      },
      {
        categoryTitle: 'Gestión del estado global:',
        items: [
          'UserSlice: Maneja los datos relacionados con la autenticación y la información del usuario, como el perfil o el historial de compras.',
          'Evita errores en tiempo de desarrollo y facilita el mantenimiento del código.',
        ],
      },
      {
        categoryTitle: 'Tipado de datos con TypeScript:',
        items: [
          'Uso de interfaces como ProductsResponse para garantizar la integridad de los datos recibidos desde el backend.',
          'Las respuestas de la API son procesadas en loaders o hooks personalizados (customFetch) para separar la lógica de datos del componente visual.',
        ],
      },
      {
        categoryTitle: 'Diseño centrado en el usuario:',
        items: [
          'Navegación fácil y estructura visual intuitiva gracias a styled-components.',
          'Compatibilidad con dispositivos móviles para una experiencia de compra óptima.',
        ],
      },
    ],
  },
];
