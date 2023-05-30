import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/layouts/Components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Dashboards
const Holidays = Loader(lazy(() => import('src/components/Holiday/Holiday')));
const SchoolList = Loader(lazy(() => import('src/components/SchoolList/SchoolList')));


const studentRoutes = [
  {
    path: '/',
    element: <Navigate to="holidays" replace />
  },
  {
    path: 'holidays',
    element: <Holidays />
  },
  {
    path: 'schoolList',
    element: <SchoolList />
  },
];

export default studentRoutes;
