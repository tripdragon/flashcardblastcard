
export const shuffle = (yy) => { 
    return yy.sort(() => Math.random() - 0.5); 
};


export function randomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


// for (var i = 0; i < 100; i++) {
//   console.log(randomInt(0,2));
// }
