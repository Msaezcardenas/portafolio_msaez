export interface Project {
  id: number;
  title: string;
  link: string;
  description: { title: string; date: string; details: string };
  tecnologies: { id: string; name: string }[];
  images: string[];
  design: { hasPallet: boolean; colors: string[] };
  characteristics: { categoryTitle: string; items: string[] }[];
}
