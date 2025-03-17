import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthPage from "./pages/AuthPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/MainPage.js";
const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthPage/>,
    },

    {
        path: "/home",
        element: <HomePage/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

