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
const ChangePassword = Loader(lazy(()=> import('src/components/ChangePassword/ChangePassword')))
const AddHomeWork = Loader(lazy(()=> import('src/components/AddHomeWork/AddHomeWork')))
 const ViewPhotoAlbum = Loader(lazy(()=> import('src/components/ViewPhotoAlbum/ViewPhotoAlbum')))
const AddStaff = Loader(lazy(()=> import('src/components/AddStaff/AddStaff')))
const Login = Loader(lazy(()=> import('src/components/Login/Login')))
const Homework = Loader(lazy(()=> import('src/components/Homework/Homework')))
const ViewHomework = Loader(lazy(()=> import('src/components/Homework/ViewHomework')))
const AddPhoto = Loader(lazy(()=> import('src/components/AddPhoto/AddPhoto')))
const Dashboard = Loader(lazy(()=> import('src/components/DashBoard/DashBoard')))
const AddStudentDetails = Loader(lazy(()=> import('src/components/AddStudentDetails/AddStudentDetails')))
const FollowUp = Loader(lazy(()=> import('src/components/FollowUp/FollowUp')))
const AdmissionConversion = Loader(lazy(()=> import('src/components/AdmissionConversion/AdmisssionConversion')))
const studentRoutes = [
  {
    path: '/',
    element: <Navigate to="holidays" replace />
  },
  {
    path: 'Dashboard',
    element: <Dashboard/>
  },

  {
    path: 'schoolList',
    element: <SchoolList />
  },
  {
    path: 'ChangePassword',
    element: <ChangePassword />
  },
  {
    path: 'AddHomeWork',
    element: <AddHomeWork/>
  },
  {
    path: 'ViewPhotoAlbum',
    element: <ViewPhotoAlbum/>
  },
  {
    path: 'AddStaff',
    element: <AddStaff/>
  },
  {
    path: 'Login',
    element: <Login/>
  },
  {
    path:'Homework',
    element:<Homework/>
  },
  {
    path:'Homework/ViewHomework/:Id',
    element:<ViewHomework/>
  },
  {
    path:'AddPhoto',
    element:<AddPhoto/>
  },

  {
    path:'AddStudentDetails',
    element:<AddStudentDetails/>
  },

  {
    path:'AdmissionConversion',
    element:<AdmissionConversion/>
  },

  {
    path:'AdmissionConversion/:Id',
    element:<AdmissionConversion/>
  },
  {
    path:'AddStudentDetails/FollowUp/:Id',
    element:<FollowUp/>
  },

];

export default studentRoutes;
