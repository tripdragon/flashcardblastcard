
import { useState } from 'react'

import { Outlet, Link, useParams } from "react-router-dom";

import {frontPagePosts} from '@databases/frontpage';

// import '@styles/frontpageList.scss';

import '@styles/sitetitle.scss';



export default function Root() {
  
  const params = useParams();
  console.log(params);
  
  return (
    <>
    <header id="header">
      <Link to={`/`}><h1>FlashCards <br/>BlastCards!</h1></Link>
    </header>
      {/*
      
      <nav>
        <ul>
          {
            frontPagePosts.map((x,ii)=>{
              return (
                <li key={ii}>
                  <Link to={x.link}>{x.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
      */}

    
    {/*
      */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
