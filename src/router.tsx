import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Projects from './pages/projects';
import Project from './pages/project';
import About from './pages/about';
import NotFound from './pages/notfound';
import Layout from './components/Layout';

import { loadProjects,loadHomeProjects, loadAboutPage } from './utils/Api';

const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: loadHomeProjects,
            },
            {
                path: "/projetos",
                element: <Projects />,
                loader: loadProjects,
            },
            {
                path: "projeto/:slug",
                element: <Project />,
            },
            {
                path: "sobre",
                element: <About />,
                loader: loadAboutPage,
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