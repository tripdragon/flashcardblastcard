import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from "./routes/root";

import Lesson from "./routes/lesson";

// import {database1} from "@databases/database1";
import {lessonsDatabase1} from "@databases/database1";



import {
  // createBrowserRouter,
  createHashRouter,
  RouterProvider,
  useLoaderData,
  useParams
} from "react-router-dom";
// 
// const database = {
//   // "japanese" : {
//   //   "hiragana" : [
//   //     {"hi":"ひ"}
//   //   ]
//   // },
//   "japanese": {
//     "hiragana": [ {"a": "あ"}, {"i": "い"}, {"u": "う"}, {"e": "え"}, {"o": "お"}, {"ka": "か"}, {"ki": "き"}, {"ku": "く"}, {"ke": "け"}, {"ko": "こ"}, {"sa": "さ"}, {"shi": "し"}, {"su": "す"}, {"se": "せ"}, {"so": "そ"}, {"ta": "た"}, {"chi": "ち"}, {"tsu": "つ"}, {"te": "て"}, {"to": "と"}, {"na": "な"}, {"ni": "に"}, {"nu": "ぬ"}, {"ne": "ね"}, {"no": "の"}, {"ha": "は"}, {"hi": "ひ"}, {"fu": "ふ"}, {"he": "へ"}, {"ho": "ほ"}, {"ma": "ま"}, {"mi": "み"}, {"mu": "む"}, {"me": "め"}, {"mo": "も"}, {"ya": "や"}, {"yu": "ゆ"}, {"yo": "よ"}, {"ra": "ら"}, {"ri": "り"}, {"ru": "る"}, {"re": "れ"}, {"ro": "ろ"}, {"wa": "わ"}, {"wo": "を"}, {"n": "ん"} ]
//   },
//   "german": {
//     "numbers":[
//       {"0":"null"},
//       {"1":"eins"},
//       {"2":"zwei"},
//       {"3":"drei"},
//       {"4":"vier"},
//       {"5":"fünf"},
//       {"6":"sechs"},
//       {"7":"sieben"},
//       {"8":"acht"},
//       {"9":"neun"},
//       {"10": "zehn"}
//     ]
//   }
// }

// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";
// 
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     loader: rootLoader,
//     children: [
//       {
//         path: "team",
//         element: <Team />,
//         loader: teamLoader,
//       },
//     ],
//   },
// ]);

// const routerTacos = createBrowserRouter([
//   {
//     path: "/tacos",
//     element: <div>Hello tacos!</div>,
//   },
// ]);
// 
// 
// const router = createBrowserRouter([
//   {
//     path: "/",
//     // element: <div>NAW Farf</div>,
//     element: <Stuff1 />,
//   },
// ]);



// const router = createBrowserRouter([
const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
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
  //   element: <Lesson />,
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



function Stuff1() {
  return (
    <>
      <h2>
        stuffff1
      </h2>
    </>
  )
}


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
