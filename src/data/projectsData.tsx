import { Project } from '../types/types';
import one from '../assets/veganfelino_1.png';
import dos from '../assets/vegan-felino-mobile.png';
import tres from '../assets/veganfelino.png';
import cuatro from '../assets/tareas.png';
import cinco from '../assets/figmavg.png';
import backend_1 from '../assets/backend-img-1.png';
import backend_2 from '../assets/backend-img-2.png';
import moodvie from '../assets/moodvie.png';
import moodvie_2 from '../assets/moodvie_2.png';
import portafolio from '../assets/portafolio.png';
import portafolio_2 from '../assets/portafolio_2.png';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Vegan Felino',
    link: 'https://vegan-felino.vercel.app/',
    description: {
      title: 'Vegan Felino',
      date: 'Nov - 2024',
      details:
        'Desarrollé una aplicación web con un enfoque en la experiencia de usuario, utilizando tecnologías modernas como React para una interfaz dinámica y eficiente, Redux para la gestión predecible del estado, y TypeScript para un código robusto y mantenible. La interfaz, diseñada para ser intuitiva y visualmente atractiva, prioriza la usabilidad y el rendimiento, con un diseño responsivo y accesible que funciona perfectamente en cualquier dispositivo.  Las tareas fueron gestionadas con trello y el diseño echo con Figma',
    },
    tecnologies: [
      { id: 'vf-1', name: 'TypeScript' },
      { id: 'vf-2', name: 'React' },
      { id: 'vf-3', name: 'Redux' },
      { id: 'vf-4', name: 'Jest' },
      { id: 'vf-5', name: 'Figma' },
    ],
    images: [one, tres, dos, cuatro, cinco],
    design: { hasPallet: true, colors: ['bg', 'color', 'secondary', 'cta'] },
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
  {
    id: 2,
    title: 'Backend E-commerce',
    link: 'https://backend-ecommerce-production-4fe0.up.railway.app/api-docs/',
    description: {
      title: 'Backend E-commerce',
      date: 'Enero - 2025',
      details:
        'Esta API es parte de un sistema de e-commerce diseñado para gestionar productos, usuarios, pedidos y más. Permite realizar operaciones CRUD, manejar la autenticación de usuarios mediante JWT, gestionar archivos (como imágenes de productos) y ofrecer una experiencia segura y escalable para los usuarios finales.',
    },
    tecnologies: [
      { id: 'back-2', name: 'Node' },
      { id: 'back-3', name: 'Express' },
      { id: 'back-4', name: 'Mongodb' },
      { id: 'back-5', name: 'Swagger' },
      { id: 'back-6', name: 'Mocha' },
    ],
    images: [backend_1, backend_2],
    design: { hasPallet: false, colors: [] },
    characteristics: [
      {
        categoryTitle: 'Patrón de diseño utilizado: MRSC o MVC extendido',
        items: [
          '1.- Modelo (Model): Define los esquemas y la interacción con la base de datos MongoDB mediante Mongoose.',
          '2.- Repositorio (Repository): Abstrae la lógica de acceso a la base de datos. Contiene métodos genéricos como getAll, getById, create, update y delete, implementados en baseRepository.js y extendidos según sea necesario.',
          '3.- Servicio (Service): Contiene la lógica de negocio, siendo el intermediario entre los controladores y los repositorios.',
          '4.- Controlador (Controller): Maneja las solicitudes HTTP y utiliza los servicios para procesar las respuestas.',
        ],
      },
      {
        categoryTitle: 'Ventajas del patrón:',
        items: [
          'Reutilización: Los métodos CRUD básicos están centralizados en el repositorio base.',
          'Separación de responsabilidades: Cada capa tiene una función clara y definida.',
          'Escalabilidad: Es fácil agregar nuevas funcionalidades o modificar las existentes sin afectar otras capas.',
        ],
      },
      {
        categoryTitle: 'Documentación de la API:',
        items: ['La documentación de la API está disponible en formato Swagger. '],
      },
    ],
  },
  {
    id: 3,
    title: 'Primer Portafolio',
    link: 'https://msaezcardenas.github.io/Portafolio-/',
    description: {
      title: 'Primer Portafolio',
      date: 'Nov - 2019',
      details:
        'Quise agregar mi primer portafolio, creado en el año 2019, para mostrar mis inicios en el mundo de la programación y evidenciar la evolución y mejora en mis habilidades a lo largo del tiempo. ',
    },
    tecnologies: [
      { id: 'portafolio-1', name: 'React' },
      { id: 'portafolio-2', name: 'JavaScript' },
      { id: 'portafolio-3', name: 'Css' },
    ],
    images: [portafolio, portafolio_2],
    design: { hasPallet: false, colors: [] },
    characteristics: [
      {
        categoryTitle: 'Características principales:',
        items: [
          'Diseño simple y funcional que refleja mis primeros pasos en el desarrollo web.',
          'Uso de React para la creación de componentes reutilizables y gestión del estado.',
          'Implementación de JavaScript para la interactividad y dinamismo en la interfaz.',
          'Estilos personalizados con CSS para una presentación visual atractiva.',
        ],
      },
      {
        categoryTitle: 'Objetivos del proyecto:',
        items: [
          'Mostrar mis habilidades iniciales en programación y diseño web.',
          'Crear una plataforma para presentar mis proyectos y experiencia.',
          'Aprender y aplicar conceptos básicos de desarrollo frontend.',
        ],
      },
      {
        categoryTitle: 'Lecciones aprendidas:',
        items: [
          'Importancia de la estructuración y organización del código.',
          'Uso de herramientas y tecnologías modernas como React.',
          'Mejora continua en la presentación y usabilidad de los proyectos.',
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'MoodVie',
    link: 'https://msaezcardenas.github.io/Hack-pelicula/',
    description: {
      title: 'MoodVie',
      date: 'Sept - 2019',
      details:
        '"MoodVie" es una plataforma para personas que buscan recomendaciones de películas, cuando no saben que ver. A través de una serie de preguntas te puede mostrar la película que estabas buscando.',
    },
    tecnologies: [
      { id: 'mood-1', name: 'React' },
      { id: 'mood-2', name: 'JavaScript' },
      { id: 'mood-3', name: 'Css' },
    ],
    images: [moodvie, moodvie_2],
    design: { hasPallet: false, colors: [] },
    characteristics: [
      {
        categoryTitle: 'Definición del Usuario',
        items: [
          'El proyecto se desarrolló basado en un análisis detallado de datos, identificando patrones, comportamientos y preferencias comunes entre los usuarios.',
          'Se realizó una investigación de mercado para entender las necesidades y frustraciones de los usuarios al elegir películas.',
          'Se identificaron insights clave, como las plataformas de streaming preferidas (Netflix, Torrent), la frecuencia de consumo de películas y cómo los usuarios se informan antes de ver una película.',
        ],
      },
      {
        categoryTitle: 'Definición del Usuario Promedio',
        items: [
          'Demografía: Edad entre 27 y 32 años, género indistinto.',
          'Intereses y comportamientos: Aficionados al cine, consumen películas en streaming al menos una vez por semana, se informan a través de reseñas, críticas y tráilers antes de ver una película.',
          'Preferencias tecnológicas: Uso frecuente de aplicaciones móviles y plataformas de streaming, con interés en recomendaciones personalizadas.',
        ],
      },
      {
        categoryTitle: 'Creación del User Persona',
        items: [
          'Nombre e imagen: Se asignó un nombre y una imagen representativa para el usuario promedio.',
          'Perfil: Describimos su perfil demográfico, intereses y comportamientos.',
          'Objetivos: Facilitar la elección de películas basada en el estado de ánimo y preferencias del usuario.',
          'Hábitos y preferencias: Prefiere plataformas de streaming, busca recomendaciones personalizadas y valora la facilidad de uso y la precisión en las recomendaciones.',
        ],
      },
      {
        categoryTitle: 'Funcionalidades Clave',
        items: [
          'Sistema de preguntas interactivas para determinar el estado de ánimo y preferencias del usuario.',
          'Algoritmo de recomendación que sugiere películas basadas en las respuestas del usuario.',
          'Interfaz intuitiva y fácil de usar, diseñada para una experiencia de usuario fluida.',
        ],
      },
      {
        categoryTitle: 'Tecnologías Utilizadas',
        items: [
          'React: Para la creación de componentes reutilizables y la gestión del estado de la aplicación.',
          'JavaScript: Para la lógica de la aplicación y la interacción dinámica con el usuario.',
          'CSS: Para el diseño y la estilización de la interfaz, asegurando una experiencia visual atractiva y coherente.',
        ],
      },
      {
        categoryTitle: 'Lecciones Aprendidas',
        items: [
          'Importancia de la investigación de usuario para crear soluciones efectivas y centradas en el usuario.',
          'Valor de una interfaz intuitiva y fácil de usar para mejorar la experiencia del usuario.',
          'Aprendizaje en la implementación de algoritmos de recomendación basados en respuestas interactivas.',
        ],
      },
    ],
  },
];
