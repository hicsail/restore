import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useNav } from '../context/navigation.context.jsx';
import Layout from '../pages/Layout.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import ResearchAndEvals from '../pages/Research.jsx';
import GetInvolved from '../pages/GetInvolved.jsx';
import Blog from '../pages/Blog.jsx';
import BlogPost from '../pages/BlogPost.jsx';
import { StrapiPage } from '../pages/Strapi-Page.jsx';
import { Patients } from '../pages/treatment-services/patients.jsx';
import { Providers } from '../pages/treatment-services/providers.jsx';
import { HealthSystems } from '../pages/treatment-services/health-systems.jsx';

export const Router = ({ children }) => {
  const { pages } = useNav();

  const router = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'patients',
          element: <Patients />
        },
        {
          path: 'providers',
          element: <Providers />
        },
        {
          path: 'health-systems',
          element: <HealthSystems />
        },
        {
          path: 'research-and-evaluation',
          element: <ResearchAndEvals />
        },
        {
          path: 'get-involved',
          element: <GetInvolved />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'blog/:id/:blogTitle',
          element: <BlogPost />
        },
        {
          path: '*',
          element: <StrapiPage />
        }
      ]
    }
  ];
  return <RouterProvider router={createBrowserRouter(router)}>{children}</RouterProvider>;
};
