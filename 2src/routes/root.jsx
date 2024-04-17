
import { useState } from 'react'

import { Outlet, Link, useParams } from "react-router-dom";


export default function Root() {
  
  const params = useParams();
  console.log(params);
  
  return (
    <>
      <header id="header">
        <Link to={`/`}><h1>FlashCards, BlastCards!</h1></Link>
      </header>
      
      <nav>
        <ul>
          <li>
            <Link to={`/lesson/japaneseNumbers1`}>Japanese numbers</Link>
          </li>
          <li>
            <Link to={`/lesson/germanNumbers1`}>German numbers</Link>
          </li>
          <li>
            <Link to={`/lesson/spanishNumbers1`}>Spanish numbers</Link>
          </li>
        </ul>
      </nav>
    
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
