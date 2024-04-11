
import {shuffle, randomInt} from '../utilites.js';
// import {Subject} from './quizParts.js';
import {Subject} from './subject.js';

import {Delayed} from '../delayed.js';

// 
// function buildChoices(count, possibles) {
//   return(
//     {{
//       for (var i = 0; i < array.length; i++) {
//         array[i]
//       }
//     }}
//   )
// }

// single record
export function Question({showAnswer=false, source, answer, name, record, userPick, possibles, choicesCount}={}){
  
  function handleClick(ev) {
    // console.log("click", ev.target.value);
    userPick({data:{value:ev.target.value, original:record}});
  }
  
  // let list = record.choices.slice().map(x => 
  //   <div key={x.id} className="button-item">
  //     <span>{x}</span>
  //     <button onClick={handleClick} value={x}>{x}</button>
  //   </div>
  // );
  
  
  let yy = shuffle(possibles.slice()).slice(0,choicesCount);
  // let yy = possibles.slice(0,choicesCount);
  if(yy.indexOf(answer) === -1){
    yy[0] = answer;
    yy = shuffle(yy);
  }
  console.log("yy", yy);
  
  let index = -1;
  let list = yy.map(x => 
    <div key={index++} className="button-item">
      <button onClick={handleClick} value={x}>{x}</button>
    </div>
  );
  list = shuffle(shuffle(list));
  
  // debugger
  // const answer = record.answer;
  // 
  // 
  // let questionItem = <Subject src={record.img}></Subject>;
  // if(record.displayType === "text"){
  //   questionItem = <h2>{record.word}</h2>;
  // }
  
  return (
    
      <div className="question">
        <h2 className="title">{name}</h2>
        <Subject showAnswer={showAnswer} record={record}></Subject>
        <div className="quizblock">
          {list}
        </div>
      </div>
    
  )
}
