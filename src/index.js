import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthPage from "./pages/AuthPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/MainPage.js";
import LoginPage from "./pages/LoginPage";
import StatisticsPage from "./pages/StatisticsPage";
import UserPage from "./pages/UserPage";
import { CookiesProvider } from "react-cookie";
import Admin from "./pages/Admin";
import IntroPage from "./pages/IntroPage";

const router = createBrowserRouter([
    { path: "/", element: <IntroPage /> },
    { path: "/home", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/statistics", element: <StatisticsPage /> },
    { path: "/account", element: <UserPage /> },
    { path: "/admin", element: <Admin /> },
    { path: "/register", element: <AuthPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CookiesProvider>
            <RouterProvider router={router} />
        </CookiesProvider>
    </React.StrictMode>
);
