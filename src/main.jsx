import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root'
import Home from './components/Home/Home'
import Statistics from './components/Statistics/Statistics'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Blogs from './components/Blogs/Blogs'
import ErrorPage from './components/ErrorPage/ErrorPage'
import JobDetails from './components/JobDetails/JobDetails'




const router = createBrowserRouter([

    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/applied',
                element: <AppliedJobs></AppliedJobs>,
                loader: ()=> fetch('../public/jobs.json')
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/job/:id',
                element: <JobDetails></JobDetails>,
                loader: ()=> fetch('../public/jobs.json')
            }
        ]

    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
)
