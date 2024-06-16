import Login from './routes/Login'
import Dashboard from './routes/Dashboard';
import Gis from './routes/Gis';
import Gif from './routes/Gif';
import { NameLogin } from './context/NameContext' 
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  { 
    path: '/',
    element: 
    <NameLogin> 
      <Login />,
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
 ]);
 export default function App() {
  return <RouterProvider router={router} />;
 }
