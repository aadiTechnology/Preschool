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
const EnquiryForm = Loader(lazy(()=> import('src/components/AddEnquiryStudentDetails/AddStudentDetails1')))
const StudentDetailsList = Loader(lazy(()=>import('src/components/StudentDetailsList/StudentDetailsList')))
const SchoolNotice =Loader(lazy(()=>import('src/components/SchoolNotice/SchoolNotice'))) 
const ViewSchoolNotice =Loader(lazy(()=>import('src/components/SchoolNotice/ViewSchoolNotice'))) 
const AddSchoolNotice = Loader(lazy(()=>import('src/components/AddSchoolNotice/AddSchoolNotice')))
const AddSchoolNoticeList = Loader(lazy(()=>import('src/components/AddSchoolNotice/AddSchoolNoticeList')))
const AddEnquiry = Loader(lazy(()=> import('src/components/Enquiry/AddEnquiry')))
const StudentDetails = Loader(lazy(()=> import('src/components/Enquiry/StudentDetails')))
const FollowUpList = Loader(lazy(()=> import('src/components/FollowUp/FollowUpList')))
const FollowUpForm = Loader(lazy(()=> import('src/components/FollowUp/FollowUpForm')))
const AdmissionForm = Loader(lazy(()=> import('src/components/Admission/AdmissionForm')))
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
  {
    path:'EnquiryForm',
    element:<EnquiryForm/>
  },
  {
    path:'AdmissionForm/:Id',
    element:<AdmissionForm/>
  },
  {
    path:'StudentDetailsList',
    element:<StudentDetailsList/>
  },
  {
    path:'AddEnquiry/:Id',
    element:<AddEnquiry />
  },
  {
    path: 'FollowUpList',
    element: <FollowUpList />
  },
  {
    path: 'FollowUpForm/:Id',
    element: <FollowUpForm />
  },
  {
    path:'StudentDetails',
    element:<StudentDetails/>
  },
  {
    path:'SchoolNotice',
    element:<SchoolNotice/>
  },
  {
    path:'ViewSchoolNotice',
    element:<ViewSchoolNotice />
  },
  {
    path:'SchoolNotice/ViewSchoolNotice/:Id',
    element:<ViewSchoolNotice />
  },
  {
    path:'AddSchoolNotice',
    element:<AddSchoolNotice/>
  },
  {
    path:'AddSchoolNoticeList',
    element:<AddSchoolNoticeList />
  }
  
];

export default studentRoutes;
