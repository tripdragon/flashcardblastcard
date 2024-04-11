import logo from './logo.svg';
import './App.css';

import { useState, useLayoutEffect, useEffect, useMemo } from 'react';

import {Question} from './aaa/question.js';
import {AnswersView} from './aaa/answersView.js';
// import {data1 as database1} from './data1.js';
import {germanNumbers as database1} from './data1.js';

import {shuffle, randomInt} from './utilites.js';



function App({mSortedItems}) {
  const [index, setIndex] = useState(0);
  
  const [isDone, setIsDone] = useState(false);
  
  const [tally, setTally] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  
  // need to store the data sorting here, cause otherwise the app
  // reruns this in any hook otherwise
  const sortedItems = useMemo(() => {
    let yy = database1.items.slice();
    yy = shuffle(yy);
    return yy;
    // console.log("doing effect ONCE!!! 1111");
  }, [mSortedItems]);
  
  // useEffect(() => {
  //   console.log("doing effect ONCE!!! 2222");
  // });

  console.log("???? do first ???");

  // console.log("sortedItems", sortedItems);
  


  
  // this is here for now cause dont know how to send extra arguments
  function handleUserPick(ev) {
    
    // debugger
    // flash the answer
    if( !isPickTheAnswer(ev) ){  
      setShowAnswer(true);
      
      setTimeout(()=>{
        console.log("?sdkgfmfdgg");
        setShowAnswer(false);
        
        
      }, 200)
    }
    
    // return;
    
    setTimeout(()=>{
        
      // some state checking, seems Not react~y
      const mDone = isDone;
      let yy = index+1;
      if (yy < database1.items.length){
        setIndex(index+1);
      }
      else if(yy >= database1.items.length){
        setIsDone(true);
      }
      
      // how to add a page delay here?
      
      // check if done in this frame
      if(!isDone || mDone === false && isDone === true){
        setTally([ ...tally,
          {
            name : ev.data.original.answer,
            original: ev.data.original,
            pick : ev.data.value
          }
        ])
      }

    }, 200)

  }


  // this should change route when isDone
  return (
    <div className="site">
      
    {/*
    */}
    {!isDone && 
      
      <Question showAnswer={showAnswer} source={database1} answer={sortedItems[index].answer} possibles={database1.possibles} choicesCount="3" name={database1.name} record={sortedItems[index]} userPick={handleUserPick}></Question>
      
    }
    {isDone && <AnswersView records={tally}></AnswersView>}
    </div>
  );
  
  
}


function isPickTheAnswer(ev) {
  return ev.data.value === ev.data.original.answer;
}

export default App;
