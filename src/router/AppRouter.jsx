import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from 'pages/Home.jsx';
import { CarCatalog } from 'pages/CarCatalog.jsx';
import { CarDetail } from 'pages/CarDetail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/catalog',
    element: <CarCatalog />,
  },
  {
    path: '/catalog/:id',
    element: <CarDetail />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
