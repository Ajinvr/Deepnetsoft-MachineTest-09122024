import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Add from './pages/addMenu/Add';
import AddMenuItem from './pages/addmenuitems/Addmenuitem';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/> ,
  },
  {
    path: "/menu/:id",
    element: <Home/> ,
  },
  {
    path: "/createmenu",
    element: <Add/> ,
  },
  {
    path: "/createmenuitem/:id",
    element: <AddMenuItem/> ,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
