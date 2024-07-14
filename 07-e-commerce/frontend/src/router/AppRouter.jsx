import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { HomePage, Layout } from '../pages';
import { DashboardPage } from '../pages/admin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'admin',
        children: [
          {
            index: true,
            element: <div>Admin App</div>,
          },
          {
            path: 'profile',
            element: <div>Admin Profile</div>,
          },
          {
            path: 'dashboard',
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <div>Login</div>,
  },
]);

export function AppRouter({ children }) {
  return <RouterProvider router={router}>{children}</RouterProvider>;
}
