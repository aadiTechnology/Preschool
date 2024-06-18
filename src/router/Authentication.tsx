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
const Login = Loader(lazy(()=> import('src/components/Login/Login')))

const AddEnquiry = Loader(lazy(()=> import('src/components/Enquiry/AddEnquiry')))

const AuthenticationRoute = [
  {
    path: '/',
    element: <Navigate to="AddEnquiry" replace />
  },
 
  {
    path: 'Login',
    element: <Login/>
  },
 
  {
    path: 'AddEnquiry',
    element: <AddEnquiry/>
  },

];

export default AuthenticationRoute;
