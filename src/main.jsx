import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Error from './components/Error.jsx';
import Contact from './components/Contact.jsx';
import AboutUs from './components/AboutUs.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },

  {
    path: 'contact',
    element: <Contact />,
    
  },

  {
    path: 'aboutUs',
    element: <AboutUs />,
    
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={routes}  />
    </React.StrictMode>
);

