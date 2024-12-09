import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/> ,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
