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
const Login = Loader(lazy(()=> import('src/components/Login/Login')))
const UserMessage = Loader(lazy(()=> import('src/components/Common/UserMessage')))

const AddEnquiry = Loader(lazy(()=> import('src/components/Enquiry/AddEnquiry')))

const AuthenticationRoute = [
  {
    path: '/',
    element: <Navigate to="Login" replace />
  },
 
  {
    path: 'Login',
    element: <Login/>
  },
 
  {
    path: 'AddEnquiry',
    element: <AddEnquiry/>
  },
 
  {
    path: 'UserMessage/:Id',
    element: <UserMessage/>
  },

];

export default AuthenticationRoute;
