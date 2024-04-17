import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {lessonsDatabase1} from "@databases/database1";

import {
  // createBrowserRouter,
  createHashRouter,
  RouterProvider,
  useLoaderData,
  useParams
} from "react-router-dom";

function Root() {
  return (
    <>
      <h2>
        tacos
      </h2>
    </>
  )
}

// const router = createBrowserRouter([
const router = createHashRouter([
  {
    path: "/",
    element: <Root />
  },

  // {
  //   path: "lesson/:lessonId",
  //   element: <Lesson />,
  // },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*
      <App />
      */}
      <RouterProvider router={router} />
  </React.StrictMode>,
)
