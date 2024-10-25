import React from 'react'
import * as ReactDOM from "react-dom/client";

// Router and Routes
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import ErrorPage from "@/error-page"; // Error Page

import Root from '@/routes/root.tsx'
import Landing from "@/routes/pages/landing.tsx";

// Pages With Nested Routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Landing />
            }
        ]
    }
])

// Render
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
