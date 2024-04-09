import logo from './logo.svg';
import './App.css';

import { useState, useLayoutEffect, useEffect, useMemo } from 'react';

import {Question} from './aaa/quizParts.js';
import {AnswersView} from './aaa/answersView.js';
// import {data1 as database1} from './data1.js';
import {germanNumbers as database1} from './data1.js';

import {shuffle, randomInt} from './utilites.js';


function App() {


  const [index, setIndex] = useState(0);
  
  const [isDone, setIsDone] = useState(false);
  
  const [tally, setTally] = useState([]);
  // const [sortedItems, setSortedItems] = useState(database1.items);
  // const [sortedItems, setSortedItems] = useState([]);
  
  // this is making app give crazy errors
  // let sortedItems;
  // let sortedItems = database1.items;

  // let yy = database1.items.slice();
  // debugger
  // yy = shuffle(yy);
  // setSortedItems(yy);
  // console.log("sortedItems", sortedItems);

  // function DOFIRST() {
  //   let yy = database1.items.slice();
  //   // debugger
  //   console.log("???? do first ???");
  // 
  //   yy = shuffle(yy);
  //   setSortedItems(yy);
  //   console.log("sortedItems", sortedItems);
  // 
  // }
  // 
  // DOFIRST();
  
  let yy = database1.items.slice();
  // debugger
  console.log("???? do first ???");
  
  yy = shuffle(yy);
  // setSortedItems(yy);
  let sortedItems = yy;
  
  console.log("sortedItems", sortedItems);
  

  
  // useLayoutEffect(() => {
  // useEffect(() => {
  useMemo(() => {
    //check local token or something
    // sortedItems = database1.items.slice();
    // console.log("sortedItems", sortedItems);
    // sortedItems = shuffle(sortedItems);
    // 
    // DOFIRST();
    // 
  // }, []);
}, []);
  
  // this is here for now cause dont know how to send extra arguments
  function handleUserPick(ev) {

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
          name : ev.data.original.name,
          original: ev.data.original,
          pick : ev.data.value
        }
      ])
    }

  }


  // this should change route when isDone
  return (
    <div className="site">
    {/*
    */}
    {!isDone && <Question source={database1} answer={sortedItems[index].answer} possibles={database1.possibles} choicesCount="3" name={database1.name} record={sortedItems[index]} userPick={handleUserPick}></Question>}
    {isDone && <AnswersView record={tally}></AnswersView>}
    </div>
  );
  
  
}

export default App;
