import { Suspense, lazy, Component } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/layouts/Components/SuspenseLoader';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Dashboards
const SchoolList = Loader(lazy(() => import('src/components/SchoolList/SchoolList')));



const AuthenticationRoute = [
  {
    path: '/',
    element: <Navigate to="schoolList" replace />
  },
 
  {
    path: 'schoolList',
    element: <SchoolList />
  },

];

export default AuthenticationRoute;
