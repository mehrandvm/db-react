import { ReactNode } from 'react';
import Home from '../components/home/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Createuser from '../components/createuser';
import ViewUser from '../components/viewuser';

type Entity = {
  title: string;
  path: string;
  element: ReactNode;
  icon: ReactNode;
};

export const panelEntities: Array<Entity> = [
  {
    title: 'dashboard',
    path: '/',
    element: <Home />,
    icon: <DashboardIcon />,
  },
  {
    title: 'create user',
    path: '/createuser',
    element: <Createuser />,
    icon: <DashboardIcon />,
  },
  {
    title: 'view users',
    path: '/viewuser',
    element: <ViewUser />,
    icon: <DashboardIcon />,
  },
];
