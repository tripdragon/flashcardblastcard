
// need to fix this path
import {shuffle, randomInt} from '../utilites.js';

// export function Multichoice() {
//   return (
//     <div className="quizblock">
//     <button>A</button>
//     <button>B</button>
//     <button>C</button>
//     </div>
//   );
// }


export function Subject({record}) {
  let item = <img className="main-image" src={record.img} />;
  if (record.displayType === "text") {
    item = <h2 className="feature-word">{record.word}</h2>
  }


  return (
    <div className="subjectblock">
      {item}
    </div>
  );
}
