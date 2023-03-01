import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Project from './pages/project';
import About from './pages/about';
import NotFound from './pages/notfound';
import Layout from './components/Layout';

import { loadProjects } from './api';

const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: loadProjects,
            },
            {
                path: "projeto/:projectid",
                element: <Project />,
            },
            {
                path: "sobre",
                element: <About />,
            }
            
        ],
        errorElement: <NotFound />
    },
    {
        path: "not-found",
        element: <NotFound />,
    }
]);

export default Router