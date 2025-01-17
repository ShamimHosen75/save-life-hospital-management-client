import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Chat from "./components/Msngrchat/Chat";
import AddDoctors from "./components/adddoctors/AddDoctors";
import Details from "./components/details/Details";
import Pharmacy from "./components/Home components/What are u looking fr/Pharmacy";
import { QueryClient, QueryClientProvider } from "react-query";
import Phercheckout from "./components/Pharheckout/Phercheckout";
import Appointment from "./components/appointment/Appointment";
import AddNews from "./components/addnews/AddNews";
import News from "./components/news/News";
import NewsDetails from "./components/newsdetails/NewsDetails";
import EditDoctor from "./pages/EditDoctor/EditDoctor";
import { lazy, Suspense } from "react";
import AddNurse from "./pages/Nurse/AddNurse";
import EditNurse from "./pages/Nurse/EditNurse";
import ShowAllNurse from "./pages/Nurse/ShowAllNurse";
import ShowStaffsByDepartment from "./pages/Staffs/ShowStaffsByDepartment";
import ShowNurseByDepartment from "./pages/Nurse/ShowNurseByDepartment";
import ShowNurseDepartments from "./pages/Nurse/ShowNurseDepartments";
import VideoCall from "./pages/VideoCall/VideoCall";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import useRole from "./hooks/useRole";
import MyAppointment from "./components/appointment/MyAppointment";
import Payment from "./components/appointment/Payment";
import { CheckoutForm } from "./components/appointment/CheckoutForm";
import { NavigationBar } from "./shared/NavigationBar/NavigationBar";
<<<<<<< HEAD
import Notfound from "./Loadandnotf/Notfound";
=======
import AddAmbulance from "./components/addambulance/AddAmbulance";

>>>>>>> anik
const Homepage = lazy(() => import("./pages/Home Page/Homepage"));
const AddDoctor = lazy(() => import("./pages/AddDoctor/AddDoctor"));
const AllDoctors = lazy(() => import("./pages/AllDoctors/AllDoctors"));
const Speciality = lazy(() => import("./pages/Speciality/Speciality"));
const BloodDoner = lazy(() => import("./pages/BloodDoner/BloodDoner"));
const Login = lazy(() => import("./pages/login/Login"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const MakeAdmin = lazy(() => import("./pages/Dashboard/MakeAdmin"));
const BloodDonerList = lazy(() => import("./pages/BloodDonerList/BloodDonerList"));
const BloodBank = lazy(() => import("./pages/BloodBank/BloodBank"));
const ProtectedRoute = lazy(() => import("./pages/ProtectedRoute/ProtectedRoute"));
const SpecialistDoctors = lazy(() => import("./pages/SpecialistDoctors/SpecialistDoctors"));
function App() {
  const [userInfo] = useAuthState(auth);
  const role = useRole(userInfo?.email);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage></Homepage>,
    },
    {
      path: "/adddoctors",
      element: (
        <AddDoctors></AddDoctors>
      ),
    },
   
    {
      path: "/doctor",
      element: <Speciality></Speciality>,
    },

    {
      path: "/doctor/add",
      element: <AddDoctor></AddDoctor>,
    },

    {
      path: "/doctor/edit/:id",
      element: <EditDoctor />,
    },

    {
      path: "/doctors/all",
      element: <AllDoctors></AllDoctors>,
    },

    {
      path: "/doctor/:id",
      element: <Details></Details>,
    },

    {
      path: "/doctor/:id",
      element: <Details></Details>,
    },

    {
      path: "/doctors/:speciality",
      element: <SpecialistDoctors></SpecialistDoctors>,
    },

    {
      path: "/login",
      element: (
        <Login />
      )
    },
    {
      path: "/websitedoctors/:id",
      element: (
        <Details></Details>
      ),
    },
    {
      path: "/news/:id",
      element: (
        <NewsDetails></NewsDetails>
      ),
    },
    {
      path: "/websitedoctors/:id",
      element: (
        <Details></Details>
      ),
    },

    {
      path: "*",
      element: (
        <div>This Route not found</div>
      )
    },
    {
      path: "/pharmacy",
      element: (
        <Pharmacy></Pharmacy>
      )
    },
    {
      path: "/signup",
      element: (<SignUp />),
    },
    // {
    //   path: "/makeAdmin",
    //   element: (
    //     <MakeAdmin />
    //   )
    // },
    // {
    //   path: "/bloodDoner",
    //   element: (
    //     <ProtectedRoute>
    //       <BloodDoner />
    //     </ProtectedRoute>
    //   )
    // },
    {
      path: "/bloodDonerList",
      element: (
        <BloodDonerList />
      )
    },
    {
      path: "/bloodBank",
      element: (
        <BloodBank />
      )
    },
    {
      path: "/websitedoctors/:id",
      element: <Details></Details>,
    },
    
    {
      path: "/addnews",
      element: (
        <AddNews></AddNews>
      )
    },
    {
      path: "/blog",
      element: (
        <News></News>
      )
    },
    {
      path: "/news",
      element: (
        <News></News>
      )
    },
    {
      path: "/medcheckout/:id",
      element: (<Phercheckout></Phercheckout>)
    },
    {
      path: "/videoCall",
      element: (<VideoCall />)
    },
    {
      path: "/medcheckout/:id",
      element: <Phercheckout></Phercheckout>
    },
    {
      path: "/medcheckout/:id",
      element: (<Phercheckout></Phercheckout>)
    },
    {
      path: "/appointment",
      element: (<Appointment></Appointment>)
    },

   
    {
      path: "dashboard",
      element: (<Dashboard />),
      children: [
        {
          path: "makeAdmin",
          element: <MakeAdmin />,
        },
        {
          path: "addnurse",
          element: (<AddNurse/>)
        },
        {
          path: "addambulance",
          element: <AddAmbulance></AddAmbulance>,
        },
        {
          path: "payment/:id",
          element: <Payment></Payment>,
        },
        {
          path: "adddoctor",
          element: <AddDoctor></AddDoctor>,
        },
        {
          path: "myappointments",
          element: <MyAppointment></MyAppointment>,
        },
        {
          path: "bloodDoner",
          element: (
            <ProtectedRoute>
              <BloodDoner />
            </ProtectedRoute>
          ),
        },
        // {
        //   path: "logout",
        //   action: logoutUser,
        // },
      ],
    },

    // {
    //   path: "/medcheckout/:id",
    //   element: <Phercheckout></Phercheckout>
    // },

    {
      path: "/nurse",
      element: (<ShowNurseDepartments />)
    },
    {
      path: "/checkout",
      element: (<Payment></Payment>)
    },
    {
      path: "/nurse/all",
      element: (<ShowAllNurse />)
    },
    {
      path: "/nurse/department/:department",
      element: (<ShowNurseByDepartment />)
    },
<<<<<<< HEAD
    {
      path: "/nurse/add",
      element: (<AddNurse />)
    },
=======
   
>>>>>>> anik
    {
      path: "/nurse/edit/:id",
      element: (<EditNurse />)
    },
    {
      path: "/not",
      element: (<Notfound></Notfound>)
    }

  ]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App bg-white">
        <RouterProvider router={router} />
        {/* <NavigationBar isHome={true} /> */}
        <div className="mb-[150px]">
          <Chat></Chat>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </Suspense>
  );
}

export default App;
