import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from 'pages/Home.jsx';
import { CarDetail } from 'pages/CarDetail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:id',
    element: <CarDetail />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
