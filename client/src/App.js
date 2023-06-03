import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
// import Login from "./pages/home/login/Login";
// import Register from "./pages/home/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Rightbar from "./components/rightbar/Rightbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Topbar from "./components/topbar/Topbar";
import { AuthContext } from "./context/authContext";
import Sidefeed from "./pages/sidefeed/Sidefeed";
import Success from "./pages/success/Success";
import Sideprofile from "./pages/sideprofile/Sideprofile";
import Event from "./pages/event/Event";
import Game from "./pages/game/Game";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Book from "./pages/book/Book";
import Job from "./pages/job/Job";
import Moodone from "./pages/moodone/Moodone";




function App() {
  
  const {currentUser} = useContext(AuthContext);

  const queryClient = new QueryClient()
  
  const Layout = ()=>{
    return(
      
      <QueryClientProvider client={queryClient}>
      
      <div>
        <Topbar/>
        <div style={{ display: "flex" }}>
          <Sidebar/>
          <div style={{ flex:6 }}>
            <Outlet/>
          </div>
          <Rightbar/>
        </div>
      </div>
      </QueryClientProvider>

    )
  }
  
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }

    return children;
  };
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
      ),
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/profile/:id",
          element: <Profile/>,
        },
        {
          path: "/sidefeed",
          element: <Sidefeed/>,
        },
        {
          path: "/success",
          element: <Success/>,
        },
        {
          path: "/sideprofile",
          element: <Sideprofile/>,
        },
        {
          path: "/event",
          element: <Event/>,
        },
        {
          path: "/game",
          element: <Game/>,
        },
        {
          path: "/book",
          element: <Book/>,
        },
        {
          path: "/job",
          element: <Job/>,
        },
        {
          path: "/moodone",
          element: <Moodone/>,
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    // {
    //   path: "/home",
    //   element: <Home/>,
    // },
    

  ]);
  
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
  
  
  // <Register/>
  
  // <Login/>
  
  // <Home/>
   

}

export default App;
