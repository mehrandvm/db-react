import { ReactNode } from 'react';
import Home from '../components/home/Home';

type Entity = { path: string; element: ReactNode };

export const panelEntities: Array<Entity> = [
  { path: '/dashboard', element: <Home /> },
];
