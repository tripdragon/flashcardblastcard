'use strict';

// import React from "react";
const createRoot = require('react-dom/client');

// import {quizParts} from '../parts/quizpart.mjs';
// const quizParts = require('../parts/quizparts.js')


module.exports = {
    method: 'GET',
    path: '/',
    options: {
        handler: async (request, h) => {
          // return "sf,mdlfm!!";
          return 'smlfdkfdg'
          // return thedogandponytshow("neato");
          // return quizParts();
          
          
          
          // const root = createRoot(document.getElementById('app'));
          // return root.render(<h1>Hello, world</h1>);
          
          // root.render(<h1>Hello, world</h1>);
          // return (
          //   <div>
          //   <button>A</button>
          //   <button>B</button>
          //   <button>C</button>
          //   </div>
          // );
        }
    }
};




function thedogandponytshow(wow) {
  return `<h2>${wow}</h2>`;
}
