import { useState } from 'react';
import { projects } from '../data/projectsData';
import { Project } from '../types/types';

export const useProjects = () => {
  const [data] = useState<Project[]>(projects);
  return data;
};
