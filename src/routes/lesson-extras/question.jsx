

import {shuffle, randomInt} from '@utilites';
// import {Subject} from './quizParts.js';
import {Subject} from './subject';

// import {Delayed} from '../delayed.js';

export function Question({showAnswer=false, word, source, answer, name, userPickAction, possibles, choicesCount}={}){

  function handleClick(ev, data) {
    // console.log("click", ev.target.value);
    ev.data = data;
    userPickAction(ev);
  }

  
  let yy = shuffle(possibles.slice()).slice(0,choicesCount);
  // let yy = possibles.slice(0,choicesCount);
  if(yy.indexOf(answer) === -1){
    yy[0] = answer;
    yy = shuffle(yy);
  }
  // console.log("yy", yy);
  
  let index = -1;
  let list = yy.map(x => 
    <div key={index++} className="button-item">
    {/*
      <button onClick={handleClick} value={x}>{x}</button>
      */}
      <button onClick={(ev)=>handleClick(ev,{value:x, word:word, answer:answer})} value={x}>{x}</button>
    </div>
  );
  list = shuffle(shuffle(list));

  // 
  // 
  // let questionItem = <Subject src={record.img}></Subject>;
  // if(record.displayType === "text"){
  //   questionItem = <h2>{record.word}</h2>;
  // }
  
  return (
    
      <div className="question">
        <h2 className="title">{name}</h2>
        <Subject showAnswer={showAnswer} word={word} answer={answer}></Subject>
        <div className="quizblock">
          {list}
        </div>
      </div>
    
  )
}
