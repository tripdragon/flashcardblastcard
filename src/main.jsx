import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// import { Link } from "react-router-dom";

import '@styles/reset.scss'
import '@styles/base.scss'

import '@styles/app.scss'

import Root from "@routes/root";
import Posts from "@routes/posts";

import Lesson from "@routes/lesson";

// import {database1} from "@databases/database1";
import {lessonsDatabase1} from "@databases/database1";

import {
  // createBrowserRouter,
  createHashRouter,
  RouterProvider,
  useLoaderData,
  useParams
} from "react-router-dom";

// github pages does not like fancy routes
// const router = createBrowserRouter([
const router = createHashRouter([
  {
    // path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Posts />,
      },
      {
        // path: "lesson/:lessonId/:category",
        path: "lesson/:lessonId",
        element: <Lesson database={lessonsDatabase1} />,
      },
    ]
  },
  
  {
    path: "/tacos",
    element: <Tacos1 />,
  },

  // {
  //   path: "lesson/:lessonId",
  //   element: <Lesson database={lessonsDatabase1} />,
  // },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*
      <App />
      */}

      
      <RouterProvider router={router} />
  </React.StrictMode>
)



function Tacos1() {
  return (
    <>
      <h2>
        tacos
      </h2>
    </>
  )
}



// 
// function Lesson({database}) {
//   // const { lesson } = useLoaderData();
//   // const aa = useLoaderData();
//   // const { lessonId } = useParams();
//   const params = useParams();
// 
//   // debugger
//   return (
//     <>
//       <h2>
//         Lesson: {params.lessonId || "X"}
//       </h2>
//       <ul>
//         {
//           Object.values(database[params.lessonId][params.category]).map((item, index) =>
//             <li key={index}>
//               {Object.entries(item).map(([key, value]) => (
//                 <div key={key}>
//                   {key}: {value}
//                 </div>
//               ))}
//             </li>
//           )
//         }
//       </ul>
// 
//     </>
//   )
// }
