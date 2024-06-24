import Login from './routes/Login'
import Dashboard from './routes/Dashboard';
import Gis from './routes/Gis';
import Gif from './routes/Gif';
import { NameLogin } from './context/NameContext' 
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import NavLayout from './layout/NavLayout'



const router = createBrowserRouter([
  
  { 
    path: '/',
    element: 
    <NameLogin> 
      <Login/>,
    </NameLogin>
  },
  {
    path: '/dashboard',
    element: 
    <NameLogin>
      <Dashboard />,
    </NameLogin>
    },
  {
    path: '/',
    element:
    <NavLayout />,
    
    children: [
      {
        path: '/gis',
        element: 
        <NameLogin>
          <Gis />,
        </NameLogin>
        },
      {
        path: '/gif',
        element: 
        <NameLogin>
          <Gif />,
        </NameLogin>
        },

      ]
  }
 ]);
 export default function App() {
  return <RouterProvider router={router} />;
 }
