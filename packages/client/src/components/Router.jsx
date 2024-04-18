import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useNav } from '../context/navigation.context.jsx';
import Layout from '../pages/Layout.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import TreatmentsServices, { ServicesToOurPatients, ServicesToTheHealthSystem } from '../pages/TreatmentsServices.jsx';
import Team from '../pages/Team.jsx';
import Testimonials from '../pages/Testimonials.jsx';
import ResearchAndEvals from '../pages/Research.jsx';
import GetInvolved from '../pages/GetInvolved.jsx';
import Blog from '../pages/Blog.jsx';
import BlogPost from '../pages/BlogPost.jsx';
import { StrapiPage } from '../pages/Strapi-Page.jsx';

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
          path: 'about-old',
          element: <About />
        },
        {
          path: 'treatments-and-services',
          element: <TreatmentsServices />,
          children: [
            {
              index: true,
              element: <ServicesToTheHealthSystem />
            },
            {
              path: 'services-to-the-health-system',
              element: <ServicesToTheHealthSystem />
            },
            {
              path: 'services-to-our-patients',
              element: <ServicesToOurPatients />
            }
          ]
        },
        {
          path: 'testimonials',
          element: <Testimonials />
        },
        {
          path: 'research-and-evaluation',
          element: <ResearchAndEvals />
        },
        {
          path: 'get-involved-old',
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
