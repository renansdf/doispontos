import { createBrowserRouter, redirect } from 'react-router-dom';

import Home from './pages/home';
import Project from './pages/project';
import About from './pages/about';
import NotFound from './pages/notfound';
import Layout from './components/Layout';

import { loadProjects } from './api';

const Router = createBrowserRouter([
    {
        element: <Layout />,
        path: '/',
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
            
        ]
    },
    {
        path: "not-found",
        element: <NotFound />,
    },
    {
        path: "*",
        loader: () => redirect("/not-found")
    }
]);

export default Router