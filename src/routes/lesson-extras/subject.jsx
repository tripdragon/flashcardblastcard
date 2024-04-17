
// need to fix this path
import {shuffle, randomInt} from '@utilites';

// export function Multichoice() {
//   return (
//     <div className="quizblock">
//     <button>A</button>
//     <button>B</button>
//     <button>C</button>
//     </div>
//   );
// }


// export function Subject({record, showAnswer=false}={}) {
export function Subject({word, showAnswer=false, answer}={}) {
  // let item = <img className="main-image" src={record.img} />;
  // if (record.displayType === "text") {
  //   // item = <h2 className="feature-word">{record.word}</h2>
  // }
  const item = <h2 className="feature-word">{word}</h2>


  return (
    <div className="subjectblock">
      <div className="item">{item}</div>
      {showAnswer && <h2 className="title-answer">{answer}</h2>}
    </div>
  );
}
