// Define el tipo para cada proyecto
export interface Project {
  id: number;
  title: string;
  description: { title: string; date: string; details: string };
  tecnologies: { id: number; name: string }[]; // Array de tecnologías
  images: string[]; // Array de URLs de imágenes
  design: { hasPallet: true; colors: string[] };
  characteristics: string[]; // Características del proyecto
}
