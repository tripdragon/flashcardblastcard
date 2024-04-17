
import {
  useParams
} from "react-router-dom";

// import logo from './logo.svg';
import './lesson-extras/lesson.css';

import { useState, useLayoutEffect, useEffect, useMemo } from 'react';

import {Question} from './lesson-extras/question';
import {AnswersView} from './lesson-extras/answersView';


import {shuffle, randomInt} from '@utilites';



function Lesson({database, saveShuffledPairs, saveLeft, saveRight}) {
  
  const params = useParams();
  
  
  
  
  const [index, setIndex] = useState(0);
  
  const [isDone, setIsDone] = useState(false);
  
  const [tally, setTally] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const databasePick = database[params.lessonId];
  
  const _name = databasePick.title;
  
  // const items = database[params.lessonId][params.category].items;
  let pairs = databasePick.pairs;
  
  // THESE HAVE TO GO into the useMemo
  // const left = pairs.map(pair => Object.keys(pair)[0]);          
  // const right = pairs.map(pair => Object.values(pair)[0]);
  // 
  const left = pairs.map(x => x[0]);       
  const right = pairs.map(x => x[1]);
  
  
  let possibles = left.slice();
  if (databasePick.mode === "second") {
    possibles = right.slice();
  }
  
  
  // const mLeft = useMemo(() => {
  //   let yy = pairs.slice();
  //   yy = shuffle(yy);
  //   return yy;
  //   // console.log("doing effect ONCE!!! 1111");
  // }, [savePairs]);
  

  
  // need to store the data sorting here, cause otherwise the app
  // reruns this in any hook which breaks the app visually of expected questions order
  const shuffledPairs = useMemo(() => {
    let yy = pairs.slice();
    yy = shuffle(yy);
    return yy;
    // console.log("doing effect ONCE!!! 1111");
  }, [saveShuffledPairs]);
  
  // debugger
  
  // const record = shuffledPairs[index];
  // pairs = shuffledPairs;
  
  // here we reverse the order of the word and answer
  let answer = shuffledPairs[index][0];
  let word = shuffledPairs[index][1]
  // debugger
  if (databasePick.mode === "second") {
    // debugger
    word = shuffledPairs[index][0]
    // word = "¿"
    answer = shuffledPairs[index][1];
  }
  console.log("WORD", word);
  
  useEffect(() => {
    console.log("doing effect ONCE!!! 2222");
  });

  console.log("???? do first ???");

  // console.log("shuffledPairs", shuffledPairs);
  


  
  // this is here for now cause dont know how to send extra arguments
  function handleUserPick(ev, data) {
    
    // there is a double settimeout thing here for now
    // first flashes the answer, BUT we also have to delay the transition cause
    // the answer is already updated showing the wrong answer
    // Refactor this in a react~y way
    
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
      if (yy < pairs.length){
        setIndex(index+1);
      }
      else if(yy >= pairs.length){
        setIsDone(true);
      }
      
      // how to add a page delay here?
      
      // check if done in this frame
      if(!isDone || mDone === false && isDone === true){
        setTally([ ...tally,
          {
            name : ev.data.answer,
            original: ev.data,
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
      /*
        We need to convert the arguments here to "context" 
        
        This reloads the next question as setIndex is updated from a button option
      */
      <Question showAnswer={showAnswer} 
        source={database} 
        word={word}
        answer={answer} 
        possibles={possibles} choicesCount="3" 
        name={_name} 
        userPickAction={handleUserPick}>
      </Question>
      
    }
    {isDone && <AnswersView records={tally}></AnswersView>}
    </div>
  );
  
  
}

// ev here is not the event, that got lost in the code noise, cause we need custom data
function isPickTheAnswer(ev) {
  // debugger
  console.log(ev.data);
  // return ev.data.value === ev.data.original.answer;
  return ev.data.value === ev.data.answer;
  // return ev.data.original.indexOf(ev.data.value) > -1;
  // return ev.data.original.indexOf(ev.data.value) > -1;
}

export default Lesson;
