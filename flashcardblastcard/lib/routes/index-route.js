'use strict';

module.exports = {
    method: 'GET',
    path: '/',
    options: {
        handler: async (request, h) => {
          // return "sf,mdlfm!!";
          return thedogandponytshow("neato");
        }
    }
};




function thedogandponytshow(wow) {
  return `<h2>${wow}</h2>`;
}
