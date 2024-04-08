
// need to fix this path
import {shuffle} from '../utilites.js';

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


// single record
export function Question({record, userPick}){
  
  function handleClick(ev) {
    // console.log("click", ev.target.value);
    userPick({data:{value:ev.target.value, original:record}});
  }
  
  let list = record.choices.slice().map(x => 
    <div class="button-item">
      <span>{x}</span>
      <button key={x.id} onClick={handleClick} value={x}>{x}</button>
    </div>
  );
  list = shuffle(shuffle(list));
  
  const answer = record.answer;
  // 
  // 
  // let questionItem = <Subject src={record.img}></Subject>;
  // if(record.displayType === "text"){
  //   questionItem = <h2>{record.word}</h2>;
  // }
  
  return (
    <div className="question">
      <Subject record={record}></Subject>;
    
      
      <div className="quizblock">
        {list}
      </div>
    </div>
  )
}
