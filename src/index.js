import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthPage from "./pages/AuthPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/MainPage.js";
import LoginPage from "./pages/LoginPage";
import StatisticsPage from "./pages/StatisticsPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthPage/>,
    },

    {
        path: "/home",
        element: <HomePage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "statistics",
        element: <StatisticsPage/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

