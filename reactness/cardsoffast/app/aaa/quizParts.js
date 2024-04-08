
// need to fix this path
import {shuffle} from '../utilites.js';

export function Multichoice() {
  return (
    <div class="quizblock">
    <button>A</button>
    <button>B</button>
    <button>C</button>
    </div>
  );
}


export function Subject({src}) {
  return (
    <div class="subjectblock">
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
    <button key={x.id} onClick={handleClick} value={x}>{x}</button>
  );
  list = shuffle(shuffle(list));
  
  const answer = data.answer;
  
  return (
    <div class="question">
      <Subject src={data.img}></Subject>
      <div class="quizblock">
        {list}
      </div>
    </div>
  )
}
