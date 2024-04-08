
// need to fix this path
import {shuffle} from '../utilites.js';

export function Multichoice() {
  return (
    <div className="quizblock">
    <button>A</button>
    <button>B</button>
    <button>C</button>
    </div>
  );
}


export function Subject({src}) {
  return (
    <div className="subjectblock">
    <img src={src} />
    </div>
  );
}



export function Question({data, userPick}){
  
  function handleClick(ev) {
    // console.log("click", ev.target.value);
    userPick({data:{value:ev.target.value, original:data}});
  }
  
  let list = data.choices.slice().map(x => 
    <div class="button-item">
      <span>{x}</span>
      <button key={x.id} onClick={handleClick} value={x}>{x}</button>
    </div>
  );
  list = shuffle(shuffle(list));
  
  const answer = data.answer;
  
  return (
    <div className="question">
      <Subject src={data.img}></Subject>
      <div className="quizblock">
        {list}
      </div>
    </div>
  )
}
