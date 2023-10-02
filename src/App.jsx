import {createBrowserRouter, RouterProvider, Link} from 'react-router-dom'
import Home from './Home';
import About from './About';

import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />
  },
]);

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
