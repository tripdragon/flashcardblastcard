"use client"; // This is a client component :derp:

import Image from "next/image";

import {Multichoice, Subject, Question} from './aaa/quizParts.js';
import {data1 as database1} from './data1.js';

import { useState } from 'react';

export default function Home() {
  
  const [index, setIndex] = useState(0);
  
  const [isDone, setIsDone] = useState(false);
  
  // const tally = [];
  const [tally, setTally] = useState([]);
  // const tally = {};
  
  
  // function handleUserPick(ev: Any) {
  function handleUserPick(ev) {
    // console.log("ev", ev);
    
    // console.log("answer event", ev.data.value);
    const mDone = isDone;
    let yy = index+1;
    if (yy < database1.length){
      setIndex(index+1);
    }
    else if(yy >= database1.length){
      setIsDone(true);
    }
    
    // check if done in this frame
    if(!isDone || mDone === false && isDone === true){
      // debugger
      setTally([ ...tally,
        {
          name : ev.data.original.name,
          original: ev.data.original,
          pick : ev.data.value
        }
      ])
    }
    
    // debugger
  }

  // <h2>{index}</h2>
  return (
    <div className="site">
    {/*
    <Question data={database1[index]} userPick={handleUserPick}></Question>
    */}
    {!isDone && <Question data={database1[index]} userPick={handleUserPick}></Question>}
    {isDone && <AnswersView data={tally}></AnswersView>}
    </div>
  );
  
}
// 
// function clicky() {
//   setIndex(index+1);
// }
// 

function AnswersView({data}) {
  // debugger
  return (
    <div className="answers-view">
      {data.map(x => 
        <ul key={x.id} className="">
          <li>
            <h2>Question: {x.name}</h2>
            <h3>pick: {x.pick} | answer: {x.original.answer}</h3>
          </li>
        </ul>
      )}
    </div>
  )
}
