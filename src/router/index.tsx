import { PartialRouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import studentRoutes from './Student';

const router: PartialRouteObject[] = [

  {
    path: '/',
    element: <ExtendedSidebarLayout />,
    children: studentRoutes
  },

  // ExtendedSidebarLayout 

  {
    path: 'extended-sidebar',
    element: (
        <ExtendedSidebarLayout />
    ),
    children: [
      {
        path: '/',
        element: <Navigate to="/Student" replace />
      },
      {
        path: '/Student',
        children: studentRoutes
      }
    ]
  }
];

export default router;
